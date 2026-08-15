import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { TiltCard } from "./TiltCard";

const PROJECTS = [
  {
    title: "Sentiment Analyzer",
    description: "AI detects mood from text",
    tech: ["Python", "Hugging Face", "Lovable"],
    badge: "AI Powered",
    demo: "https://lovable.dev/projects/97489dec-0a7c-49c3-9d8e-74b816454075",
    github: "https://github.com/",
  },
  {
    title: "Dataset Explorer",
    description: "Browse and analyze AI datasets",
    tech: ["Python", "Hugging Face", "Lovable"],
    badge: "Data Science",
    demo: "https://lovable.dev/projects/5e1fd187-06f8-40a8-97ca-f34391f2bbe4",
    github: "https://github.com/",
  },
  {
    title: "AI Quiz Generator",
    description: "AI creates custom quizzes on any topic",
    tech: ["Python", "Lovable", "AI APIs"],
    badge: "Generative AI",
    demo: "https://lovable.dev/projects/dd24435c-74c7-4518-b1c0-f890f4b51683",
    github: "https://github.com/",
  },
];

export function Projects() {
  return (
    <section id="projects" className="relative py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div data-reveal className="reveal text-center">
          <h2 className="font-display text-3xl font-bold sm:text-4xl">
            AI <span className="text-gradient">Projects</span>
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
            Things I built while learning how models think.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {PROJECTS.map((p, i) => (
            <TiltCard key={p.title} delay={i * 120}>
              <span className="inline-flex rounded-full bg-brand-gradient px-3 py-1 text-xs font-semibold text-primary-foreground">
                {p.badge}
              </span>
              <h3 className="font-display mt-4 text-xl font-bold">{p.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{p.description}</p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {p.tech.map((t) => (
                  <li key={t} className="rounded-md bg-muted px-2.5 py-1 text-xs text-muted-foreground">
                    {t}
                  </li>
                ))}
              </ul>
              <div className="mt-6 flex gap-2">
                <Button asChild variant="neon" size="sm">
                  <a href={p.demo} target="_blank" rel="noreferrer">
                    <ExternalLink /> Live Demo
                  </a>
                </Button>
                <Button asChild variant="ghostNeon" size="sm">
                  <a href={p.github} target="_blank" rel="noreferrer">
                    <Github /> GitHub
                  </a>
                </Button>
              </div>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  );
}