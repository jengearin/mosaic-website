 import '../styles/globals.css';  // your global styles like Tailwind or CSS resets
import Navbar from '../components/Navbar'; // adjust path as needed

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Mosaic Project</title>
        {/* You can add meta tags, fonts, favicon here */}
      </head>
      <body className="bg-gray-50 text-gray-900 font-sans">
        <Navbar />
        <main className="w-full">
          {children}
      <footer
        id="contact"
        className="text-center mt-16 p-4 bg-gray-50 border-t border-gray-200"
      >
        <p className="text-sm text-gray-600">
          Contact:{' '}
          <a
            href="mailto:mosaic.jgearin@gmail.com"
            className="text-indigo-600 hover:underline"
          >
            mosaic.jgearin@gmail.com
          </a>
        </p>
      </footer>
        </main>
      </body>
    </html>
  );
}


