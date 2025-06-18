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
        <main className="container">
          {children}
        </main>
      </body>
    </html>
  );
}