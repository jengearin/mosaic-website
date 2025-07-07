import Link from 'next/link';

export default function Home() {
  const places = [
    "Space View Park",
    "Ulumay Wildlife Sanctuary Lookout",
    "Lake Washington Park",
    "Lori Wilson Park",
    "Cocoa Village",
  ];

  return (
    <>
      <main className="max-w-4xl mx-auto min-h-[calc(100vh-80px)] px-4 py-12 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-6">
          {/* Main Heading: Larger, bolder, custom font (assuming you'll define a custom font later or use a strong sans-serif) */}
          <h1 className="text-6xl sm:text-7xl lg:text-8xl font-serif font-extrabold text-gray-900 leading-tight mb-4 tracking-tight">
            Mosaic
          </h1>

          {/* Tagline: Italicized, slightly larger, subtle color */}
          <p className="text-xl sm:text-2xl text-gray-600 mb-8 italic">
            Every place holds a story.
          </p>

          {/* Descriptive Text: Left-aligned for readability, increased line-height */}
          <p className="text-lg sm:text-xl text-gray-700 leading-relaxed text-left max-w-2xl mx-auto">
            <span className="block mb-4">
              <em className="font-semibold text-black-700">Mosaic</em> invites you to capture a meaningful place in your community and share the memory behind it.
            </span>
            Add your voice to a growing collective of local reflections—one story, one photo, one space at a time.
          </p>
        </div>

        {/* Call to Action for General Submission*/}
        <p className="text-xl sm:text-2xl font-serif font-semibold text-gray-800 mb-8 text-center">
          Tell us about yours:
        </p>

        {/* Call to Action for Locations */}
        <p className="text-xl sm:text-2xl font-serif font-semibold text-gray-800 mb-8 text-center">
          Or click a location below to share your memory:
        </p>

        {/* Locations List - now styled as proper buttons in a grid on larger screens */}
        <ul className="list-none grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
          {places.map((place, idx) => (
            <li key={idx} className="flex justify-center">
              <Link
                href={`/locations/location${idx + 1}`}
                className="
                  flex-grow
                  text-center
                  bg-slate-300
                  hover:bg-slate-500
                  text-white
                  font-bold
                  py-4
                  px-6
                  rounded-lg
                  shadow-lg
                  hover:shadow-xl
                  transition
                  duration-300
                  ease-in-out
                  transform
                  hover:-translate-y-1
                  text-lg sm:text-xl
                  whitespace-nowrap
                  truncate
                "
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