import { getPlans } from "@/lib/api/plans";
import { Heading } from "@/components/marketing/Heading";
import { PlansPageClient } from "@/components/marketing/PlansPageClient";

export default async function PlansPage() {
  const plans = await getPlans();

  return (
    <>
      {/* Header Section */}
      <section className="border-b border-border bg-muted/30">
        <div className="mx-auto max-w-6xl px-6 py-14">
          <Heading
            eyebrow="Simple process"
            title="Compare HMO Plans"
            description="Find the perfect health insurance plan for your needs. Compare coverage, pricing, and providers side by side."
          />
        </div>
      </section>

      <PlansPageClient initialPlans={plans} />
    </>
  );
}
