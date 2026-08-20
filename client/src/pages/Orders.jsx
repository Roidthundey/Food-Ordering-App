import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { formatCurrency } from '../utils/formatCurrency'
import { supabase } from '../lib/supabase'

function Orders() {
  const [orders, setOrders] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    async function loadOrders() {
      try {
        const { data, error } = await supabase
          .from('orders')
          .select(`
            id,
            customer_name,
            customer_phone,
            delivery_address,
            total_amount,
            status,
            created_at,
            order_items (
              id,
              quantity,
              price,
              menu_items (
                name
              )
            )
          `)
          .order('created_at', { ascending: false })

        if (error) {
          throw error
        }

        setOrders(data)
      } catch (error) {
        console.error('Failed to load orders:', error)
        setError('Unable to load your orders.')
      } finally {
        setLoading(false)
      }
    }

    loadOrders()
  }, [])

  if (loading) {
    return (
      <div className="p-8 text-center text-gray-500">
        Loading orders...
      </div>
    )
  }

  if (error) {
    return (
      <div className="p-8 text-center text-red-500">
        {error}
      </div>
    )
  }

  if (orders.length === 0) {
    return (
      <div className="p-8 text-center">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">
          No orders yet
        </h1>

        <p className="text-gray-500 mb-6">
          Your placed orders will show up here.
        </p>

        <Link
          to="/menu"
          className="inline-block bg-green-600 text-white font-medium px-6 py-3 rounded-xl hover:bg-green-700 transition-colors"
        >
          Browse Menu
        </Link>
      </div>
    )
  }

  return (
    <div className="p-6 md:p-8 max-w-3xl mx-auto">
      <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
        Your Orders
      </h1>

      <div className="flex flex-col gap-4">
        {orders.map((order) => (
          <div
            key={order.id}
            className="bg-white rounded-2xl shadow-sm p-5"
          >
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm text-gray-500">
                {new Date(order.created_at).toLocaleString('en-NG', {
                  dateStyle: 'medium',
                  timeStyle: 'short',
                })}
              </span>

              <span className="text-xs font-semibold bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full">
                {order.status}
              </span>
            </div>

            <div className="flex flex-col gap-1 mb-3">
              {order.order_items.map((item) => (
                <div
                  key={item.id}
                  className="flex justify-between text-sm text-gray-700"
                >
                  <span>
                    {item.quantity}× {item.menu_items?.name}
                  </span>

                  <span>
                    {formatCurrency(item.price * item.quantity)}
                  </span>
                </div>
              ))}
            </div>

            <div className="border-t pt-3 flex justify-between items-center gap-4">
              <span className="text-sm text-gray-500">
                Deliver to: {order.delivery_address}
              </span>

              <span className="font-bold text-brand-primary whitespace-nowrap">
                {formatCurrency(order.total_amount)}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Orders