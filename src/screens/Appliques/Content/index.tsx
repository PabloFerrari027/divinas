import React from 'react'
import { AppliquesContentProps } from '../../types'

import './styles.css'

const Content: React.FC<AppliquesContentProps> = ({
  urlImage,
  title,
  linkButton,
  className
}) => {
  return (
    <div className="content">
      <div className="img">
        <img src={urlImage} alt="" />
      </div>
      <div className="box">
        <h1>{title}</h1>
        <button>
          <a className={className} href={`${linkButton}`}>
            Comece já
          </a>
        </button>
      </div>
    </div>
  )
}

export default Content
