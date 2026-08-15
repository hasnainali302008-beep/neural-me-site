const PARTICLES = Array.from({ length: 28 }, (_, i) => ({
  left: (i * 37) % 100,
  size: 3 + ((i * 7) % 9),
  duration: 14 + ((i * 5) % 18),
  delay: (i * 1.7) % 16,
  violet: i % 3 === 0,
}));

export function Particles() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="animate-aurora absolute -left-1/4 top-[-20%] h-[70vh] w-[70vw] rounded-full bg-primary/20 blur-[120px]" />
      <div className="animate-aurora absolute -right-1/4 bottom-[-30%] h-[70vh] w-[70vw] rounded-full bg-violet/25 blur-[130px] [animation-delay:-6s]" />
      {PARTICLES.map((p, i) => (
        <span
          key={i}
          className={`absolute bottom-[-10%] rounded-full ${p.violet ? "bg-violet" : "bg-primary"}`}
          style={{
            left: `${p.left}%`,
            width: p.size,
            height: p.size,
            opacity: 0.5,
            animation: `float-up ${p.duration}s linear ${p.delay}s infinite`,
          }}
        />
      ))}
    </div>
  );
}