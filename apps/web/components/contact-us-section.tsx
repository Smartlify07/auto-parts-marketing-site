import { Icon } from "@phosphor-icons/react"
import {
  ArrowRight,
  ArrowRightIcon,
  ClockIcon,
  EnvelopeIcon,
  PhoneIcon,
  WarehouseIcon,
} from "@phosphor-icons/react/dist/ssr"
import { Button } from "@workspace/ui/components/button"
import { Card } from "@workspace/ui/components/card"
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSeparator,
  FieldSet,
} from "@workspace/ui/components/field"
import { Input } from "@workspace/ui/components/input"
import { Textarea } from "@workspace/ui/components/textarea"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@workspace/ui/components/select"
const contactInfo = [
  {
    title: "Warehouse",
    value: "14 Industrial Estate Rd, Apapa, Lagos",
    icon: WarehouseIcon,
  },
  {
    title: "Phone",
    value: "+234 800 9865  7685",
    icon: PhoneIcon,
  },
  {
    title: "Email",
    value: "trade@compisium.com",
    icon: EnvelopeIcon,
  },
  {
    title: "Working Hours",
    value: "Mon – Sat  ·  7:30 AM – 6:00 PM",
    icon: ClockIcon,
  },
]
export function ContactUsSection() {
  return (
    <section className="mx-auto flex flex-col items-center justify-center gap-10 px-6 py-20 lg:px-10">
      <div className="flex w-full max-w-7xl flex-col items-center gap-10">
        <header className="flex flex-col items-center gap-6 text-center">
          <h4 className="text-base font-medium tracking-[40%] text-primary uppercase">
            04 - Get In touch
          </h4>
          <h1 className="text-4xl font-semibold tracking-[2%] uppercase">
            Request for a quote{" "}
          </h1>

          <p className="text-center text-base tracking-[2%] lg:max-w-xl">
            Our team responds with pricing, availability and trade account
            details
          </p>
        </header>

        <div className="flex w-full flex-col gap-4">
          <h3 className="text-lg font-semibold text-foreground uppercase">
            Contact Details
          </h3>
          <p className="text-base font-normal">
            Reach us directly or fill the form and we'll come to you.
          </p>
        </div>

        <div className="flex w-full flex-col gap-5">
          {contactInfo.map((info, i) => (
            <ContactInfoCard {...info} key={i} />
          ))}
        </div>
        <div className="w-full bg-[#F7F7F9] p-10">
          <ContactForm />
        </div>
      </div>
    </section>
  )
}

function ContactInfoCard({
  title,
  value,
  icon,
}: {
  title: string
  value: string
  icon: Icon
}) {
  const ContactIcon = icon
  return (
    <Card className="h-25 border-b ring-0">
      <div className="flex items-center gap-4">
        <div className="flex size-12 items-center justify-center rounded-[5px] bg-primary/5">
          <ContactIcon className="size-6 text-primary" />
        </div>

        <div className="flex flex-col">
          <h3 className="text-base font-semibold tracking-[40%] text-foreground uppercase">
            {title}
          </h3>
          <p className="text-sm tracking-[2%] text-foreground">{value}</p>
        </div>
      </div>
    </Card>
  )
}

function ContactForm() {
  return (
    <div className="w-full">
      <form>
        <FieldGroup>
          <FieldSet>
            <FieldLegend className="text-xs tracking-[40%] uppercase">
              First Name
            </FieldLegend>
            <FieldGroup>
              <Field>
                <Input
                  className="bg-background"
                  id="first_name"
                  placeholder="First Name"
                  required
                />
              </Field>
            </FieldGroup>
          </FieldSet>
          <FieldSet>
            <FieldLegend className="text-xs tracking-[40%] uppercase">
              Last Name
            </FieldLegend>
            <FieldGroup>
              <Field>
                <Input
                  className="bg-background"
                  id="last_name"
                  placeholder="Last Name"
                  required
                />
              </Field>
            </FieldGroup>
          </FieldSet>

          <FieldSet>
            <FieldLegend className="text-xs tracking-[40%] uppercase">
              Business/Company Name
            </FieldLegend>
            <FieldGroup>
              <Field>
                <Input
                  className="bg-background"
                  id="business_name"
                  placeholder="Enter your business name"
                />
              </Field>
            </FieldGroup>
          </FieldSet>
          <FieldSet>
            <FieldLegend className="text-xs tracking-[40%] uppercase">
              Phone
            </FieldLegend>
            <FieldGroup>
              <Field>
                <Input
                  className="bg-background"
                  id="phone"
                  placeholder="Enter your phone number"
                  type="tel"
                />
              </Field>
            </FieldGroup>
          </FieldSet>

          <FieldSet>
            <FieldLegend className="text-xs tracking-[40%] uppercase">
              Enquiry type
            </FieldLegend>
            <FieldGroup>
              <Field>
                <Select defaultValue="">
                  <SelectTrigger
                    className="bg-background"
                    id="checkout-7j9-exp-year-f59"
                  >
                    <SelectValue placeholder="Select Enquiry type" />
                  </SelectTrigger>
                  <SelectContent className={"rounded-[5px]"}>
                    <SelectGroup>
                      <SelectItem value="Wholesale Business">
                        Wholesale business
                      </SelectItem>
                      <SelectItem value="Compatible Brands">
                        Compatible Brands
                      </SelectItem>
                      <SelectItem value="Delivery method">
                        Delivery Method
                      </SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </Field>
            </FieldGroup>
          </FieldSet>
          <FieldSet>
            <FieldGroup>
              <Field>
                <FieldLabel
                  className="text-sm font-medium uppercase"
                  htmlFor="message"
                >
                  Parts needed / message
                </FieldLabel>
                <Textarea
                  id="message"
                  placeholder="Add any additional comments"
                  className="min-h-30 resize-none bg-background"
                />
              </Field>
            </FieldGroup>
          </FieldSet>
          <Field orientation="horizontal" className="w-full">
            <Button type="submit" className={"h-12 w-full text-base"}>
              Send Enquiry <ArrowRightIcon />
            </Button>
          </Field>
        </FieldGroup>
      </form>
    </div>
  )
}
