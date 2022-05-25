import React from 'react'

import './styles.css'

const SeenIn: React.FC = () => {
  return (
    <div className="seenin">
      <h1>Visto em</h1>
      <div className="images">
        <div className="img">
          <img src="/images/seenIn-1.png" alt="" />
        </div>
        <div className="img">
          <img src="/images/seenIn-2.png" alt="" />
        </div>
        <div className="img">
          <img src="/images/seenIn-3.png" alt="" />
        </div>
        <div className="img">
          <img src="/images/seenIn-4.png" alt="" />
        </div>
        <div className="img">
          <img src="/images/seenIn-5.webp" alt="" />
        </div>
      </div>
    </div>
  )
}

export default SeenIn
