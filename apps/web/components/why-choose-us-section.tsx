import { Icon } from "@phosphor-icons/react"
import {
  ArrowRightIcon,
  CheckIcon,
  CurrencyDollarIcon,
  HeadsetIcon,
  TruckIcon,
} from "@phosphor-icons/react/dist/ssr"
import { Card, CardTitle } from "@workspace/ui/components/card"
import Link from "next/link"

const whyChooseUs = [
  {
    title: "Certified and genuine",
    id: 1,
    description:
      "Every part is sourced from verified OEM manufacturers and comes with full quality certification. Zero compromises.",
    icon: CheckIcon,
  },
  {
    title: "FAST DELIVERY",
    id: 2,
    description:
      "Same-day dispatch on in-stock items. Reliable 24–48 hour delivery to workshops and storefronts nationwide.",
    icon: TruckIcon,
  },
  {
    title: "Trade Pricing",
    id: 3,
    description:
      "Competitive wholesale rates, flexible credit accounts, and volume discounts for registered trade partners.",
    icon: CurrencyDollarIcon,
  },
  {
    title: "Dedicated Support",
    id: 4,
    description:
      "A real account manager handles your orders and sourcing — available Mon–Sat with no automated queues.",
    icon: HeadsetIcon,
  },
]
export function WhyChooseUsSection() {
  return (
    <section className="mx-auto flex flex-col items-center justify-center gap-10 px-6 py-20 lg:px-10">
      <div className="flex w-full max-w-7xl flex-col items-center gap-10">
        <header className="flex flex-col items-center gap-6 text-center">
          <h4 className="text-base font-medium tracking-[40%] text-primary uppercase">
            02- Why us
          </h4>
          <h1 className="text-4xl font-semibold tracking-[2%] uppercase">
            The Standard You Deserve{" "}
          </h1>

          <p className="text-center text-base tracking-[2%] lg:max-w-xl">
            We've spent years building the most reliable wholesale auto parts
            operation in the country.
          </p>
        </header>
      </div>

      <div className="grid w-full lg:grid-cols-2">
        {whyChooseUs.map((item) => (
          <WhyChooseUsCard
            {...item}
            index={item.id}
            CardIcon={item.icon}
            key={item.id}
          />
        ))}
      </div>
    </section>
  )
}

function WhyChooseUsCard({
  title,
  index,
  CardIcon,
  description,
}: {
  title: string
  index: number
  CardIcon: Icon
  description: string
}) {
  return (
    <Card className="gap-6 border-r border-b px-5 py-10 ring-0 last:border-b-0 lg:nth-of-type-[3]:border-b-0">
      <div className="flex items-center justify-between">
        <div className="flex size-12 items-center justify-center rounded-lg bg-primary/5">
          <CardIcon className="size-6" />
        </div>
        <h1 className="font-mono text-5xl tracking-[11%] text-primary/5">
          0{index}
        </h1>
      </div>

      <div className="flex flex-col gap-6">
        <CardTitle className="font-sans text-2xl font-semibold uppercase">
          {title}
        </CardTitle>

        <p className="text-base tracking-[2%]">{description}</p>
      </div>
    </Card>
  )
}
