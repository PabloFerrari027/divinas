import React from 'react'
import { CarouselContentProps } from '../../types'

import './styles.css'

const Content: React.FC<CarouselContentProps> = ({
  description,
  textButton,
  linkButton
}) => {
  return (
    <>
      <div className="content">
        <div className="box">
          <p>{description}</p>
          <button>
            <a className="btn-pink" href={`${linkButton}`}>
              {textButton}
            </a>
          </button>
        </div>
      </div>
    </>
  )
}

export default Content
