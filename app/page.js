import { MarketingNav } from "@/components/layout/MarketingNav";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/marketing/Hero";
import { TrustStrip } from "@/components/marketing/TrustStrip";
import { HowItWorks } from "@/components/marketing/HowItWorks";
// import { HmoComparisonPreview } from "@/components/marketing/HmoComparisonPreview";
import { JoinNhim } from "@/components/marketing/JoinNhim";
import { FeaturedPlans } from "@/components/marketing/FeaturedPlans";
import { TopInsurancePlans } from "@/components/marketing/TopInsurancePlans";
import { TestimonialsMarquee } from "@/components/marketing/Testimonial";

export default function Home() {
  return (
    <>
      <MarketingNav />
      <Hero />
      <TrustStrip />
      <HowItWorks />
      <FeaturedPlans />
      <TopInsurancePlans />
      <TestimonialsMarquee />
      {/* <HmoComparisonPreview /> */}
      <JoinNhim />
      <Footer />
    </>
  );
}
