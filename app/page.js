import Link from 'next/link';

export default function Home() {
  return (
    <>
      <main className="p-4 max-w-xl mx-auto min-h-[calc(100vh-80px)]">
        <h1 className="text-5xl font-extrabold mb-6 text-center">Mosaic</h1>
        <p className="text-xl mb-6 text-center text-gray-700">
          Click a location below to share your memory:
        </p>
        <ul className="no-bullets space-y-4">
          {[1, 2, 3, 4, 5, 6].map((num) => (
            <li key={num}>
              <Link
                href={`/locations/location${num}`}
                className="block text-2xl text-indigo-600 font-semibold rounded-md px-6 py-3 hover:bg-indigo-100 transition"
              >
                Location {num}
              </Link>
            </li>
          ))}
        </ul>
      </main>

      <footer id="contact" className="text-center mt-16 p-4 bg-gray-50 border-t border-gray-200">
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
    </>
  );
}
