import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import { formatCurrency } from '../utils/formatCurrency'

function Cart() {
  const { cart, increaseQty, decreaseQty, removeFromCart, cartTotal } = useCart()

  if (cart.length === 0) {
    return (
      <div className="p-8 text-center">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Your cart is empty</h1>
        <p className="text-gray-500 mb-6">Add some delicious food to get started.</p>
       <Link
  to="/checkout"
  className="block w-full text-center mt-4 bg-brand-primary text-white font-semibold py-3 rounded-xl hover:opacity-90 transition-colors"
>
  Proceed to Checkout
  </Link>
      </div>
    )
  }

  return (
    <div className="p-6 md:p-8 max-w-3xl mx-auto">
      <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Your Cart</h1>

      <div className="flex flex-col gap-4">
        {cart.map((item) => (
          <div
            key={item.id}
            className="flex flex-col sm:flex-row sm:items-center gap-4 bg-white rounded-2xl shadow-sm p-4"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-20 h-20 object-cover rounded-xl"
            />

            <div className="flex-1">
              <h3 className="font-semibold text-gray-900">{item.name}</h3>
              <p className="text-sm text-gray-500">{item.vendor}</p>
              <p className="text-brand-primary font-bold mt-1">{formatCurrency(item.price)}</p>
            </div>

            <div className="flex items-center justify-between sm:justify-start gap-3">
              <div className="flex items-center gap-3">
                <button
                  onClick={() => decreaseQty(item.id)}
                  className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 font-bold"
                >
                  −
                </button>
                <span className="w-6 text-center font-medium">{item.quantity}</span>
                <button
                  onClick={() => increaseQty(item.id)}
                  className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 font-bold"
                >
                  +
                </button>
              </div>

              <button
                onClick={() => removeFromCart(item.id)}
                className="text-red-500 text-sm font-medium hover:underline sm:ml-2"
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 bg-white rounded-2xl shadow-sm p-6 flex items-center justify-between">
        <span className="text-lg font-semibold text-gray-900">Total</span>
        <span className="text-2xl font-bold text-brand-primary">{formatCurrency(cartTotal)}</span>
      </div>

      <Link
  to="/checkout"
  className="inline-block bg-brand-primary text-white font-medium px-6 py-3 rounded-xl hover:opacity-90 transition-colors"
>
  Proceed to Checkout
</Link>
    </div>
  )
}

export default Cart


