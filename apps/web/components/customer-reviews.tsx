import { StarIcon } from "@phosphor-icons/react/dist/ssr"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@workspace/ui/components/card"
import { cn } from "@workspace/ui/lib/utils"

type Review = {
  rating: number
  author: {
    firstName: string
    lastName: string
    role: string
  }
  message: string
}
const customerReviews: Review[] = [
  {
    rating: 5,
    author: {
      firstName: "ADEBAYO",
      lastName: "OKONKWO",
      role: "Owner — Okonkwo Motors, Lagos",
    },
    message:
      "Loremipsium has completely transformed how we manage our parts inventory. Their stock levels are unbeatable and delivery is always on time — even for rare models.",
  },
  {
    rating: 4,
    author: {
      firstName: "KINGSLEY",
      lastName: "ONWO",
      role: "Fleet Manager — Transcorp Transport",
    },
    message:
      "We consolidated from three suppliers down to one. The trade pricing is fair, the account team is always responsive, and we’ve never had a delivery miss.",
  },
  {
    rating: 5,
    author: {
      firstName: "EMMANUEL",
      lastName: "IKENNA",
      role: "Director — Ikenna Auto Group",
    },
    message:
      "As a growing dealership, we need a parts supplier we can trust completely. Loremipsium delivers genuine quality every time and the credit terms work brilliantly for us.",
  },
]
const possibleColors = [
  { color: "text-blue-600", background: "bg-blue-600/10" },
  { color: "text-green-600", background: "bg-green-600/10" },
  { color: "text-orange-600", background: "bg-orange-600/10" },
]
export function CustomerReviewsSection() {
  return (
    <section className="mx-auto flex flex-col items-center justify-center gap-10 bg-[#F7F7F9] px-6 py-20 lg:px-10">
      <div className="flex w-full max-w-7xl flex-col items-center gap-10">
        <header className="flex flex-col items-center gap-6 text-center">
          <h4 className="text-base font-medium tracking-[40%] text-primary uppercase">
            03- Customer Review
          </h4>
          <h1 className="text-4xl font-semibold tracking-[2%] uppercase">
            Trusted by the trade{" "}
          </h1>

          <p className="text-center text-base tracking-[2%] lg:max-w-xl">
            From independent garages to large fleet operators — real feedback
            from our partners and customers{" "}
          </p>
        </header>
      </div>

      <div className="flex w-full flex-col gap-6">
        {customerReviews.map((review, i) => {
          const randomColor = Math.floor(Math.random() * possibleColors.length)
          const color = possibleColors[randomColor]
          return (
            <ReviewCard
              background={color?.background ?? ""}
              color={color?.color ?? ""}
              key={i}
              {...review}
            />
          )
        })}
      </div>
    </section>
  )
}

function ReviewCard({
  rating,
  author,
  message,
  color,
  background,
}: {
  rating: number
  author: { firstName: string; lastName: string; role: string }
  message: string
  color: string
  background: string
}) {
  return (
    <Card className="rounded-[5px] py-10 ring-0">
      <CardContent className="flex flex-col gap-10 px-10">
        <div className="flex items-center gap-4">
          {Array.from({ length: rating }).map((item, i) => (
            <StarIcon
              weight="fill"
              key={i}
              color={i + 1 <= rating ? "var(--color-primary)" : ""}
              className={cn("size-6")}
            />
          ))}
        </div>
        <p className="border-l-2 border-l-primary pl-4 text-base tracking-[2%] lg:w-9/12">
          {message}
        </p>
      </CardContent>

      <CardFooter className="border-t-0 bg-card px-10 pb-10">
        <div className="flex items-center gap-4">
          <div
            className={cn(
              "flex size-10 items-center justify-center rounded-[5px] bg-primary/5 text-base font-medium",
              background,
              color
            )}
          >
            {author.firstName.charAt(0)}
            {author.lastName.charAt(0)}
          </div>

          <div className="flex flex-col gap-1">
            <h1 className="text-lg font-semibold tracking-[2%] uppercase">
              {author.firstName} {author.lastName}
            </h1>
            <p className="text-base tracking-[2%]">{author.role}</p>
          </div>
        </div>
      </CardFooter>
    </Card>
  )
}
