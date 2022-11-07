export type NavLinks = {
  id: number
  name: string
}[]

export type CartItem = {
  id: number
  name: string
  description: string
  price: number
  images: {
    id: number
    url: string
    title: string
  }[]
}

export type Slides = {
  url: string
  title: string
}[]
