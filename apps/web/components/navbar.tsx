"use client"
import Image from "next/image"
import React, { useState, useEffect } from "react"
import Logo from "../app/images/Logo.svg"
import Link from "next/link"
import { Button } from "@workspace/ui/components/button"
import { cn } from "@workspace/ui/lib/utils"
import { motion, AnimatePresence } from "framer-motion"
import { usePathname } from "next/navigation"

const menu = [
  { label: "Home", path: "/" },
  { label: "Catalogue", path: "#catalogue" },
  { label: "Why Us", path: "#why-us" },
  { label: "Testimonials", path: "#testimonials" },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()
  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => setIsOpen(false), 10000)
      return () => clearTimeout(timer)
    }
  }, [isOpen])

  return (
    <>
      <nav className="fixed top-0 right-0 left-0 z-50 flex items-center justify-between px-6 py-10 backdrop-blur-md lg:px-10">
        <Image
          src={Logo}
          alt="Company Logo"
          unoptimized
          width={120}
          height={40}
        />
        <div className="hidden items-center gap-10 lg:flex">
          {menu.map((item) => (
            <Link
              className={cn(
                "text-foreground/80 uppercase hover:text-foreground",
                pathname === item.path &&
                  "border-b-2 border-b-primary text-primary"
              )}
              key={item.path}
              href={item.path}
            >
              {item.label}
            </Link>
          ))}
        </div>

        <Button className="button hidden h-12 w-32 uppercase lg:flex">
          <span>Get a quote</span>
        </Button>

        <button
          className="flex flex-col justify-center gap-1.5 lg:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <motion.span
            className="block h-1 w-8 bg-foreground"
            animate={isOpen ? { rotate: 45, y: 10 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.3 }}
          />
          <motion.span
            className="block h-1 w-8 bg-foreground"
            animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
            transition={{ duration: 0.3 }}
          />
          <motion.span
            className="block h-1 w-8 bg-foreground"
            animate={isOpen ? { rotate: -45, y: -10 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.3 }}
          />
        </button>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-40 bg-black/20 lg:hidden"
              onClick={() => setIsOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, x: "100%" }}
              animate={{ opacity: 1, x: -4 }}
              exit={{ opacity: 0, x: "100%" }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="fixed top-34 right-0 bottom-0 z-50 flex h-87.5 w-3/4 flex-col items-center justify-center gap-8 rounded-[5px] bg-background p-6 backdrop-blur-md lg:hidden"
            >
              {menu.map((item, index) => (
                <motion.div
                  key={item.path}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    className="text-base font-medium uppercase lg:text-2xl"
                    href={item.path}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: menu.length * 0.1 }}
              >
                <Button className="button h-12 w-40 text-base uppercase lg:text-lg">
                  <span>Get a quote</span>
                </Button>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
