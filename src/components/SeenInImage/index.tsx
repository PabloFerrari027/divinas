import './SeenInImage.css'

export function SeenInImage({ url, alt }: { url: string; alt: string }) {
  return (
    <div className="img">
      <img src={url} alt={alt} />
    </div>
  )
}
