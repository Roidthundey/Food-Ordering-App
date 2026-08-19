import { menuItems } from '../data/menuItems'

export function getMenuItems() {
  return Promise.resolve(menuItems)
}

export function getMenuItemById(id) {
  const item = menuItems.find((item) => item.id === Number(id))
  return Promise.resolve(item)
}
