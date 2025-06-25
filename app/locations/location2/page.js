'use client';

import Image from 'next/image';
import UploadForm from '../../../components/UploadForm';
import StoryList from '../../../components/StoryList';

const ulumayImageUrl = '/images/ulumay.jpg';

export default function LocationPage() {
  const hardcodedLocation = 'Ulumay Wildlife Sanctuary Lookout';

  return (
    <main className="p-8 max-w-4xl mx-auto">
      <h6 className="text-4xl font-serif font-bold mb-6 text-center">
        Share your story for {hardcodedLocation}
      </h6>
      {/* Image at the top */}
      <div className="mt-10 mb-8 mx-50 rounded-lg overflow-hidden shadow-s">
        <Image
          src={ulumayImageUrl} // Use the string URL directly
          alt={`Scenic view of ${hardcodedLocation}`}
          width={1200} // Still provide intrinsic width for optimization and layout shift prevention
          height={600} // Still provide intrinsic height
          className="w-full h-auto object-cover"
          priority
        />
      </div>

      <p className="text-xl mb-6 text-center">
        Ulumay is more than a sanctuary, it’s a quiet witness to life unfolding. What moment brought you peace here?
      </p>

      <UploadForm location={hardcodedLocation} />

      <StoryList location={hardcodedLocation} />
    </main>
  );
}
