import { CatalogueSection } from "@/components/catalogue-section"
import { CompatibleBrandsSection } from "@/components/compatible-brands-section"
import { ContactUsSection } from "@/components/contact-us-section"
import { CustomerReviewsSection } from "@/components/customer-reviews"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/hero-section"
import { Navbar } from "@/components/navbar"
import { WhyChooseUsSection } from "@/components/why-choose-us-section"

export default function Page() {
  return (
    <>
      <Navbar />
      <div className="mt-20">
        <HeroSection />
        <CompatibleBrandsSection />
        <CatalogueSection />
        <WhyChooseUsSection />
        <CustomerReviewsSection />
        <ContactUsSection />
        <Footer />
      </div>
    </>
  )
}
