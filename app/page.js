import Link from 'next/link';

export default function Home() {
  const places = [
    "Space View Park",
    "Ulumay Wildlife Sanctuary Lookout",
    "Lake Washington Park",
    "Lori Wilson Park",
    "Cocoa Village",
    "Downtown Melbourne",
  ];


return (
    <>
      <main className="p-4 max-w-xl mx-auto min-h-[calc(100vh-80px)]">
        <h1 className="text-5xl font-extrabold mb-6 text-center">Mosaic</h1>
        <p className="text-xl mb-6 text-center text-gray-700">
          Click a location below to share your memory:
        </p>
        <ul className="no-bullets list-none space-y-4">
          {places.map((place, idx) => (
            <li key={idx}>
              <Link
                href={`/locations/location${idx + 1}`}
                className="block text-2xl text-indigo-600 font-semibold rounded-md px-6 py-3 hover:bg-indigo-100 transition"
              >
                {place}
              </Link>
            </li>
          ))}
        </ul>
      </main>
    </>
  );
}
