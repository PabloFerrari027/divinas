import './HomeSliderItemsContent.css'

export function HomeSliderContent({
  description,
  textButton,
  linkButton
}: {
  description: string
  textButton: string
  linkButton: string
}) {
  return (
    <>
      <div className="content">
        <div className="box">
          <p>{description}</p>
          <button>
            <a className="btn-pink" href={`${linkButton}`}>
              {' '}
              {textButton}{' '}
            </a>
          </button>
        </div>
      </div>
    </>
  )
}
