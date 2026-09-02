import { Heading } from "@/components/marketing/Heading";
import { HelpExplorer } from "@/components/marketing/HelpExplorer";

export default function HelpPage() {
  return (
    <main>
      <section className="border-b border-border bg-muted/30">
        <div className="mx-auto max-w-6xl px-6 py-14">
          <Heading
            eyebrow="Support, made simple"
            title="How can we help?"
            description="Find quick answers about comparing plans, enrolling, and managing your NHIM.ng account."
          />
        </div>
      </section>

      <HelpExplorer />
    </main>
  );
}
