import CountUp from "../CountUp";

const stats = [
  { value: "40", label: "Accredited HMOs" },
  { value: "600", label: "Partner Hospitals" },
  { value: "99.9", label: "Transaction Success" },
];

export function TrustStrip() {
  return (
    <section className="border-b border-border bg-muted/50">
      <div className="mx-auto grid max-w-6xl grid-cols-3 gap-8 place-items-center px-6 py-10 ">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="flex flex-col items-center text-center"
          >
            <div className="flex items-baseline justify-center">
              <CountUp
                from={0}
                to={stat.value}
                separator=","
                direction="up"
                duration={1}
                className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl"
                delay={0}
              />
              <span className="ml-1 text-xl font-semibold text-foreground sm:text-3xl">
                +
              </span>
            </div>

            <p className="mt-1 text-center text-sm md:text-xl text-muted-foreground">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}