"use client"

import { motion } from "framer-motion"
import { ArrowRightIcon } from "@phosphor-icons/react/dist/ssr"
import { Button } from "@workspace/ui/components/button"

export function HeroSection() {
  return (
    <section
      id="home"
      className="mx-auto flex flex-col items-center justify-center gap-10 px-6 py-20 lg:px-10"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="flex flex-col items-center gap-10"
      >
        <motion.h4
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            delay: 0.2,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
          className="text-center font-semibold tracking-[40%] text-foreground"
        >
          CERTIFIED WHOLESALE DISTRIBUTOR
        </motion.h4>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.6,
            delay: 0.3,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
          className="text-center text-4xl font-semibold tracking-[2%] lg:text-7xl"
        >
          QUALITY <br className="lg:hidden" /> AUTO-PARTS
        </motion.h1>
      </motion.div>

      <motion.blockquote
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.6,
          delay: 0.5,
          ease: [0.25, 0.46, 0.45, 0.94],
        }}
        className="flex items-center justify-center border-l-2 border-l-primary pl-2 text-center tracking-[2%] lg:max-w-2xl"
      >
        Your trusted wholesale partner for genuine and OEM-grade auto spare
        parts — serving dealerships, workshops, and fleet operators with
        precision and speed.
      </motion.blockquote>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.6,
          delay: 0.7,
          ease: [0.25, 0.46, 0.45, 0.94],
        }}
        className="flex flex-col items-center gap-5 lg:flex-row lg:gap-10"
      >
        <Button className="h-12 w-48 text-base uppercase">
          Request a quote
        </Button>
        <Button className="h-12 w-48 text-base uppercase" variant={"link"}>
          Browse catalogue <ArrowRightIcon />
        </Button>
      </motion.div>
    </section>
  )
}
