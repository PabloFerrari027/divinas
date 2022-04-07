import { HomeSliderContent } from '../HomeSliderItemsContent'
import './HomeSliderItems.css'

export function HomeSliderItems() {
  return (
    <div className="items">
      <div
        className="item"
        style={{ backgroundImage: 'url(/images/slider-1.jpg)' }}
      >
        <HomeSliderContent
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
        <HomeSliderContent
          description="beleza.
          glamour.
          confiança."
          linkButton="/#"
          textButton="Comprar apliques de cabelo"
        />
      </div>
    </div>
  )
}
