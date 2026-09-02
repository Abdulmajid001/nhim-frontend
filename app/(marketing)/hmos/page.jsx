// export default function Page() {
//   return (
//     <main className="mx-auto max-w-4xl px-6 py-16">
//       <p className="font-mono-data text-xs uppercase tracking-widest text-gold">
//         Route stub
//       </p>
//       <h1 className="mt-2 font-display text-3xl text-ink">Browse HMOs</h1>
//       <p className="mt-3 text-graphite">
//         Build this page next — see PAGES.md for the section-by-section spec.
//       </p>
//     </main>
//   );
// }

import { Heading } from "@/components/marketing/Heading";
import { HmosExplorer } from "@/components/marketing/HmosExplorer";
import { getHmos } from "@/lib/api/hmos";

export default async function HmosPage() {
  const hmos = await getHmos();

  return (
    <>
      <section className="border-b border-border bg-muted/30">
        <div className="mx-auto max-w-6xl px-6 py-14">
          <Heading
            eyebrow="Our HMO Partners"
            title="Trusted Health Insurance Providers"
            description="Browse our network of verified HMOs offering quality health insurance plans across Nigeria. Compare, review, and choose with confidence."
          />
        </div>
      </section>

      <HmosExplorer initialHmos={hmos} />
    </>
  );
}
