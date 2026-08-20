import { supabase } from '../lib/supabase'

function formatMenuItem(item) {
  return {
    ...item,
    vendor: item.vendors?.name || 'Local Vendor',
  }
}

export async function getMenuItems() {
  const { data, error } = await supabase
    .from('menu_items')
    .select(`
      id,
      name,
      description,
      price,
      image,
      category,
      available,
      vendor_id,
      vendors (
        name
      )
    `)
    .eq('available', true)
    .order('id')

  if (error) {
    console.error('Error fetching menu items:', error)
    throw error
  }

  return data.map(formatMenuItem)
}

export async function getMenuItemById(id) {
  const { data, error } = await supabase
    .from('menu_items')
    .select(`
      id,
      name,
      description,
      price,
      image,
      category,
      available,
      vendor_id,
      vendors (
        name
      )
    `)
    .eq('id', Number(id))
    .single()

  if (error) {
    console.error('Error fetching menu item:', error)
    throw error
  }

  return formatMenuItem(data)
}