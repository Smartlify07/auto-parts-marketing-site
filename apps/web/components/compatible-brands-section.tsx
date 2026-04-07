"use client";

import Image from "next/image"
import React from "react"
import { motion } from "framer-motion"
import NissanLogo from "@/app/images/Nissan_logo logo.svg"
import SubaruLogo from "@/app/images/Subaru_logo logo.svg"
import LexusLogo from "@/app/images/Vector.svg"
import ToyotaLogo from "@/app/images/toyota logo.svg"

const brandLogos = [
  { src: LexusLogo, alt: "Lexus Logo" },
  { src: NissanLogo, alt: "Nissan Logo", className: "h-6" },
  { src: ToyotaLogo, alt: "Toyota Logo" },
  { src: SubaruLogo, alt: "Subaru Logo" },
]

export function CompatibleBrandsSection() {
  return (
    <section className="mx-auto flex flex-col items-center justify-center gap-10 px-6 py-20 lg:px-10">
      <motion.h4
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="text-center font-semibold tracking-[40%] text-foreground"
      >
        CERTIFIED WHOLESALE DISTRIBUTOR
      </motion.h4>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { staggerChildren: 0.15, delayChildren: 0.1 },
          },
        }}
        className="flex flex-wrap items-center justify-center gap-10"
      >
        {brandLogos.map((logo, index) => (
          <motion.div
            key={index}
            variants={{
              hidden: { opacity: 0, scale: 0.8 },
              visible: {
                opacity: 1,
                scale: 1,
                transition: { duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] },
              },
            }}
            className={logo.className}
          >
            <Image src={logo.src} alt={logo.alt} className={logo.className} />
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
