"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuIndicator,
} from "@/components/ui/navigation-menu"
import { Phone, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Header() {
  return (
    <motion.header 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="sticky top-0 z-50 w-full border-b bg-white shadow-sm"
    >
      {/* Top bar with contact info */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.2 }}
        className="bg-blue-600 text-white py-2"
      >
        <div className="container mx-auto px-4 flex items-center justify-between text-sm">
          <div className="flex items-center gap-4">
            <motion.span 
              className="flex items-center gap-1"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <Phone className="size-4" />
              <strong>Need help?</strong>
              <Link href="tel:+1888337588" className="hover:underline">
                +1 888-DEPLUS 8
              </Link>
            </motion.span>
            <span className="hidden md:inline">
              Open: Mon - Fri 8am-5pm ; Sat 8am-1pm
            </span>
          </div>
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <Link href="mailto:sales@deplus.us" className="flex items-center gap-1 hover:underline">
              <Mail className="size-4" />
              sales@deplus.us
            </Link>
          </motion.div>
        </div>
      </motion.div>

      {/* Main navigation */}
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <Link href="/" className="bg-white">
              <Image
                src="/logo.png"
                alt="Deplus AC Supply"
                width={200}
                height={60}
                className="h-auto"
                priority
              />
            </Link>
          </motion.div>

          <NavigationMenu>
            <NavigationMenuList className="gap-2 hidden md:flex">
              <NavigationMenuIndicator />
              <NavigationMenuItem>
                <Link href="/" legacyBehavior passHref>
                  <NavigationMenuLink className="px-4 py-2 hover:bg-accent rounded-md">
                    Home
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger>About Us</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="w-[200px] p-2">
                    <Link href="/about" legacyBehavior passHref>
                      <NavigationMenuLink className="block px-3 py-2 hover:bg-accent rounded-md">
                        Who we are
                      </NavigationMenuLink>
                    </Link>
                    <Link href="/store-gallery" legacyBehavior passHref>
                      <NavigationMenuLink className="block px-3 py-2 hover:bg-accent rounded-md">
                        Store Gallery
                      </NavigationMenuLink>
                    </Link>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger>Products & Services</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="w-[250px] p-2">
                    <div className="mb-2 font-semibold px-3 py-1">Our Portfolio</div>
                    <Link href="/products/split-systems" legacyBehavior passHref>
                      <NavigationMenuLink className="block px-3 py-2 hover:bg-accent rounded-md">
                        Split Systems
                      </NavigationMenuLink>
                    </Link>
                    <Link href="/products/mini-split" legacyBehavior passHref>
                      <NavigationMenuLink className="block px-3 py-2 hover:bg-accent rounded-md">
                        Mini Split Systems
                      </NavigationMenuLink>
                    </Link>
                    <Link href="/products/air-conditioning" legacyBehavior passHref>
                      <NavigationMenuLink className="block px-3 py-2 hover:bg-accent rounded-md">
                        Air Conditioning
                      </NavigationMenuLink>
                    </Link>
                    <Link href="/products/package-units" legacyBehavior passHref>
                      <NavigationMenuLink className="block px-3 py-2 hover:bg-accent rounded-md">
                        Package Units
                      </NavigationMenuLink>
                    </Link>
                    <Link href="/products/air-quality" legacyBehavior passHref>
                      <NavigationMenuLink className="block px-3 py-2 hover:bg-accent rounded-md">
                        Air Quality & Germicidal
                      </NavigationMenuLink>
                    </Link>
                    <Link href="/products/air-distribution" legacyBehavior passHref>
                      <NavigationMenuLink className="block px-3 py-2 hover:bg-accent rounded-md">
                        Air Distribution
                      </NavigationMenuLink>
                    </Link>
                    <Link href="/products/ventilation" legacyBehavior passHref>
                      <NavigationMenuLink className="block px-3 py-2 hover:bg-accent rounded-md">
                        Ventilation
                      </NavigationMenuLink>
                    </Link>
                    <Link href="/products/thermostats" legacyBehavior passHref>
                      <NavigationMenuLink className="block px-3 py-2 hover:bg-accent rounded-md">
                        Thermostats
                      </NavigationMenuLink>
                    </Link>
                    <Link href="/products/installation-parts" legacyBehavior passHref>
                      <NavigationMenuLink className="block px-3 py-2 hover:bg-accent rounded-md">
                        Installation Parts
                      </NavigationMenuLink>
                    </Link>
                    <Link href="/products/hand-tools" legacyBehavior passHref>
                      <NavigationMenuLink className="block px-3 py-2 hover:bg-accent rounded-md">
                        Hand Tools
                      </NavigationMenuLink>
                    </Link>
                    <Link href="/products/cooper-tubing" legacyBehavior passHref>
                      <NavigationMenuLink className="block px-3 py-2 hover:bg-accent rounded-md">
                        Cooper Tubing & Soldering
                      </NavigationMenuLink>
                    </Link>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link href="/open-account" legacyBehavior passHref>
                  <NavigationMenuLink className="px-4 py-2 hover:bg-accent rounded-md">
                    Open Account
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link href="/contacts" legacyBehavior passHref>
                  <NavigationMenuLink className="px-4 py-2 hover:bg-accent rounded-md">
                    Contacts
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          
          {/* Mobile menu button - simplified for now */}
          <div className="md:hidden">
            <Button variant="ghost" size="icon">
              <svg className="size-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </Button>
          </div>
        </div>
      </nav>
    </motion.header>
  )
}
