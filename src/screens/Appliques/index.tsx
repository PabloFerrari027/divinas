import React from 'react'
import Content from './Content'

import './styles.css'

const Appliques: React.FC = () => {
  return (
    <div className="appliques">
      <Content
        urlImage="/images/bannerAppliques-1.webp"
        title="apliques de
      cabelo natural"
        linkButton="#"
        className="btn-pink"
      />
      <Content
        urlImage="/images/bannerAppliques-2.webp"
        title="cílios
      perfeitos"
        linkButton="#"
        className="btn-black"
      />
    </div>
  )
}

export default Appliques
