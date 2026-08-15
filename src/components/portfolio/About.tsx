import { useEffect, useState } from "react";
import { Wand2 } from "lucide-react";
import avatar from "@/assets/avatar.jpg";
import { Button } from "@/components/ui/button";

const SKILLS = ["Python", "AI", "Web Development", "Data Analysis", "Prompt Engineering"];

const AI_DESCRIPTIONS = [
  "Blends Python scripting with modern web tooling to ship AI features fast — from cleaning Hugging Face datasets to wiring up model outputs inside polished interfaces.",
  "Comfortable moving between notebooks and components: analyses data, engineers prompts that behave, and turns model responses into products people actually use.",
  "A self-taught builder whose strongest skill is iteration — prototype with AI, measure the output, refine the prompt, ship the interface.",
];

export function About() {
  const [idx, setIdx] = useState(0);
  const [typing, setTyping] = useState(false);

  useEffect(() => {
    if (!typing) return;
    const id = setTimeout(() => setTyping(false), 700);
    return () => clearTimeout(id);
  }, [typing]);

  return (
    <section id="about" className="relative py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid items-center gap-10 md:grid-cols-[320px_1fr]">
          <div data-reveal className="reveal animate-slide-in mx-auto">
            <div className="glass rounded-[2rem] p-3 shadow-[var(--shadow-neon)]">
              <img
                src={avatar}
                alt="AI-generated avatar of Mehtab Ali"
                loading="lazy"
                width={768}
                height={768}
                className="h-64 w-64 rounded-[1.6rem] object-cover sm:h-72 sm:w-72"
              />
            </div>
          </div>

          <div data-reveal className="reveal" style={{ transitionDelay: "120ms" }}>
            <h2 className="font-display text-3xl font-bold sm:text-4xl">
              About <span className="text-gradient">Me</span>
            </h2>
            <p className="mt-4 text-muted-foreground">
              I&apos;m a 12th grade student passionate about AI. I build web apps using AI tools like
              Lovable, Python, and Hugging Face datasets.
            </p>

            <ul className="mt-6 flex flex-wrap gap-2">
              {SKILLS.map((s) => (
                <li
                  key={s}
                  className="rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm text-primary"
                >
                  {s}
                </li>
              ))}
            </ul>

            <div className="glass mt-8 rounded-2xl p-5">
              <p className="text-xs uppercase tracking-widest text-muted-foreground">
                AI-generated skills summary
              </p>
              <p className={`mt-2 text-sm text-foreground ${typing ? "opacity-40" : "opacity-100"} transition-opacity`}>
                {AI_DESCRIPTIONS[idx]}
              </p>
              <Button
                variant="ghostNeon"
                size="sm"
                className="mt-4"
                onClick={() => {
                  setTyping(true);
                  setIdx((i) => (i + 1) % AI_DESCRIPTIONS.length);
                }}
              >
                <Wand2 /> Rewrite with AI
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}