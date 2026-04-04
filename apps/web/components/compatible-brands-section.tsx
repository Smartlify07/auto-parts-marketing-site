import Image from "next/image"
import React from "react"
import NissanLogo from "@/app/images/Nissan_logo logo.svg"
import SubaruLogo from "@/app/images/Subaru_logo logo.svg"
import LexusLogo from "@/app/images/Vector.svg"
import ToyotaLogo from "@/app/images/toyota logo.svg"
export default function CompatibleBrandsSection() {
  return (
    <section className="mx-auto flex flex-col items-center justify-center gap-10 px-10 py-20 lg:px-0">
      <h4 className="text-center font-semibold tracking-[40%] text-foreground">
        CERTIFIED WHOLESALE DISTRIBUTOR
      </h4>

      <div className="flex flex-wrap items-center gap-10">
        <Image src={LexusLogo} alt="Lexus Logo" />
        <Image src={NissanLogo} alt="Nissan Logo" />
        <Image src={ToyotaLogo} alt="Toyota Logo" />
        <Image src={SubaruLogo} alt="Subaru Logo" />
      </div>
    </section>
  )
}
