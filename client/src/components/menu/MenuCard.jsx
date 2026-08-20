import { formatCurrency } from '../../utils/formatCurrency'
import { useCart } from '../../context/CartContext'
import { ShoppingCart } from 'lucide-react'

function MenuCard({ item }) {
  const { addToCart } = useCart()

  return (
    <div className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow overflow-hidden flex flex-col">
      <img
        src={item.image}
        alt={item.name}
        className="w-full h-44 object-cover"
        loading="lazy"
      />

      <div className="p-4 flex flex-col flex-1">
        <div className="flex justify-between items-start gap-2">
          <h3 className="font-semibold text-gray-900">{item.name}</h3>
          <span className="text-brand-primary font-bold whitespace-nowrap">
  {formatCurrency(item.price)}
</span>
        </div>

        <p className="text-sm text-gray-500 mt-1">
  {item.vendors?.name}
</p>
        <p className="text-sm text-gray-600 mt-2 flex-1">{item.description}</p>

        <button
  onClick={() => addToCart(item)}
  className="mt-4 bg-brand-primary text-white font-medium py-2 rounded-xl hover:opacity-90 active:scale-95 transition-all flex items-center justify-center gap-2"
>
  <ShoppingCart size={16} />
  Add to Cart
</button>
      </div>
    </div>
  )
}

export default MenuCard
