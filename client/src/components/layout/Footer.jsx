import { Link } from 'react-router-dom'
import {
  UtensilsCrossed,
  Phone,
  Mail,
  MapPin,
  ArrowUpRight,
} from 'lucide-react'

const locations = [
  'Lagos',
  'Ibadan',
  'Abuja',
  'Osogbo',
  'Ile-Ife',
  'Ilorin',
]

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-brand-dark text-white">

      {/* Main Footer */}
      <div className="max-w-6xl mx-auto px-6 py-14 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">

          {/* Brand */}
          <div>
            <Link
              to="/"
              className="inline-flex items-center gap-2.5 group"
            >
              <div className="w-11 h-11 rounded-xl bg-brand-accent text-brand-dark flex items-center justify-center transition-transform group-hover:scale-105">
                <UtensilsCrossed size={23} strokeWidth={2.2} />
              </div>

              <span className="text-xl font-bold tracking-tight">
                FoodiePoint
              </span>
            </Link>

            <p className="mt-5 text-sm text-white/65 leading-6 max-w-xs">
              Your cravings. Your favourites. Your way.
              Discover local meals and order your next favourite dish with ease.
            </p>

            {/* Social placeholders */}
            <div className="mt-6">
              <p className="text-xs uppercase tracking-wider text-white/40 mb-3">
                Follow FoodiePoint
              </p>

              <div className="flex items-center gap-2">
                <span className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center text-xs font-semibold text-white/60">
                  IG
                </span>

                <span className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center text-xs font-semibold text-white/60">
                  FB
                </span>

                <span className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center text-xs font-semibold text-white/60">
                  X
                </span>

                <span className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center text-xs font-semibold text-white/60">
                  TT
                </span>

                <span className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center text-xs font-semibold text-white/60">
                  IN
                </span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-base mb-5">
              Quick Links
            </h3>

            <ul className="space-y-3 text-sm text-white/65">
              <li>
                <Link
                  to="/"
                  className="hover:text-brand-accent transition-colors"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  to="/menu"
                  className="hover:text-brand-accent transition-colors"
                >
                  Browse Menu
                </Link>
              </li>

              <li>
                <Link
                  to="/cart"
                  className="hover:text-brand-accent transition-colors"
                >
                  My Cart
                </Link>
              </li>

              <li>
                <Link
                  to="/orders"
                  className="hover:text-brand-accent transition-colors"
                >
                  My Orders
                </Link>
              </li>
            </ul>
          </div>

          {/* FoodiePoint */}
          <div>
            <h3 className="font-semibold text-base mb-5">
              FoodiePoint
            </h3>

            <ul className="space-y-3 text-sm text-white/65">
              <li>
                <a
                  href="#"
                  className="inline-flex items-center gap-1 hover:text-brand-accent transition-colors"
                >
                  About Us
                  <ArrowUpRight size={13} />
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="hover:text-brand-accent transition-colors"
                >
                  Contact Us
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="hover:text-brand-accent transition-colors"
                >
                  Privacy Policy
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="hover:text-brand-accent transition-colors"
                >
                  Terms & Conditions
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-base mb-5">
              Get in Touch
            </h3>

            <div className="space-y-4 text-sm text-white/65">

              {/* Phone 1 */}
              <a
                href="tel:07031806663"
                className="flex items-start gap-3 hover:text-brand-accent transition-colors"
              >
                <Phone
                  size={17}
                  className="text-brand-accent mt-0.5 shrink-0"
                />

                <span>0703 180 6663</span>
              </a>

              {/* Phone 2 */}
              <a
                href="tel:08083483443"
                className="flex items-start gap-3 hover:text-brand-accent transition-colors"
              >
                <Phone
                  size={17}
                  className="text-brand-accent mt-0.5 shrink-0"
                />

                <span>0808 348 3443</span>
              </a>

              {/* Email */}
              <a
                href="mailto:adesinasaleem@gmail.com"
                className="flex items-start gap-3 hover:text-brand-accent transition-colors"
              >
                <Mail
                  size={17}
                  className="text-brand-accent mt-0.5 shrink-0"
                />

                <span className="break-all">
                  adesinasaleem@gmail.com
                </span>
              </a>

              {/* WhatsApp */}
              <a
                href="https://wa.me/2347031806663"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 hover:text-brand-accent transition-colors"
              >
                <Phone
                  size={17}
                  className="text-brand-accent mt-0.5 shrink-0"
                />

                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>

        {/* Available Cities */}
        <div className="border-t border-white/10 mt-12 pt-8">
          <div className="flex flex-col md:flex-row md:items-start gap-5">

            <div className="flex items-center gap-2 shrink-0">
              <MapPin
                size={17}
                className="text-brand-accent"
              />

              <span className="font-medium text-sm">
                Available in your city
              </span>
            </div>

            <div className="flex flex-wrap gap-2">
              {locations.map((city) => (
                <span
                  key={city}
                  className="px-3 py-1.5 rounded-full bg-white/5 border border-white/5 text-xs text-white/55"
                >
                  {city}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-5">
          <div className="flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-white/40">

            <p className="text-center md:text-left">
              © {currentYear} FoodiePoint. All rights reserved.
            </p>

            <p className="text-center">
              Built to make ordering local food easier.
            </p>

          </div>
        </div>
      </div>

    </footer>
  )
}

export default Footer