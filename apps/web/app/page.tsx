import { CatalogueSection } from "@/components/catalogue-section"
import { CompatibleBrandsSection } from "@/components/compatible-brands-section"
import { ContactUsSection } from "@/components/contact-us-section"
import { CustomerReviewsSection } from "@/components/customer-reviews"
import { HeroSection } from "@/components/hero-section"
import { Navbar } from "@/components/navbar"
import { WhyChooseUsSection } from "@/components/why-choose-us-section"

export default function Page() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <CompatibleBrandsSection />
      <CatalogueSection />
      <WhyChooseUsSection />
      <CustomerReviewsSection />
      <ContactUsSection />
    </>
  )
}
