// Keep static imports for Server Components
import Hero from '@/components/Hero';
import About from '@/components/About';
import Education from '@/components/Education';
import Certifications from '@/components/Certifications';
import Contact from '@/components/Contact';

// Import the new Client Component wrapper
import ClientSections from '@/components/ClientSections';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Render Server Components directly */}
      <Hero />
      <About />

      {/* Render Client Components via the wrapper */}
      <ClientSections />

      {/* Render remaining Server Components */}
      <Education />
      <Certifications />
      <Contact />
    </main>
  );
}
