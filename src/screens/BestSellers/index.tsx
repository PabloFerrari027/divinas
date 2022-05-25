import Product from '../../components/Product'
import './styles.css'

const BestSellers: React.FC = () => {
  return (
    <div className="bestSellers">
      <div className="container">
        <h1>mais vendidos</h1>
        <div className="products">
          <Product
            title="Cartão Presente"
            price="50,00"
            url="/images/bestSellers-1.webp"
          />
          <Product
            title="Cartão Presente"
            price="50,00"
            url="/images/bestSellers-2.webp"
          />
          <Product
            title="Cartão Presente"
            price="50,00"
            url="/images/bestSellers-3.webp"
          />
          <Product
            title="Cartão Presente"
            price="50,00"
            url="/images/bestSellers-4.webp"
          />
        </div>
      </div>
    </div>
  )
}

export default BestSellers
