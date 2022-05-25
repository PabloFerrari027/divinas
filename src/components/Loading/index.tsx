'./Loading.css'

import { useEffect, useState } from 'react'

const Loading: React.FC = () => {
  const [isActive, setActive] = useState(true)

  useEffect(() => setActive(false), [])

  return <>{isActive && <div className="loading"></div>}</>
}

export default Loading
