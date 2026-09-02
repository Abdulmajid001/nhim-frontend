import { MarketingNav } from "@/components/layout/MarketingNav";
import { Footer } from "@/components/layout/Footer";

export default function MarketingLayout({ children }) {
  return (
    <>
      <MarketingNav />
      {children}
      <Footer />
    </>
  );
}
