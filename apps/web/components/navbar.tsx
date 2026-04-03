"use client"
import Image from "next/image"
import React from "react"
import Logo from "../app/images/Logo.svg"
import Link from "next/link"
import { Button } from "@workspace/ui/components/button"
import { cn } from "@workspace/ui/lib/utils"
import { usePathname } from "next/navigation"
const menu = [
  { label: "Home", path: "/" },
  { label: "Catalogue", path: "/catalogue" },
  { label: "Why Us", path: "/why-us" },
  { label: "Testimonials", path: "/testimonials" },
]
export function Navbar() {
  const pathname = usePathname()
  console.log(pathname)
  return (
    <nav className="flex items-center justify-between bg-background px-10 py-10">
      <Image
        src={Logo}
        alt="Company Logo"
        unoptimized
        width={120}
        height={40}
      />
      <div className="flex items-center gap-10">
        {menu.map((item) => (
          <Link
            className={cn(
              "uppercase",
              pathname === item.path
                ? "border-b border-b-primary text-primary"
                : ""
            )}
            key={item.path}
            href={item.path}
          >
            {item.label}
          </Link>
        ))}
      </div>

      <Button className="h-12 w-40 uppercase">Get a quote</Button>
    </nav>
  )
}
