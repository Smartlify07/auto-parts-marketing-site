"use client"

import {
  ArrowRightIcon,
  CarBatteryIcon,
  CarIcon,
  SteeringWheelIcon,
} from "@phosphor-icons/react/dist/ssr"
import { motion } from "framer-motion"
import Link from "next/link"
import React from "react"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card"
import { Icon } from "@iconify/react"

const catalogue = [
  {
    id: 1,
    Icon: <Icon icon="boxicons:spanner" width="24" height="24" />,
    title: "Engine Components",
    skuUnits: 1340,
  },
  {
    id: 2,
    Icon: <Icon icon="lucide-lab:tire" width="24" height="24" />,
    title: "Brake & Rotors",
    skuUnits: 879,
  },
  {
    id: 3,
    Icon: (
      <Icon
        icon="material-symbols:electric-car-rounded"
        width="24"
        height="24"
      />
    ),
    title: "Electrical Systems",
    skuUnits: 1270,
  },
  {
    id: 4,
    Icon: <Icon icon="mdi:steering" width="24" height="24" />,
    title: "Suspension & Steering",
    skuUnits: 2012,
  },
  {
    id: 5,
    Icon: <Icon icon="mdi:car-battery" width="24" height="24" />,
    title: "Batteries & Starters",
    skuUnits: 1879,
  },
  {
    id: 6,
    Icon: <Icon icon="game-icons:car-door" width="24" height="24" />,
    title: "Body Exterior",
    skuUnits: 659,
  },
]
export function CatalogueSection() {
  return (
    <section
      id="catalogue"
      className="mx-auto flex flex-col items-center justify-center gap-10 px-6 py-20 lg:px-10"
    >
      <div className="flex w-full max-w-7xl flex-col items-center gap-10">
        <motion.header
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="flex flex-col items-center gap-6 text-center"
        >
          <h4 className="text-base font-medium tracking-[40%] text-primary uppercase">
            01- CATALOGUE{" "}
          </h4>
          <h1 className="text-4xl font-semibold tracking-[2%] uppercase">
            Parts for every model
          </h1>

          <Link
            href={"#"}
            className="flex items-center gap-4 tracking-[10%] text-primary uppercase"
          >
            Request full catalogue <ArrowRightIcon />
          </Link>
        </motion.header>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.1, delayChildren: 0.1 },
            },
          }}
          className="grid w-full gap-5 lg:grid-cols-3"
        >
          {catalogue.map((catalogue) => (
            <CatalogueCard {...catalogue} key={catalogue.id} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}

function CatalogueCard({
  title,
  skuUnits,
  Icon,
  id,
}: {
  title: string
  skuUnits: number
  Icon: React.JSX.Element
  id: number
}) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
        },
      }}
    >
      <Card className="gap-6 py-10 shadow-[0px_4px_20px_0px_rgba(0,0,0,0.04)] ring-0 transition-transform hover:scale-105">
        <CardHeader className="flex flex-col items-center gap-6">
          <CardTitle className="text-center font-sans text-base font-normal tracking-[2%] text-primary">
            0{id}
          </CardTitle>
          <div className="flex size-16 items-center justify-center rounded-md bg-primary/10 [&>svg]:text-primary">
            {Icon}
          </div>
        </CardHeader>
        <CardContent className="flex flex-col items-center gap-6 text-center">
          <div className="flex flex-col items-center gap-4">
            <CardTitle className="text-center font-sans text-lg font-semibold tracking-[2%] text-foreground uppercase">
              {title}
            </CardTitle>
            <p className="text-base tracking-[2%] text-foreground">
              {skuUnits.toLocaleString()} SKUs available
            </p>
          </div>
          <Link
            href="#"
            className="flex items-center gap-2 text-center text-muted-foreground uppercase transition-colors hover:text-primary [&>svg]:transition-transform hover:[&>svg]:translate-x-1"
          >
            Enquire <ArrowRightIcon />
          </Link>
        </CardContent>
      </Card>
    </motion.div>
  )
}
