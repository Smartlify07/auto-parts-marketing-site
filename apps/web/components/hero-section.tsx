"use clients"
import { ArrowRight } from "@phosphor-icons/react/dist/ssr"
import { Button } from "@workspace/ui/components/button"
import React from "react"

export function HeroSection() {
  return (
    <section className="mx-auto flex flex-col items-center justify-center gap-10 px-6 py-20 lg:px-10">
      <div className="flex flex-col items-center gap-10">
        <h4 className="text-center font-semibold tracking-[40%] text-foreground">
          CERTIFIED WHOLESALE DISTRIBUTOR
        </h4>
        <h1 className="text-center text-4xl font-semibold tracking-[2%] lg:text-7xl">
          QUALITY AUTO-PARTS
        </h1>
      </div>

      <blockquote className="flex items-center justify-center border-l-2 border-l-primary pl-2 text-center tracking-[2%] lg:max-w-2xl">
        Your trusted wholesale partner for genuine and OEM-grade auto spare
        parts — serving dealerships, workshops, and fleet operators with
        precision and speed.
      </blockquote>

      <div className="flex flex-col items-center gap-5 lg:flex-row lg:gap-10">
        <Button className="h-12 w-48 text-base uppercase">
          Request a quote
        </Button>
        <Button className="h-12 w-48 text-base uppercase" variant={"link"}>
          Browse catalogue <ArrowRight />
        </Button>
      </div>
    </section>
  )
}
