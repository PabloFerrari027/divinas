import React from 'react'
import { DescriptionPageProps } from '../types'
import './styles.css'

const DescriptionPage: React.FC<DescriptionPageProps> = ({ description }) => {
  return (
    <section className="descriptionPage">
      <h1>{description}</h1>
    </section>
  )
}

export default DescriptionPage
