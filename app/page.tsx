"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { HeroCarousel } from "@/components/hero-carousel"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { motion } from "framer-motion"

function ProductLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <motion.div
      whileHover={{ x: 5 }}
      transition={{ duration: 0.2 }}
    >
      <Link href={href} className="group block py-3 border-b border-gray-200 hover:border-red-600 transition-colors">
        <div className="flex items-center gap-2">
          <motion.span 
            className="text-gray-600 group-hover:text-red-600 transition-colors"
            whileHover={{ scale: 1.2 }}
          >
            ›
          </motion.span>
          <span className="text-red-600 font-semibold uppercase text-sm group-hover:text-red-700 transition-colors">
            {children}
          </span>
        </div>
      </Link>
    </motion.div>
  )
}

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section with Carousel */}
        <HeroCarousel />

        {/* CTA Cards Section */}
        <section className="py-8 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Warranty Support Card */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
              >
                <Link href="/contacts" className="group relative h-64 overflow-hidden rounded-lg block">
                  <motion.div 
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0 bg-red-600/80 z-10" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-red-600/90 to-red-700/80 z-10" />
                  <div className="relative z-20 h-full flex flex-col justify-between p-6 text-white">
                    <div>
                      <h3 className="text-3xl md:text-4xl font-bold mb-2">WARRANTY SUPPORT</h3>
                      <p className="text-lg">Do you need help with your AC?</p>
                    </div>
                    <div className="flex justify-end">
                      <motion.div 
                        whileHover={{ scale: 1.1, rotate: -5 }}
                        className="w-12 h-12 bg-gray-800 flex items-center justify-center group-hover:bg-gray-700 transition-colors"
                      >
                        <span className="text-white text-xl">→</span>
                      </motion.div>
                    </div>
                  </div>
                </Link>
              </motion.div>

              {/* Financing Available Card */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <Link href="/open-account" className="group relative h-64 overflow-hidden rounded-lg block">
                  <motion.div 
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0 bg-gray-800/80 z-10" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-gray-800/90 to-gray-900/80 z-10" />
                  <div className="relative z-20 h-full flex flex-col justify-between p-6 text-white">
                    <div>
                      <h3 className="text-3xl md:text-4xl font-bold mb-2">FINANCING AVAILABLE</h3>
                      <p className="text-lg">No credit needed, No interest. Apply NOW!</p>
                    </div>
                    <div className="flex justify-end">
                      <motion.div 
                        whileHover={{ scale: 1.1, rotate: -5 }}
                        className="w-12 h-12 bg-red-600 flex items-center justify-center group-hover:bg-red-700 transition-colors"
                      >
                        <span className="text-white text-xl">→</span>
                      </motion.div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto text-center mb-12"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-red-600 mb-2">
                DEPLUS AC SUPPLY
              </h2>
              <h3 className="text-3xl md:text-4xl font-normal text-red-600">
                DISTRIBUTION LEADERS IN SOUTH<br />FLORIDA
              </h3>
            </motion.div>
            <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 text-gray-700">
              <motion.p 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-lg"
              >
                Deplus has long been committed to being one of South Florida&apos;s leading stocking distributors 
                of HVAC equipment, parts and supplies. With over 100 different brands and over 25,000 different 
                items in stock, we have all you need for your next job.
              </motion.p>
              <motion.p 
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-lg"
              >
                We pride ourselves in only working with the most reputable, trusted manufacturers in the Heating, 
                Ventilation and Air Conditioning Industry.
              </motion.p>
            </div>
          </div>
        </section>

        {/* Products Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="text-4xl font-bold text-center mb-12 text-gray-800"
            >
              OUR PRODUCTS
            </motion.h2>
            <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Column 1 */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="space-y-0"
              >
                <ProductLink href="/products/split-systems">SPLIT SYSTEMS</ProductLink>
                <ProductLink href="/products/mini-split">MINI SPLIT SYSTEMS</ProductLink>
                <ProductLink href="/products/air-conditioning">AIR CONDITIONING</ProductLink>
                <ProductLink href="/products/package-units">PACKAGE UNITS</ProductLink>
              </motion.div>

              {/* Column 2 */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="space-y-0"
              >
                <ProductLink href="/products/air-quality">AIR QUALITY & GERMICIDAL</ProductLink>
                <ProductLink href="/products/air-distribution">AIR DISTRIBUTION</ProductLink>
                <ProductLink href="/products/ventilation">VENTILATION</ProductLink>
                <ProductLink href="/products/thermostats">THERMOSTATS</ProductLink>
              </motion.div>

              {/* Column 3 */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="space-y-0"
              >
                <ProductLink href="/products/installation-parts">INSTALLATION PARTS</ProductLink>
                <ProductLink href="/products/hand-tools">HAND TOOLS</ProductLink>
                <ProductLink href="/products/testing-instruments">TESTING INSTRUMENTS</ProductLink>
                <ProductLink href="/products/cooper-tubing">COOPER TUBING & SOLDERING</ProductLink>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Partner Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto text-center"
            >
              <h2 className="text-3xl font-bold mb-4">HVAC Supplier</h2>
              <p className="text-xl text-gray-700 mb-8">
                Grow your business
              </p>
              <p className="text-lg text-gray-700 mb-8">
                Become our partner, Get special offers and discounts. Open your account.
              </p>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button size="lg" asChild>
                  <Link href="/open-account">Open Account</Link>
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Brands Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="text-3xl font-bold text-center mb-4"
            >
              BRANDS THAT TRUST OUR WORK
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-center text-gray-700 mb-12"
            >
              We are committed to provide excellent service and sincere support to our business clients,
            </motion.p>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6">
              {Array.from({ length: 7 }).map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  <Card className="flex items-center justify-center h-32">
                    <CardContent className="p-6 text-center">
                      <div className="text-gray-400 font-semibold">Client Logo</div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Location Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto text-center"
            >
              <h2 className="text-3xl font-bold mb-4">DEPLUS HVAC SUPPLY</h2>
              <p className="text-xl font-semibold mb-6">Come and visit Us.</p>
              <p className="text-lg text-gray-700 mb-4">
                We are a Service first company, offering the best Air Conditioning systems with warranty and quality. 
                We cover Miami Dade County and Broward Area.
              </p>
              <p className="text-lg text-gray-700">
                We pride ourselves in only working with the most reputable, trusted manufacturers in the Heating, 
                Ventilation and Air Conditioning Industry.
              </p>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
