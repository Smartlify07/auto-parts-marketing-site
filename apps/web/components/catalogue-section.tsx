import { Icon } from "@phosphor-icons/react"
import {
  ArrowRightIcon,
  CarBatteryIcon,
  CarIcon,
  SteeringWheelIcon,
} from "@phosphor-icons/react/dist/ssr"
import Link from "next/link"
import React from "react"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card"

const catalogue = [
  {
    id: 1,
    Icon: SteeringWheelIcon,
    title: "Engine Components",
    skuUnits: 1340,
  },
  {
    id: 2,
    Icon: SteeringWheelIcon,
    title: "Brake & Rotors",
    skuUnits: 879,
  },
  {
    id: 3,
    Icon: CarIcon,
    title: "Electrical Systems",
    skuUnits: 1270,
  },
  {
    id: 4,
    Icon: SteeringWheelIcon,
    title: "Suspension & Steering",
    skuUnits: 2012,
  },
  {
    id: 5,
    Icon: CarBatteryIcon,
    title: "Batteries & Starters",
    skuUnits: 1879,
  },
  {
    id: 6,
    Icon: CarBatteryIcon,
    title: "Body Exterior",
    skuUnits: 659,
  },
]
export function CatalogueSection() {
  return (
    <section className="mx-auto flex flex-col items-center justify-center gap-10 px-10 py-20">
      <div className="flex w-full max-w-7xl flex-col items-center gap-10">
        <header className="flex flex-col items-center gap-6 text-center">
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
        </header>
        <div className="grid w-full gap-5 lg:grid-cols-3">
          {catalogue.map((catalogue) => (
            <CatalogueCard {...catalogue} key={catalogue.id} />
          ))}
        </div>
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
  Icon: Icon
  id: number
}) {
  return (
    <Card className="gap-6 py-10 shadow-[0px_4px_20px_0px_rgba(0,0,0,0.04)] ring-0">
      <CardHeader className="flex flex-col items-center gap-6">
        <CardTitle className="text-center text-base font-normal tracking-[2%] text-primary">
          0{id}
        </CardTitle>
        <div className="flex size-16 items-center justify-center rounded-md bg-primary/5">
          <Icon className="size-8" />
        </div>
      </CardHeader>
      <CardContent className="flex flex-col items-center gap-6 text-center">
        <div className="flex flex-col items-center gap-4">
          <CardTitle className="text-center text-lg font-medium tracking-[2%] uppercase">
            {title}
          </CardTitle>
          <p className="text-base tracking-[2%] text-foreground">
            {skuUnits.toLocaleString()} SKUs available
          </p>
        </div>
        <Link
          href="#"
          className="flex items-center gap-2 text-center text-muted-foreground uppercase [&>svg]:transition-transform hover:[&>svg]:translate-x-1"
        >
          Enquire <ArrowRightIcon />
        </Link>
      </CardContent>
    </Card>
  )
}
