import { useState } from 'react'
import { DropBoxProps } from '../../types'
import './styles.css'

const DropBox: React.FC<DropBoxProps> = ({
  isActive,
  onClose,
  title,
  price,
  sku,
  url
}) => {
  const [val, setVal] = useState(1)

  return (
    <div className={`dropbox ${isActive && 'active'}`}>
      <div className="overlay" onClick={() => onClose()}></div>
      <div className="container">
        <button onClick={() => onClose()}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 320 512"
            width="14"
            fill="var(--black)"
          >
            <path d="M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z" />
          </svg>
        </button>
        <div className="img">
          <img src={url} alt="" />
        </div>
        <div className="content">
          <h1>{title}</h1>
          <p className="price">
            R$
            {price}
          </p>
          <p className="sku">{sku}</p>
          <div className="form">
            <label htmlFor="quantity">Quantidade</label>
            <input
              type="number"
              id="quantity"
              placeholder={`${val}`}
              onChange={e => setVal(Number(e.target.value))}
            />
            <button className="btn-pink">Adicionar ao carrito</button>
          </div>
          <a href="/">Ver mais informações</a>
        </div>
      </div>
    </div>
  )
}

export default DropBox
