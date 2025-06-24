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
      <main className="max-w-10xl mx-auto min-h-[calc(100vh-80px)]">
        <h1 className="text-20xl font-serif font-extrabold mb-4 text-center">Mosaic</h1>

        <p className="text-md text-center text-gray-600 mb-6 italic">
          Every place holds a story.
        </p>

        <p className="text-lg text-center text-gray-700 mb-8 text-left">
          <span className="block mb-2">
            <em>Mosaic</em> invites you to capture a meaningful place in your community and share the memory behind it.
          </span >
          Add your voice to a growing collective of local reflections—one story, one photo, one space at a time.
        </p>

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
