import { useEffect, useState } from "react";
import { Sparkles } from "lucide-react";

const FACTS = [
  "The word “robot” comes from the Czech word robota, meaning forced labour.",
  "GPT-style models read text as tokens — roughly 4 characters each.",
  "Hugging Face hosts over 200,000 open datasets for anyone to use.",
  "The first neural network, the Perceptron, was built in 1958.",
  "Training data quality usually matters more than model size.",
  "Python was named after Monty Python, not the snake.",
];

const LINKS = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#projects", label: "AI Projects" },
  { href: "#datasets", label: "Datasets" },
  { href: "#contact", label: "Contact" },
];

export function Footer() {
  const [i, setI] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setI((v) => (v + 1) % FACTS.length), 5000);
    return () => clearInterval(id);
  }, []);

  return (
    <footer className="glass mt-12 border-t border-border">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="flex flex-col items-center gap-6 text-center">
          <p className="font-display text-lg">
            <span aria-hidden>🧠</span> <span className="text-gradient">AI Portfolio</span>
          </p>
          <nav>
            <ul className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
              {LINKS.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="transition-colors hover:text-foreground">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <p
            key={i}
            className="animate-fade-up inline-flex max-w-lg items-center gap-2 rounded-full border border-border px-4 py-2 text-xs text-muted-foreground"
          >
            <Sparkles className="size-3.5 shrink-0 text-primary" /> AI fact: {FACTS[i]}
          </p>
          <p className="text-xs text-muted-foreground">
            Built with ❤️ using AI | © 2025 Mehtab Ali
          </p>
        </div>
      </div>
    </footer>
  );
}