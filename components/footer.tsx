import Link from "next/link"
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contacts</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-2">
                <Phone className="size-5 mt-0.5" />
                <div>
                  <div className="font-semibold">Free phone:</div>
                  <div>
                    <Link href="tel:+1888337588" className="hover:underline">
                      +1 888-DEPLUS 8 / +1 888 337588
                    </Link>
                  </div>
                  <div>
                    <Link href="tel:+17865000501" className="hover:underline">
                      +1 786 500 0501
                    </Link>
                    {" / "}
                    <Link href="tel:+13058000804" className="hover:underline">
                      +1 305 800 0804
                    </Link>
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="size-5 mt-0.5" />
                <div>
                  <div className="font-semibold">Address:</div>
                  <div>11005 NW 33th Street Miami FL 33177</div>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <Mail className="size-5 mt-0.5" />
                <div>
                  <div className="font-semibold">E-mail:</div>
                  <Link href="mailto:sales@deplus.us" className="hover:underline">
                    sales@deplus.us
                  </Link>
                </div>
              </div>
              <div>
                <div className="font-semibold">Hours:</div>
                <div>Mon - Fri 8am-5pm ; Sat 8am-1pm</div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:underline">Home</Link>
              </li>
              <li>
                <Link href="/about" className="hover:underline">About Us</Link>
              </li>
              <li>
                <Link href="/products" className="hover:underline">Products & Services</Link>
              </li>
              <li>
                <Link href="/open-account" className="hover:underline">Open Account</Link>
              </li>
              <li>
                <Link href="/contacts" className="hover:underline">Contacts</Link>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-xl font-bold mb-4">Follow Us</h3>
            <p className="mb-4">Follow us on social networks</p>
            <div className="flex gap-4">
              <Link href="#" className="hover:text-blue-400 transition-colors" aria-label="Facebook">
                <Facebook className="size-6" />
              </Link>
              <Link href="#" className="hover:text-blue-400 transition-colors" aria-label="Twitter">
                <Twitter className="size-6" />
              </Link>
              <Link href="#" className="hover:text-blue-400 transition-colors" aria-label="Instagram">
                <Instagram className="size-6" />
              </Link>
              <Link href="#" className="hover:text-blue-400 transition-colors" aria-label="LinkedIn">
                <Linkedin className="size-6" />
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
          <p>Deplus AC Supply 2021 © . Privacy Policy.</p>
        </div>
      </div>
    </footer>
  )
}
