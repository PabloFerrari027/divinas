import './BannerAppliques.css'

import { BannerAppliquesContent } from '../BannerAppliquesContent'

export function BannerAppliques() {
  return (
    <div className="bannerAppliques">
      <BannerAppliquesContent
        urlImage="/images/bannerAppliques-1.webp"
        title="apliques de
        cabelo natural"
        linkButton="#"
        className="btn-pink"
      />
      <BannerAppliquesContent
        urlImage="/images/bannerAppliques-2.webp"
        title="cílios
        perfeitos"
        linkButton="#"
        className="btn-black"
      />
    </div>
  )
}
