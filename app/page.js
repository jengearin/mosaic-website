import Link from 'next/link';

export default function Home() {
  return (
    <>
      <main className="p-8 max-w-xl mx-auto">
        <h1 className="text-5xl font-extrabold mb-6 text-center">Mosaic</h1>
        <p className="text-lg mb-8 text-center text-gray-700">
          Click a location below to share your memory:
        </p>
        <ul className="list-none space-y-4">
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
    </>
  );
}
