import './DescriptionPage.css'

export function DescriptionPage({ description }: { description: string }) {
  return (
    <section className="descriptionPage">
      <h1>{description}</h1>
    </section>
  )
}
