import { SeenInImage } from '../SeenInImage'
import './SeenIn.css'

export function SeenIn() {
  return (
    <div className="seenin">
      <h1>Visto em</h1>
      <div className="images">
        <SeenInImage url="/images/seenIn-1.png" alt="" />
        <SeenInImage url="/images/seenIn-2.png" alt="" />
        <SeenInImage url="/images/seenIn-3.png" alt="" />
        <SeenInImage url="/images/seenIn-4.png" alt="" />
        <SeenInImage url="/images/seenIn-5.webp" alt="" />
      </div>
    </div>
  )
}
