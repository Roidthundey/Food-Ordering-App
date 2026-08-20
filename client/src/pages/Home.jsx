import { Link } from 'react-router-dom'
import {
  UtensilsCrossed,
  Soup,
  Flame,
  Cookie,
  CupSoda,
  MapPin,
  Search,
  ShoppingCart,
  Truck,
} from 'lucide-react'
import { menuItems } from '../data/menuItems'
import MenuCard from '../components/menu/MenuCard'

const categories = [
  { name: 'Rice Dishes', icon: UtensilsCrossed },
  { name: 'Soups & Swallow', icon: Soup },
  { name: 'Grills & Suya', icon: Flame },
  { name: 'Snacks', icon: Cookie },
  { name: 'Drinks', icon: CupSoda },
]

const locations = [
  'Lagos', 'Ibadan', 'Abuja', 'Osogbo', 'Ile-Ife', 'Ilorin',
]

function Home() {
  const popularMeals = menuItems.slice(0, 3)

  return (
    <div>
      {/* Hero section */}
      <section className="bg-brand-primary text-white px-6 py-16 md:py-20 overflow-hidden">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* Hero text */}
          <div className="text-center md:text-left">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Good food is closer than you think.
            </h1>

            <p className="mt-5 text-white/90 text-lg md:text-xl max-w-xl mx-auto md:mx-0">
              Discover delicious meals from local Nigerian food vendors around
              you and order with ease.
            </p>

            <Link
              to="/menu"
              className="inline-block mt-8 bg-white text-brand-primary font-semibold px-8 py-3 rounded-xl hover:bg-brand-light transition-colors shadow-lg"
            >
              Explore Food
            </Link>
          </div>

          {/* Jollof rice image */}
          <div className="flex justify-center md:justify-end">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1603133872878-684f208fb84b?auto=format&fit=crop&w=900&q=85"
                alt="Delicious jollof rice"
                className="w-full max-w-md h-80 md:h-96 object-cover rounded-3xl shadow-2xl"
              />

              {/* Floating label */}
              <div className="absolute -bottom-4 left-4 md:-left-4 bg-white text-brand-dark px-5 py-3 rounded-2xl shadow-lg">
                <p className="text-sm font-semibold">
                  
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Food categories */}
      <section className="max-w-5xl mx-auto px-6 py-14">
        <h2 className="text-2xl font-bold text-brand-dark mb-8 text-center">
          Browse by Category
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {categories.map(({ name, icon: Icon }) => (
            <Link
              key={name}
              to="/menu"
              className="flex flex-col items-center gap-2 bg-white rounded-2xl shadow-sm hover:shadow-md p-5 transition-shadow"
            >
              <div className="w-12 h-12 rounded-full bg-brand-accent text-brand-dark flex items-center justify-center">
                <Icon size={22} />
              </div>

              <span className="text-sm font-medium text-brand-dark text-center">
                {name}
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* Popular meals */}
      <section className="bg-brand-light px-6 py-14">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-brand-dark">
              Popular Meals
            </h2>

            <Link
              to="/menu"
              className="text-brand-primary font-medium text-sm hover:underline"
            >
              View all
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {popularMeals.map((item) => (
              <MenuCard key={item.id} item={item} />
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="max-w-5xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="text-center">
          <div className="w-12 h-12 mx-auto bg-brand-accent text-brand-dark rounded-full flex items-center justify-center">
            <Search size={22} />
          </div>

          <h3 className="mt-4 font-semibold text-brand-dark">
            Browse the Menu
          </h3>

          <p className="mt-2 text-sm text-brand-gray">
            Pick from local vendors serving authentic Nigerian dishes.
          </p>
        </div>

        <div className="text-center">
          <div className="w-12 h-12 mx-auto bg-brand-accent text-brand-dark rounded-full flex items-center justify-center">
            <ShoppingCart size={22} />
          </div>

          <h3 className="mt-4 font-semibold text-brand-dark">
            Add to Cart
          </h3>

          <p className="mt-2 text-sm text-brand-gray">
            Adjust quantities and see your total update instantly.
          </p>
        </div>

        <div className="text-center">
          <div className="w-12 h-12 mx-auto bg-brand-accent text-brand-dark rounded-full flex items-center justify-center">
            <Truck size={22} />
          </div>

          <h3 className="mt-4 font-semibold text-brand-dark">
            Track Your Order
          </h3>

          <p className="mt-2 text-sm text-brand-gray">
            Place your order and follow its status on the Orders page.
          </p>
        </div>
      </section>

      {/* Locations */}
      <section className="bg-brand-light px-6 py-14">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-brand-dark mb-2">
            Now Serving
          </h2>

          <p className="text-brand-gray mb-8">
            Bringing local vendors to more Nigerian cities.
          </p>

          <div className="flex flex-wrap justify-center gap-3">
            {locations.map((city) => (
              <span
                key={city}
                className="flex items-center gap-1.5 bg-white rounded-full px-4 py-2 text-sm font-medium text-brand-dark shadow-sm"
              >
                <MapPin size={14} className="text-brand-primary" />
                {city}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA footer */}
      <section className="px-6 py-14 text-center">
        <h2 className="text-2xl font-bold text-brand-dark">
          Hungry already?
        </h2>

        <p className="mt-2 text-brand-gray">
          Your next meal is a few taps away.
        </p>

        <Link
          to="/menu"
          className="inline-block mt-6 bg-brand-primary text-white font-semibold px-8 py-3 rounded-xl hover:opacity-90 transition-colors"
        >
          Order Now
        </Link>
      </section>
    </div>
  )
}

export default Home