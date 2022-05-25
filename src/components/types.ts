export type DescriptionPageProps = {
  description: string
}

export type ProductProps = {
  title: string
  price: string
  url: string
}

export type DropBoxProps = {
  isActive: boolean
  onClose: () => void
  title: string
  price: string
  sku: string
  url: string
}
