import { createContext, useContext, useReducer, useEffect } from 'react'

const CartContext = createContext()

// Reducer: a single function that decides how state changes based on an "action"
function cartReducer(state, action) {
  switch (action.type) {
    case 'ADD_ITEM': {
      const existing = state.find((i) => i.id === action.item.id)
      if (existing) {
        // Item already in cart — increase quantity instead of duplicating
        return state.map((i) =>
          i.id === action.item.id ? { ...i, quantity: i.quantity + 1 } : i
        )
      }
      // New item — add with quantity 1
      return [...state, { ...action.item, quantity: 1 }]
    }

    case 'REMOVE_ITEM':
      return state.filter((i) => i.id !== action.id)

    case 'INCREASE_QTY':
      return state.map((i) =>
        i.id === action.id ? { ...i, quantity: i.quantity + 1 } : i
      )

    case 'DECREASE_QTY':
      return state
        .map((i) =>
          i.id === action.id ? { ...i, quantity: i.quantity - 1 } : i
        )
        .filter((i) => i.quantity > 0) // remove item if quantity hits 0

    case 'CLEAR_CART':
      return []

    default:
      return state
  }
}

// Lazy initializer: load cart from localStorage on first render, so it survives page refresh
function getInitialCart() {
  const saved = localStorage.getItem('cart')
  return saved ? JSON.parse(saved) : []
}

export function CartProvider({ children }) {
  const [cart, dispatch] = useReducer(cartReducer, undefined, getInitialCart)

  // Whenever cart changes, save it to localStorage
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart))
  }, [cart])

  const addToCart = (item) => dispatch({ type: 'ADD_ITEM', item })
  const removeFromCart = (id) => dispatch({ type: 'REMOVE_ITEM', id })
  const increaseQty = (id) => dispatch({ type: 'INCREASE_QTY', id })
  const decreaseQty = (id) => dispatch({ type: 'DECREASE_QTY', id })
  const clearCart = () => dispatch({ type: 'CLEAR_CART' })

  const cartCount = cart.reduce((sum, i) => sum + i.quantity, 0)
  const cartTotal = cart.reduce((sum, i) => sum + i.price * i.quantity, 0)

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, increaseQty, decreaseQty, clearCart, cartCount, cartTotal }}
    >
      {children}
    </CartContext.Provider>
  )
}

// Custom hook — components use useCart() instead of importing useContext + CartContext everywhere
export function useCart() {
  return useContext(CartContext)
}
