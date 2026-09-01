import { Hero } from "@/components/marketing/Hero";
import { TrustStrip } from "@/components/marketing/TrustStrip";
import { HowItWorks } from "@/components/marketing/HowItWorks";
// import { HmoComparisonPreview } from "@/components/marketing/HmoComparisonPreview";
import { JoinNhim } from "@/components/marketing/JoinNhim";
import { OurPartners } from "@/components/marketing/OurPartners";
import { TopInsurancePlans } from "@/components/marketing/TopInsurancePlans";
import { TestimonialsMarquee } from "@/components/marketing/Testimonial";
// import { Footer } from "@/components/layout/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <HowItWorks />
      <OurPartners />
      <TopInsurancePlans />
      <TestimonialsMarquee />
      {/* <HmoComparisonPreview /> */}
      <JoinNhim />
      {/* <Footer /> */}
    </>
  );
}
