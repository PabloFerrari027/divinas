import { useState } from 'react'
import { BestSellersProductContainer } from '../BestSellersProductContainer'
import './BestSellersProduct.css'

export function BestSellersProduct({
  title,
  price,
  url
}: {
  title: string
  price: string
  url: string
}) {
  const [isActive, setActive] = useState(false)
  return (
    <>
      <div className="product">
        <div className="img">
          <a href="/">
            <img src={url} alt="" />
          </a>
          <button className="btn-pink" onClick={() => setActive(true)}>
            visualização rápida
          </button>
        </div>
        <a href="/" className="content">
          <h2>{title}</h2>
          <p>
            R$
            {price}
          </p>
        </a>
      </div>

      <BestSellersProductContainer
        isActive={isActive}
        onClose={() => setActive(false)}
        url={url}
        title="Cartão Presente R$50,00"
        price="50,00"
        sku="SKU: 0039"
      />
    </>
  )
}
