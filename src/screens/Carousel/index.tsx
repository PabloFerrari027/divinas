import React from 'react'
import Content from './Content'

import './styles.css'

const Carousel: React.FC = () => {
  return (
    <div className="carousel">
      <div className="items">
        <div
          className="item"
          style={{ backgroundImage: 'url(/images/slider-1.jpg)' }}
        >
          <Content
            description="dê valor
          à sua beleza"
            linkButton="/#"
            textButton="Comprar cílios"
          />
        </div>
        <div
          className="item"
          style={{ backgroundImage: 'url(/images/slider-2.jpg)' }}
        >
          <Content
            description="beleza.
          glamour.
          confiança."
            linkButton="/#"
            textButton="Comprar apliques de cabelo"
          />
        </div>
      </div>
    </div>
  )
}

export default Carousel
