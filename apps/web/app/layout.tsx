import { Instrument_Sans, Slackey } from "next/font/google"

import "@workspace/ui/globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@workspace/ui/lib/utils"
import { Metadata } from "next"
import FollowCursor from "@/components/cursor-follow"

const instrumentSans = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
})

const slackey = Slackey({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400"],
})

export const metadata: Metadata = {
  title: "Auto Spare Parts Company",
  description: "A demo page for an auto spare parts company",
  metadataBase: new URL("https://auto-parts-marketing-site.vercel.app"),
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn("antialiased", instrumentSans.variable, slackey.variable)}
    >
      <body>
        <ThemeProvider>{children}</ThemeProvider>
        <div className="hidden lg:block">
          <FollowCursor />
        </div>
      </body>
    </html>
  )
}
