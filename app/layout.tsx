import 'bootstrap/dist/css/bootstrap.css'
import { Metadata } from "next"

export const metadata: Metadata = {
    title: {
      template: '%s - Sinusoide',
      default: 'Sinusoide'
    }
}

export default function RootLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <html lang="en">
        <body>{children}</body>
      </html>
    )
  }