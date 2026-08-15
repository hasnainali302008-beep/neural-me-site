import { useEffect, useState } from "react";

export function Loader() {
  const [done, setDone] = useState(false);

  useEffect(() => {
    const id = setTimeout(() => setDone(true), 1200);
    return () => clearTimeout(id);
  }, []);

  return (
    <div
      aria-hidden={done}
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background transition-opacity duration-500 ${
        done ? "pointer-events-none opacity-0" : "opacity-100"
      }`}
    >
      <div className="size-14 animate-spin rounded-full border-2 border-border border-t-primary" />
      <p className="font-display mt-6 text-sm tracking-widest text-muted-foreground">
        BOOTING AI PORTFOLIO...
      </p>
    </div>
  );
}