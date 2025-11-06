import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { HeroCarousel } from "@/components/hero-carousel"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

function ProductLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href} className="group block py-3 border-b border-gray-200 hover:border-red-600 transition-colors">
      <div className="flex items-center gap-2">
        <span className="text-gray-600 group-hover:text-red-600 transition-colors">›</span>
        <span className="text-red-600 font-semibold uppercase text-sm group-hover:text-red-700 transition-colors">
          {children}
        </span>
      </div>
    </Link>
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
              <Link href="/contacts" className="group relative h-64 overflow-hidden rounded-lg">
                <div className="absolute inset-0 bg-red-600/80 z-10" />
                <div className="absolute inset-0 bg-gradient-to-r from-red-600/90 to-red-700/80 z-10" />
                <div className="relative z-20 h-full flex flex-col justify-between p-6 text-white">
                  <div>
                    <h3 className="text-3xl md:text-4xl font-bold mb-2">WARRANTY SUPPORT</h3>
                    <p className="text-lg">Do you need help with your AC?</p>
                  </div>
                  <div className="flex justify-end">
                    <div className="w-12 h-12 bg-gray-800 flex items-center justify-center group-hover:bg-gray-700 transition-colors">
                      <span className="text-white text-xl">→</span>
                    </div>
                  </div>
                </div>
              </Link>

              {/* Financing Available Card */}
              <Link href="/open-account" className="group relative h-64 overflow-hidden rounded-lg">
                <div className="absolute inset-0 bg-gray-800/80 z-10" />
                <div className="absolute inset-0 bg-gradient-to-r from-gray-800/90 to-gray-900/80 z-10" />
                <div className="relative z-20 h-full flex flex-col justify-between p-6 text-white">
                  <div>
                    <h3 className="text-3xl md:text-4xl font-bold mb-2">FINANCING AVAILABLE</h3>
                    <p className="text-lg">No credit needed, No interest. Apply NOW!</p>
                  </div>
                  <div className="flex justify-end">
                    <div className="w-12 h-12 bg-red-600 flex items-center justify-center group-hover:bg-red-700 transition-colors">
                      <span className="text-white text-xl">→</span>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-red-600 mb-2">
                DEPLUS AC SUPPLY
              </h2>
              <h3 className="text-3xl md:text-4xl font-normal text-red-600">
                DISTRIBUTION LEADERS IN SOUTH<br />FLORIDA
              </h3>
            </div>
            <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 text-gray-700">
              <p className="text-lg">
                Deplus has long been committed to being one of South Florida&apos;s leading stocking distributors 
                of HVAC equipment, parts and supplies. With over 100 different brands and over 25,000 different 
                items in stock, we have all you need for your next job.
              </p>
              <p className="text-lg">
                We pride ourselves in only working with the most reputable, trusted manufacturers in the Heating, 
                Ventilation and Air Conditioning Industry.
              </p>
            </div>
          </div>
        </section>

        {/* Products Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">OUR PRODUCTS</h2>
            <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Column 1 */}
              <div className="space-y-0">
                <ProductLink href="/products/split-systems">SPLIT SYSTEMS</ProductLink>
                <ProductLink href="/products/mini-split">MINI SPLIT SYSTEMS</ProductLink>
                <ProductLink href="/products/air-conditioning">AIR CONDITIONING</ProductLink>
                <ProductLink href="/products/package-units">PACKAGE UNITS</ProductLink>
              </div>

              {/* Column 2 */}
              <div className="space-y-0">
                <ProductLink href="/products/air-quality">AIR QUALITY & GERMICIDAL</ProductLink>
                <ProductLink href="/products/air-distribution">AIR DISTRIBUTION</ProductLink>
                <ProductLink href="/products/ventilation">VENTILATION</ProductLink>
                <ProductLink href="/products/thermostats">THERMOSTATS</ProductLink>
              </div>

              {/* Column 3 */}
              <div className="space-y-0">
                <ProductLink href="/products/installation-parts">INSTALLATION PARTS</ProductLink>
                <ProductLink href="/products/hand-tools">HAND TOOLS</ProductLink>
                <ProductLink href="/products/testing-instruments">TESTING INSTRUMENTS</ProductLink>
                <ProductLink href="/products/cooper-tubing">COOPER TUBING & SOLDERING</ProductLink>
              </div>
            </div>
          </div>
        </section>

        {/* Partner Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4">HVAC Supplier</h2>
              <p className="text-xl text-gray-700 mb-8">
                Grow your business
              </p>
              <p className="text-lg text-gray-700 mb-8">
                Become our partner, Get special offers and discounts. Open your account.
              </p>
              <Button size="lg" asChild>
                <Link href="/open-account">Open Account</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Brands Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-4">BRANDS THAT TRUST OUR WORK</h2>
            <p className="text-center text-gray-700 mb-12">
              We are committed to provide excellent service and sincere support to our business clients,
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6">
              {Array.from({ length: 7 }).map((_, i) => (
                <Card key={i} className="flex items-center justify-center h-32">
                  <CardContent className="p-6 text-center">
                    <div className="text-gray-400 font-semibold">Client Logo</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Location Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
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
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
