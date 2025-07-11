import '../styles/globals.css';
import Navbar from '../components/Navbar';
import Link from 'next/link';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Mosaic</title>
        {/* You can add meta tags, fonts, and favicon here */}
      </head>

      <body className="bg-white text-gray-900 font-sans">
        {/* Header Block */}
        <header className="text-center pt-10 pb-4">
          <div className="flex flex-col items-center space-y-2">
            <h1 className="text-6xl sm:text-7xl lg:text-8xl font-serif font-extrabold text-gray-900 leading-tight tracking-tight">
              Mosaic
            </h1>
            <p className="text-xl sm:text-2xl text-gray-600 italic">
              Every place holds a story.
            </p>
          </div>
        </header>

        {/* Navbar */}
        <Navbar />

        <p className="text-xl sm:text-2xl text-white italic">
            ’
        </p>

        {/* Main content */}
        <main className="w-full">
          {children}
        </main>

        {/* Footer */}
        <footer id="contact" className="text-center mt-16 p-4 bg-white">
          <p className="text-sm text-gray-600">
            Contact:{' '}
            <a
              href="mailto:mosaic.jgearin@gmail.com"
              className="text-slate-600 hover:underline"
            >
              mosaic.jgearin@gmail.com
            </a>
          </p>
        </footer>
      </body>
    </html>
  );
}
