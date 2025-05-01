# Stage 1: Build the application
FROM node:20-alpine AS builder

# Set working directory
WORKDIR /app

# Copy package files and install dependencies
# Use package-lock.json if available for deterministic installs
COPY package.json package-lock.json* ./
RUN npm install --frozen-lockfile

# Copy the rest of the application code
COPY . .

# Build the Next.js application for standalone output
# Ensure NEXT_TELEMETRY_DISABLED is set to 1 to prevent build hangs
ENV NEXT_TELEMETRY_DISABLED 1
RUN npm run build

# Remove development dependencies after build (optional, as standalone handles this)
# RUN npm prune --production

# Stage 2: Create the production image
FROM node:20-alpine AS runner

WORKDIR /app

# Copy necessary files from the builder stage's standalone output
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static

# Expose the port the app runs on (default is 3000)
EXPOSE 3000

# Set environment variable for the port
ENV PORT 3000

# Set the command to start the application using the standalone server
CMD ["node", "server.js"]