'use client';

import Image from 'next/image';
import UploadForm from '../../../components/UploadForm';
import StoryList from '../../../components/StoryList';

// **** THE CHANGE IS HERE: No longer importing as a module ****
// Instead, define the direct public URL path to your image
const spaceViewParkImageUrl = '/images/spaceviewpark.png'; // This is the path from your public directory

export default function LocationPage() {
  const hardcodedLocation = 'Space View Park';

  return (
    <main className="p-8 max-w-4xl mx-auto">
            <h1 className="text-4xl font-serif font-bold mb-6 text-center text-gray-900">
        Share your story for {hardcodedLocation}
      </h1>

      {/* Image at the top */}
      <div className="mb-8 mx-50 rounded-lg overflow-hidden shadow-xl">
        <Image
          src={spaceViewParkImageUrl} // Use the string URL directly
          alt={`Scenic view of ${hardcodedLocation}`}
          width={1200} // Still provide intrinsic width for optimization and layout shift prevention
          height={600} // Still provide intrinsic height
          className="w-full h-auto object-cover"
          priority
        />
      </div>

      <p className="text-xl mb-6 text-center text-gray-700 leading-relaxed max-w-2xl mx-auto">
        A place to watch rockets soar and memories settle. What story ties you to {hardcodedLocation}?
      </p>

      <div className="mb-12">
        <UploadForm location={hardcodedLocation} />
      </div>

      <StoryList location={hardcodedLocation} />
    </main>
  );
}