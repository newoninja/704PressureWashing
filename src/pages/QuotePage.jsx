export default function QuotePage() {
  return (
    <div style={{ marginTop: '-1px' }}>
      <iframe
        src="/quote.html"
        title="Instant Quote Calculator"
        style={{
          width: '100%',
          height: 'calc(100vh - 128px)',
          border: 'none',
          display: 'block',
        }}
      />
    </div>
  )
}
