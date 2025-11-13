export const metadata = {
  title: 'Sarah Mitchell - Teacher Portfolio',
  description: 'Professional portfolio of Sarah Mitchell, High School English Teacher',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, fontFamily: 'system-ui, -apple-system, sans-serif' }}>
        {children}
      </body>
    </html>
  )
}
