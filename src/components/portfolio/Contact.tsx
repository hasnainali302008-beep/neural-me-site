import { useState } from "react";
import { Github, Linkedin, Twitter, Youtube, Send, Bot } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const SOCIALS = [
  { icon: Github, label: "GitHub", href: "https://github.com/" },
  { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com/" },
  { icon: Twitter, label: "Twitter", href: "https://twitter.com/" },
  { icon: Youtube, label: "YouTube", href: "https://youtube.com/" },
];

export function Contact() {
  const [sending, setSending] = useState(false);
  const [reply, setReply] = useState<string | null>(null);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const name = (new FormData(form).get("name") as string) || "there";
    setSending(true);
    setTimeout(() => {
      setSending(false);
      setReply(`Hi ${name}! Your message reached my inbox. AI will respond within 24 hours!`);
      toast.success("Message sent", { description: "AI will respond within 24 hours!" });
      form.reset();
    }, 900);
  };

  return (
    <section id="contact" className="relative py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div data-reveal className="reveal text-center">
          <h2 className="font-display text-3xl font-bold sm:text-4xl">
            Get in <span className="text-gradient">Touch</span>
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
            Have an AI idea? Send it over — my AI assistant replies first.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-[1.2fr_1fr]">
          <form
            onSubmit={onSubmit}
            data-reveal
            className="reveal glass space-y-4 rounded-3xl p-6 sm:p-8"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" name="name" required placeholder="Your name" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" name="email" type="email" required placeholder="you@email.com" />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea id="message" name="message" required rows={5} placeholder="Tell me about your project..." />
            </div>
            <Button type="submit" variant="neon" size="lg" disabled={sending} className="w-full">
              <Send /> {sending ? "Sending..." : "Send Message"}
            </Button>

            {reply && (
              <div className="animate-fade-up flex gap-3 rounded-2xl border border-success/40 bg-success/10 p-4 text-sm">
                <Bot className="size-5 shrink-0 text-success" />
                <p>{reply}</p>
              </div>
            )}
          </form>

          <div data-reveal className="reveal glass rounded-3xl p-6 sm:p-8" style={{ transitionDelay: "120ms" }}>
            <h3 className="font-display text-xl font-bold">Find me online</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              I post experiments, notebooks and build logs.
            </p>
            <ul className="mt-6 grid grid-cols-2 gap-3">
              {SOCIALS.map(({ icon: Icon, label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 rounded-xl border border-border px-3 py-3 text-sm transition-colors hover:border-primary/50 hover:bg-primary/10"
                  >
                    <Icon className="size-4 text-primary" /> {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}