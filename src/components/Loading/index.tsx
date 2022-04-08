'./Loading.css'

import { useEffect, useState } from 'react'

export function Loading() {
  const [isActive, setActive] = useState(true)

  useEffect(() => setActive(false), [])

  return <>{isActive && <div className="loading"></div>}</>
}
