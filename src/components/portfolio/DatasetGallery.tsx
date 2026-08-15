import { useState } from "react";
import { Database, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { TiltCard } from "./TiltCard";

type Dataset = {
  name: string;
  size: string;
  type: "Text" | "Image";
  source: "Hugging Face" | "Kaggle";
  details: string;
  url: string;
};

const DATASETS: Dataset[] = [
  {
    name: "IMDB Movie Reviews",
    size: "50K rows · 84 MB",
    type: "Text",
    source: "Hugging Face",
    details:
      "Balanced binary sentiment dataset used to train my Sentiment Analyzer. 25K reviews for training and 25K for testing.",
    url: "https://huggingface.co/datasets/imdb",
  },
  {
    name: "CIFAR-10",
    size: "60K images · 170 MB",
    type: "Image",
    source: "Hugging Face",
    details:
      "Tiny 32x32 colour images across 10 classes. Great starter set for learning convolutional networks.",
    url: "https://huggingface.co/datasets/cifar10",
  },
  {
    name: "SQuAD v2",
    size: "150K Q&A · 44 MB",
    type: "Text",
    source: "Hugging Face",
    details:
      "Reading-comprehension questions with unanswerable cases — powers the AI Quiz Generator prompts.",
    url: "https://huggingface.co/datasets/squad_v2",
  },
  {
    name: "Titanic Survival",
    size: "891 rows · 60 KB",
    type: "Text",
    source: "Kaggle",
    details:
      "Classic tabular dataset I used for my first pandas analysis and logistic regression experiment.",
    url: "https://www.kaggle.com/c/titanic",
  },
];

export function DatasetGallery() {
  const [active, setActive] = useState<Dataset | null>(null);

  return (
    <section id="datasets" className="relative py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div data-reveal className="reveal text-center">
          <h2 className="font-display text-3xl font-bold sm:text-4xl">
            Dataset <span className="text-gradient">Gallery</span>
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
            Datasets I explore, clean and learn from. Click a card for details.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {DATASETS.map((d, i) => (
            <TiltCard key={d.name} delay={i * 90} className="cursor-pointer">
              <button type="button" onClick={() => setActive(d)} className="w-full text-left">
                <Database className="size-6 text-primary" />
                <h3 className="font-display mt-4 text-lg font-bold">{d.name}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{d.size}</p>
                <div className="mt-4 flex flex-wrap gap-2 text-xs">
                  <span className="rounded-md bg-primary/10 px-2 py-1 text-primary">{d.type}</span>
                  <span className="rounded-md bg-violet/20 px-2 py-1 text-foreground">{d.source}</span>
                </div>
              </button>
            </TiltCard>
          ))}
        </div>

        <div data-reveal className="reveal mt-10 text-center">
          <Button asChild variant="neon" size="lg">
            <a href="https://huggingface.co/datasets" target="_blank" rel="noreferrer">
              Explore More <ArrowUpRight />
            </a>
          </Button>
        </div>
      </div>

      <Dialog open={!!active} onOpenChange={(o) => !o && setActive(null)}>
        <DialogContent className="glass">
          <DialogHeader>
            <DialogTitle className="font-display">{active?.name}</DialogTitle>
            <DialogDescription>{active?.details}</DialogDescription>
          </DialogHeader>
          <dl className="grid grid-cols-3 gap-3 text-sm">
            <div>
              <dt className="text-xs text-muted-foreground">Size</dt>
              <dd>{active?.size}</dd>
            </div>
            <div>
              <dt className="text-xs text-muted-foreground">Type</dt>
              <dd>{active?.type}</dd>
            </div>
            <div>
              <dt className="text-xs text-muted-foreground">Source</dt>
              <dd>{active?.source}</dd>
            </div>
          </dl>
          {active && (
            <Button asChild variant="neon" size="sm" className="mt-2 w-full">
              <a href={active.url} target="_blank" rel="noreferrer">
                Open dataset <ArrowUpRight />
              </a>
            </Button>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}