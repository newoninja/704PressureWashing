import SEO from './SEO'

export default function PageHeader({ title, intro, description, canonicalPath, schema }) {
  return (
    <>
      <SEO title={title} description={description || intro} canonicalPath={canonicalPath} schema={schema} />
      <section className="page-header">
        <div className="container">
          <h1>{title}</h1>
          <p>{intro}</p>
        </div>
      </section>
    </>
  )
}
