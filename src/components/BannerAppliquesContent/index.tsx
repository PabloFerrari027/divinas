import './BannerAppliquesContent.css'

export function BannerAppliquesContent({
  urlImage,
  title,
  linkButton,
  className
}: {
  urlImage: string
  title: string
  linkButton: string
  className: string
}) {
  return (
    <div className="content">
      <div className="img">
        <img src={urlImage} alt="" />
      </div>
      <div className="box">
        <h1>{title}</h1>
        <button className={className}>
          <a href={`${linkButton}`}>Comece já</a>
        </button>
      </div>
    </div>
  )
}
