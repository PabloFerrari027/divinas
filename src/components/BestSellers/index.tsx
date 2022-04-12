import { BestSellersProduct } from '../BestSellersProduct'
import './BestSellers.css'

export function BestSellers() {
  return (
    <div className="bestSellers">
      <div className="container">
        <h1>mais vendidos</h1>
        <div className="products">
          <BestSellersProduct
            title="Cartão Presente"
            price="50,00"
            url="/images/bestSellers-1.webp"
          />
          <BestSellersProduct
            title="Cartão Presente"
            price="50,00"
            url="/images/bestSellers-2.webp"
          />
          <BestSellersProduct
            title="Cartão Presente"
            price="50,00"
            url="/images/bestSellers-3.webp"
          />
          <BestSellersProduct
            title="Cartão Presente"
            price="50,00"
            url="/images/bestSellers-4.webp"
          />
        </div>
      </div>
    </div>
  )
}
