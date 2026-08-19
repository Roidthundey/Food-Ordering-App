import { Link } from 'react-router-dom'
import { ShoppingCart, Home, UtensilsCrossed, Receipt } from 'lucide-react'
import { useCart } from '../../context/CartContext'

function Navbar() {
  const { cartCount } = useCart()

  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-white shadow-sm border-b border-brand-border">
      <Link to="/" className="text-xl font-bold text-brand-primary">
        FoodiePoint
      </Link>

      <div className="flex items-center gap-3 sm:gap-6 text-brand-dark font-medium text-sm sm:text-base">
        <Link to="/" className="flex items-center gap-1.5 hover:text-brand-primary transition-colors">
          <Home size={18} />
          <span className="hidden sm:inline">Home</span>
        </Link>

        <Link to="/menu" className="flex items-center gap-1.5 hover:text-brand-primary transition-colors">
          <UtensilsCrossed size={18} />
          <span className="hidden sm:inline">Menu</span>
        </Link>

        <Link to="/cart" className="relative flex items-center gap-1.5 hover:text-brand-primary transition-colors">
          <ShoppingCart size={18} />
          <span className="hidden sm:inline">Cart</span>
          {cartCount > 0 && (
            <span className="absolute -top-2 -right-2 sm:-right-3 bg-brand-primary text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
              {cartCount}
            </span>
          )}
        </Link>

        <Link to="/orders" className="flex items-center gap-1.5 hover:text-brand-primary transition-colors">
          <Receipt size={18} />
          <span className="hidden sm:inline">Orders</span>
        </Link>
      </div>
    </nav>
  )
}

export default Navbar