export default function QuotePage() {
  return (
    <div
      style={{
        minHeight: '100dvh',
        background: 'linear-gradient(135deg, #0a1d4f 0%, #0b3b72 58%, #0f85c6 100%)',
      }}
    >
      <iframe
        src="/quote.html"
        title="Instant Quote Calculator"
        style={{
          width: '100%',
          minHeight: '100dvh',
          height: '100dvh',
          border: 'none',
          display: 'block',
        }}
      />
    </div>
  )
}
