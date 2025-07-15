'use client';

import { useState } from 'react';
import Link from 'next/link';
import UploadForm from '@/components/UploadForm';
import StoryList from '@/components/StoryList';
import MinimalUploadForm from '@/components/MinimalUploadForm';
import MinimalStoryList from '@/components/MinimalStoryList';

export default function Home() {
  const [showForm, setShowForm] = useState(false);

  const places = [
    "Space View Park",
    "Ulumay Wildlife Sanctuary Lookout",
    "Lake Washington Park",
    "Lori Wilson Park",
    "Cocoa Village",
  ];

  return (
    <>
      <main className="max-w-4xl mx-auto min-h-[calc(100vh-80px)] px-4 py-2 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-6">

          <p className="text-lg sm:text-xl text-gray-700 leading-relaxed text-left max-w-2xl mx-auto">
            <span className="block mb-4">
              <em className="font-semibold text-black-700">Mosaic</em> invites you to capture a meaningful place in your community and share the memory behind it.
            </span>
            Add your voice to a growing collective of local reflections—one story, one photo, one space at a time.
          </p>
        </div>

        {/* Toggleable Upload Form */}
        <div className="text-xl sm:text-2xl font-serif font-semibold text-gray-800 mt-10 mb-3 text-center">
          <p>
          Tell us about yours {''}
          <span
          role="button"
          tabIndex={0}
          onClick={() => setShowForm(prev => !prev)}
          onKeyDown={(e) => e.key === 'Enter' && setShowForm(prev => !prev)}
          className="inline-block cursor-pointer text-xl sm:text-2xl font-serif text-slate-600 hover:text-black underline transition"
          >
          here
          </span>
          </p>

          {showForm && (
            <div className="mt-4 transition-opacity duration-300 ease-in-out">
             <MinimalUploadForm location="Home" />
            </div>
          )}
        </div>

        {/* Location-based Submission */}
        <p className="text-xl sm:text-2xl font-serif font-semibold text-gray-800 mt-8 mb-6 text-center">
          Or click a location below to share your memory:
        </p>

        <ul className="list-none grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 mb-20">
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

        {/* Optional: Show general stories below */}
        <MinimalStoryList location="Home" />
      </main>
    </>
  );
}
