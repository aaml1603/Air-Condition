import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Wrench, Shield, DollarSign, Package, Wind, Droplets, Settings, Hammer, Thermometer } from "lucide-react"
import Link from "next/link"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Deplus AC Supply
            </h1>
            <p className="text-2xl md:text-3xl mb-4">The best HVAC brands</p>
            <p className="text-xl mb-8">Come and visit us. Delivery available.</p>
            <Button size="lg" variant="secondary" asChild>
              <Link href="/contacts">Contact Us</Link>
            </Button>
          </div>
        </section>

        {/* Feature Cards */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card>
                <CardHeader>
                  <Package className="size-10 text-blue-600 mb-2" />
                  <CardTitle>One Stop Supply</CardTitle>
                  <CardDescription>
                    From a bolt to a complete AC
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Check all options to fit your needs.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <DollarSign className="size-10 text-red-600 mb-2" />
                  <CardTitle>Hot Deals</CardTitle>
                  <CardDescription>Monthly Special</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    High efficiency, low consumption, satisfaction Guarantee.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <Shield className="size-10 text-green-600 mb-2" />
                  <CardTitle>Warranty Support</CardTitle>
                  <CardDescription>Do you need help with your AC?</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    We provide comprehensive warranty support for all our products.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <DollarSign className="size-10 text-purple-600 mb-2" />
                  <CardTitle>Financing Available</CardTitle>
                  <CardDescription>No credit needed, No interest.</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    Apply NOW!
                  </p>
                  <Button variant="outline" size="sm" asChild>
                    <Link href="/open-account">Apply Now</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl font-bold mb-6">
                Deplus AC Supply
              </h2>
              <h3 className="text-2xl font-semibold text-blue-600 mb-6">
                Distribution Leaders in South Florida
              </h3>
              <p className="text-lg text-gray-700 mb-8">
                Deplus has long been committed to being one of South Florida&apos;s leading stocking distributors 
                of HVAC equipment, parts and supplies. With over 100 different brands and over 25,000 different 
                items in stock, we have all you need for your next job.
              </p>
              <p className="text-lg text-gray-700 mb-8">
                We pride ourselves in only working with the most reputable, trusted manufacturers in the Heating, 
                Ventilation and Air Conditioning Industry.
              </p>
            </div>
          </div>
        </section>

        {/* Products Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12">OUR PRODUCTS</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
              <Card className="text-center">
                <CardHeader>
                  <Wind className="size-8 text-blue-600 mx-auto mb-2" />
                  <CardTitle className="text-sm">Split systems</CardTitle>
                </CardHeader>
              </Card>
              <Card className="text-center">
                <CardHeader>
                  <Settings className="size-8 text-blue-600 mx-auto mb-2" />
                  <CardTitle className="text-sm">Mini split systems</CardTitle>
                </CardHeader>
              </Card>
              <Card className="text-center">
                <CardHeader>
                  <Wind className="size-8 text-blue-600 mx-auto mb-2" />
                  <CardTitle className="text-sm">Air Conditioning</CardTitle>
                </CardHeader>
              </Card>
              <Card className="text-center">
                <CardHeader>
                  <Package className="size-8 text-blue-600 mx-auto mb-2" />
                  <CardTitle className="text-sm">Package Units</CardTitle>
                </CardHeader>
              </Card>
              <Card className="text-center">
                <CardHeader>
                  <Droplets className="size-8 text-blue-600 mx-auto mb-2" />
                  <CardTitle className="text-sm">Air quality & germicidal</CardTitle>
                </CardHeader>
              </Card>
              <Card className="text-center">
                <CardHeader>
                  <Wind className="size-8 text-blue-600 mx-auto mb-2" />
                  <CardTitle className="text-sm">Air Distribution</CardTitle>
                </CardHeader>
              </Card>
              <Card className="text-center">
                <CardHeader>
                  <Wind className="size-8 text-blue-600 mx-auto mb-2" />
                  <CardTitle className="text-sm">Ventilation</CardTitle>
                </CardHeader>
              </Card>
              <Card className="text-center">
                <CardHeader>
                  <Thermometer className="size-8 text-blue-600 mx-auto mb-2" />
                  <CardTitle className="text-sm">Thermostats</CardTitle>
                </CardHeader>
              </Card>
              <Card className="text-center">
                <CardHeader>
                  <Wrench className="size-8 text-blue-600 mx-auto mb-2" />
                  <CardTitle className="text-sm">Installation Parts</CardTitle>
                </CardHeader>
              </Card>
              <Card className="text-center">
                <CardHeader>
                  <Hammer className="size-8 text-blue-600 mx-auto mb-2" />
                  <CardTitle className="text-sm">Hand Tools</CardTitle>
                </CardHeader>
              </Card>
              <Card className="text-center">
                <CardHeader>
                  <Package className="size-8 text-blue-600 mx-auto mb-2" />
                  <CardTitle className="text-sm">Testing Instruments</CardTitle>
                </CardHeader>
              </Card>
              <Card className="text-center">
                <CardHeader>
                  <Wrench className="size-8 text-blue-600 mx-auto mb-2" />
                  <CardTitle className="text-sm">Cooper Tubing & Soldering</CardTitle>
                </CardHeader>
              </Card>
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
