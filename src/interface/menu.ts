export interface Menu {
  id: number
  menu_image_url: string
  menu_name: string
  menu_price: number
  menu_tag: {
    tag_content: string
    tag_id: string
  }[]
  menu_type: string
}

export interface Store {
  id: number
  shop_image_url: string
  shop_name: string
}
