import { MarketingNav } from "@/components/layout/MarketingNav";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/marketing/Hero";
import { TrustStrip } from "@/components/marketing/TrustStrip";
import { HowItWorks } from "@/components/marketing/HowItWorks";
import { HmoComparisonPreview } from "@/components/marketing/HmoComparisonPreview";
import { ForHmoCta } from "@/components/marketing/ForHmoCta";
import { FeaturedPlans } from "@/components/marketing/FeaturedPlans";
import { TopInsurancePlans } from "@/components/marketing/TopInsurancePlans";

export default function Home() {
  return (
    <>
      <MarketingNav />
      <Hero />
      <TrustStrip />
      <HowItWorks />
      <FeaturedPlans />
      <TopInsurancePlans />
      <HmoComparisonPreview />
      <ForHmoCta />
      <Footer />
    </>
  );
}
