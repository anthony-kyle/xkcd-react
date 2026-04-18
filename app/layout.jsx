import { Comic_Neue } from 'next/font/google'

import './globals.css'

const comicNeue = Comic_Neue({
  subsets: ['latin'],
  weight: ['300', '400', '700'],
})

export const metadata = {
  title: 'XKCD Mirror',
  description: 'Browse xkcd comics',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.14.0/css/all.css"
          integrity="sha384-HzLeBuhoNPvSl5KYnjx0BT+WB0QEEqLprO+NBkkk5gbc67FTaL7XIGa2w1L0Xbgc"
          crossOrigin="anonymous"
        />
      </head>
      <body className={comicNeue.className}>
        <div id="app">{children}</div>
      </body>
    </html>
  )
}
