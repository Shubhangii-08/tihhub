// import type { Metadata } from 'next'
// import './globals.css'
// import Navbar from '@/components/navbar'
// import Footer from '@/components/Footer'

// export const metadata: Metadata = {
//   title: 'TIH Website',
//   description: 'iHub Drishti Foundation Website',
//   viewport: 'width=device-width, initial-scale=1.0',
// }

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode
// }) {
//   return (
//     <html lang="en" className="scroll-smooth">
//       <head>
//         <link rel="icon" href="/favicon.ico" />
//         {/* Add Font Awesome for icons used in Footer */}
//         <link 
//           rel="stylesheet" 
//           href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" 
//         />
//       </head>
//       <body className="min-h-screen flex flex-col">
//         <Navbar/>
//         <div className="flex-grow pt-24">
//           {children}
//         </div>
//         <Footer />
//       </body>
//     </html>
//   )
// } 




import type { Metadata, Viewport } from 'next'
import './globals.css'
import Navbar from '@/components/navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'TIH Website',
  description: 'iHub Drishti Foundation Website',
  // remove viewport from here
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  // optional extras:
  // maximumScale: 1,
  // userScalable: false,
  // Provide light/dark theme colors if you want the browser UI to adapt
  // themeColor: [
  //   { media: '(prefers-color-scheme: light)', color: '#ffffff' },
  //   { media: '(prefers-color-scheme: dark)', color: '#000000' },
  // ],
  // colorScheme: 'light dark',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
        />
      </head>
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-grow pt-24">{children}</div>
        <Footer />
      </body>
    </html>
  )
}
