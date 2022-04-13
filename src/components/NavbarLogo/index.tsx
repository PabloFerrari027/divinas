import { Link } from 'react-router-dom'
import './NavbarLogo.css'

export function NavbarLogo() {
  return (
    <Link to="/">
      <div className="logo">
        <svg
          preserveAspectRatio="xMidYMid meet"
          data-bbox="25 25 150 150"
          viewBox="25 25 150 150"
          height="40"
          width="40"
          xmlns="http://www.w3.org/2000/svg"
          data-type="tint"
          role="presentation"
          aria-hidden="true"
        >
          <g>
            <path
              d="M25 25v150h150V25H25zm145.241 145.243H29.759V29.757h140.482v140.486z"
              fill="#fff"
            ></path>
            <path
              d="M129.865 137.401l4.354 7.43 3.736-2.191-4.354-7.43a27.614 27.614 0 0 1 4.517-33.743 31.925 31.925 0 0 0 2.707-42.707l-3.041-3.842-3.395 2.688 3.041 3.842a27.6 27.6 0 0 1-2.343 36.923 31.938 31.938 0 0 0-5.222 39.03z"
              fill="#fff"
            ></path>
            <path
              d="M105.464 137.401l4.354 7.43 3.736-2.191-4.354-7.43a27.614 27.614 0 0 1 4.517-33.743 31.925 31.925 0 0 0 2.707-42.707l-3.041-3.842-3.395 2.688 3.041 3.842a27.6 27.6 0 0 1-2.343 36.923 31.938 31.938 0 0 0-5.222 39.03z"
              fill="#fff"
            ></path>
            <path
              d="M81.063 137.401l4.354 7.43 3.736-2.191-4.354-7.43a27.614 27.614 0 0 1 4.515-33.743 31.925 31.925 0 0 0 2.709-42.707l-3.041-3.842-3.395 2.688 3.041 3.842a27.6 27.6 0 0 1-2.345 36.923 31.943 31.943 0 0 0-5.22 39.03z"
              fill="#fff"
            ></path>
            <path
              d="M56.662 137.401l4.354 7.43 3.736-2.191-4.354-7.43a27.612 27.612 0 0 1 4.515-33.743 31.923 31.923 0 0 0 2.709-42.707l-3.038-3.842-3.4 2.688 3.041 3.842a27.598 27.598 0 0 1-2.343 36.923 31.937 31.937 0 0 0-5.22 39.03z"
              fill="#fff"
            ></path>
          </g>
        </svg>
        <span>DIVINAS</span>
      </div>
    </Link>
  )
}
