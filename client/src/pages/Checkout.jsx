import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import { formatCurrency } from '../utils/formatCurrency'

function Checkout() {
  const { cart, cartTotal, clearCart } = useCart()
  const navigate = useNavigate()

  const [form, setForm] = useState({ name: '', phone: '', address: '' })
  const [submitting, setSubmitting] = useState(false)

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  function handleSubmit(e) {
    e.preventDefault()
    setSubmitting(true)

    const order = {
      id: Date.now(),
      items: cart,
      total: cartTotal,
      customer: form,
      status: 'Pending',
      date: new Date().toISOString(),
    }

    const existingOrders = JSON.parse(localStorage.getItem('orders')) || []
    localStorage.setItem('orders', JSON.stringify([order, ...existingOrders]))

    clearCart()
    navigate('/orders')
  }

  if (cart.length === 0) {
    return (
      <div className="p-8 text-center">
        <h1 className="text-2xl font-bold text-gray-900">No items to check out</h1>
      </div>
    )
  }

  return (
    <div className="p-6 md:p-8 max-w-lg mx-auto">
      <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Checkout</h1>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
          <input
            type="text"
            name="name"
            required
            value={form.name}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
          <input
            type="tel"
            name="phone"
            required
            value={form.phone}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Delivery Address</label>
          <textarea
            name="address"
            required
            rows={3}
            value={form.address}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>

        <div className="bg-white rounded-2xl shadow-sm p-4 flex items-center justify-between mt-2">
          <span className="font-semibold text-gray-900">Total</span>
          <span className="text-xl font-bold text-brand-primary">{formatCurrency(cartTotal)}</span>
        </div>

        <button
  type="submit"
  disabled={submitting}
  className="bg-brand-primary text-white font-semibold py-3 rounded-xl hover:opacity-90 transition-colors disabled:opacity-50"
>
  {submitting ? 'Placing Order...' : 'Place Order'}
</button>
      </form>
    </div>
  )
}

export default Checkout
