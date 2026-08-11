export function Seal({ label }) {
  return (
    <div className="relative flex h-16 w-16 shrink-0 items-center justify-center rounded-full border-[1.5px] border-gold text-gold">
      <div className="absolute inset-1 rounded-full border border-dashed border-gold/50" />
      <span className="font-mono-data text-[9px] uppercase tracking-widest text-center leading-tight px-1">
        {label}
      </span>
    </div>
  );
}
