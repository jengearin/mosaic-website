import Link from 'next/link';

export default function Home() {
  return (
    <>
      <main className="p-0 max-w-xl mx-auto">
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


      <footer id="contact" className="text-center mt-16 p-4">
        <p className="text-sm text-gray-600">
          Contact:{' '}
          <a
            href="mailto:jgearin.mosaic@gmail.com"
            className="text-indigo-600 hover:underline"
          >
            jgearin.mosaic@gmail.com
          </a>
        </p>
      </footer>
    </>
  );
}
