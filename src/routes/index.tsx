import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/portfolio/Header";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Projects } from "@/components/portfolio/Projects";
import { DatasetGallery } from "@/components/portfolio/DatasetGallery";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";
import { WhatsAppButton } from "@/components/portfolio/WhatsAppButton";
import { Loader } from "@/components/portfolio/Loader";
import { useReveal } from "@/components/portfolio/useReveal";

const title = "Mehtab Ali — AI Developer Portfolio";
const description =
  "AI-powered portfolio of Mehtab Ali: Python projects, Hugging Face dataset explorations, and web apps built with AI tools.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  const ref = useReveal<HTMLDivElement>();

  return (
    <div ref={ref} className="relative min-h-screen overflow-x-hidden">
      <Loader />
      <Header />
      <main>
        <Hero />
        <About />
        <Projects />
        <DatasetGallery />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
