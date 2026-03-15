import '../styles/globals.css'
import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'

export const metadata = {
  title: "Greenaria Buildtech",
  description:
    "Greenaria Buildtech - Real Estate Consultant near Yamuna Expressway, Noida & Greater Noida.",
  keywords:
    "real estate noida, yamuna expressway property, greenaria buildtech",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>

        {/* Website Header */}
        <Header />

        {/* Main Content */}
        <main className="main-container">
          {children}
        </main>

        {/* Website Footer */}
        <Footer />

      </body>
    </html>
  )
}