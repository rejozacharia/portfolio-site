// Import the Client Component wrapper that now handles all sections
import ClientSections from "@/components/ClientSections";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Render the single Client Component which orchestrates sections and animations */}
      <ClientSections />
    </main>
  );
}
