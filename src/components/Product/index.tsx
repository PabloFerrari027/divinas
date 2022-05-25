import { useState } from 'react'
import { ProductProps } from '../types'
import DropBox from './DropBox'
import './styles.css'

const Product: React.FC<ProductProps> = ({ title, price, url }) => {
  const [isActive, setActive] = useState(false)
  const [isBestSellers] = useState(true)
  return (
    <>
      <div className="product">
        {isBestSellers && <div className="best-sellers">Mais Vendido</div>}
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

      <DropBox
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

export default Product
