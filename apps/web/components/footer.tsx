import Image from "next/image"
import Logo from "../app/images/Logo.svg"
import Link from "next/link"
import FooterLogo from "@/app/images/FooterLogo.svg"
const footerData = [
  {
    heading: "Product",
    links: [
      { url: "#engine-parts", label: "Engine Parts" },
      { url: "#brake-systems", label: "Brake Systems" },
      { url: "#electrical", label: "Electrical" },
      { url: "#suspensions", label: "Suspensions" },
      { url: "#body-parts", label: "Body Parts" },
    ],
  },
  {
    heading: "Support",
    links: [
      { url: "#get-a-quote", label: "Get a quote" },
      { url: "#return-policy", label: "Return Policy" },
      { url: "#delivery-info", label: "Delivery Info" },
      { url: "#contact-us", label: "Contact Us" },
      { url: "#support", label: "Support" },
    ],
  },
  {
    heading: "Company",
    links: [
      { url: "#about-us", label: "About Us" },
      { url: "#partners", label: "Partners" },
      { url: "#trade-account", label: "Trade Account" },
      { url: "#careers", label: "Careers" },
      { url: "#history", label: "History" },
    ],
  },
]

export function Footer() {
  return (
    <footer className="mx-auto flex flex-col items-center justify-center gap-10 bg-[#F7F7F9] px-6 py-20 lg:px-10">
      <div className="flex w-full flex-col gap-10 lg:gap-20">
        <div className="flex flex-col items-start justify-between gap-10 lg:flex-row lg:gap-20">
          <div className="flex flex-col items-start gap-4 lg:basis-1/2">
            <Image src={Logo} alt="Logo Image" />
            <p className="text-muted-foreground">
              Your trusted wholesale auto spare parts supplier,quality, speed,
              and reliability built for trade professionals across Nigeria.
            </p>
          </div>

          <div className="grid gap-10 lg:ml-auto lg:basis-1/2 lg:grid-cols-3 lg:justify-items-end lg:justify-self-end">
            {footerData.map((item, i) => (
              <div key={i} className="flex flex-col gap-4">
                <h4 className="text-base font-medium tracking-[2%] text-primary uppercase">
                  {item.heading}
                </h4>

                <div className="flex flex-col gap-1">
                  {item.links.map((link, i) => (
                    <Link
                      key={i}
                      href={link.url}
                      className="text-base tracking-[2%] text-muted-foreground"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-40">
          <div className="flex flex-col justify-between gap-10 lg:flex-row lg:items-center">
            <p className="text-muted-foreground">
              Privacy © 2025{" "}
              <span className="font-medium text-primary">compisium</span>{" "}
              Parts. All rights reserved. Policy
            </p>
            <div className="grid gap-4 lg:grid-cols-3 lg:justify-items-end">
              <Link href="#" className="text-muted-foreground">
                Privacy Policy
              </Link>
              <Link href="#" className="text-muted-foreground">
                Terms of trade{" "}
              </Link>
              <Link href="#" className="text-muted-foreground">
                Cookie Policy{" "}
              </Link>
            </div>
          </div>

          <Image src={FooterLogo} alt="Footer Logo" className="self-center" />
        </div>
      </div>
    </footer>
  )
}
