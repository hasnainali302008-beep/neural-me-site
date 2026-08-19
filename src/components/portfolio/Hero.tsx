import { useEffect, useState } from "react";
import { Bot, Sparkles, RefreshCw, FileDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Particles } from "./Particles";

const TAGLINES = [
  "I build websites that think!",
  "Turning prompts into products.",
  "Datasets in, delightful apps out.",
  "Teaching pixels to predict.",
  "Small student, big neural dreams.",
];

const NAME = "Mehtab Ali";

export function Hero() {
  const [typed, setTyped] = useState("");
  const [tagIndex, setTagIndex] = useState(0);
  const [spinning, setSpinning] = useState(false);

  useEffect(() => {
    let i = 0;
    const id = setInterval(() => {
      i += 1;
      setTyped(NAME.slice(0, i));
      if (i >= NAME.length) clearInterval(id);
    }, 90);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    const id = setInterval(() => setTagIndex((i) => (i + 1) % TAGLINES.length), 4500);
    return () => clearInterval(id);
  }, []);

  const generate = () => {
    setSpinning(true);
    setTagIndex((i) => (i + 1) % TAGLINES.length);
    setTimeout(() => setSpinning(false), 600);
  };

  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden pt-24">
      <Particles />
      <div className="relative mx-auto w-full max-w-6xl px-4 sm:px-6">
        <div className="animate-fade-up glass mx-auto max-w-3xl rounded-[2rem] p-8 text-center sm:p-12">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-4 py-1.5 text-xs font-medium text-primary">
            <Sparkles className="size-3.5" /> Available for AI collaborations
          </span>

          <h1 className="font-display mt-6 text-4xl font-bold leading-tight sm:text-6xl">
            Hello, I&apos;m <span className="text-gradient">{typed}</span>
            <span className="ml-1 inline-block w-[3px] animate-pulse bg-primary align-middle text-transparent">
              |
            </span>
          </h1>

          <p className="mt-4 text-base text-muted-foreground sm:text-lg">
            AI Developer <span className="text-primary">|</span> Python Enthusiast{" "}
            <span className="text-primary">|</span> 10th Grade Student
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button asChild variant="neon" size="lg">
              <a href="#projects">View AI Projects</a>
            </Button>
            <Button asChild variant="success" size="lg">
              <a href="#contact">
                <Bot /> Chat with AI
              </a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href="/cv.pdf" download>
                <FileDown /> Download CV
              </a>
            </Button>
          </div>

          <div className="mt-10 flex flex-col items-center gap-3">
            <p className="font-display text-lg text-foreground sm:text-xl">
              &ldquo;{TAGLINES[tagIndex]}&rdquo;
            </p>
            <button
              type="button"
              onClick={generate}
              className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-1.5 text-xs text-muted-foreground transition-colors hover:text-foreground"
            >
              <RefreshCw className={`size-3.5 ${spinning ? "animate-spin" : ""}`} />
              Generate AI tagline
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}