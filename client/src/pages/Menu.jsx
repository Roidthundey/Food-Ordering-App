import { useEffect, useState } from 'react'
import { getMenuItems } from '../services/menuService'
import MenuCard from '../components/menu/MenuCard'

function Menu() {
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const loadMenu = async () => {
      try {
        const data = await getMenuItems()
        setItems(data)
      } catch (error) {
        console.error('Failed to load menu:', error)
        setError('Unable to load menu. Please try again.')
      } finally {
        setLoading(false)
      }
    }

    loadMenu()
  }, [])

  if (loading) {
    return <p className="p-8 text-gray-500">Loading menu...</p>
  }

  if (error) {
    return <p className="p-8 text-red-500">{error}</p>
  }

  return (
    <div className="p-6 md:p-8">
      <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
        Our Menu
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item) => (
          <MenuCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  )
}

export default Menu