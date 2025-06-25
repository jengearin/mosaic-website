'use client';

import Image from 'next/image';
import UploadForm from '../../../components/UploadForm';
import StoryList from '../../../components/StoryList';

const loriWilsonParkImageUrl = '/images/loriwilsonpark.jpg';

export default function LocationPage() {
  const hardcodedLocation = 'Lori Wilson Park';

  return (
    <main className="p-8 max-w-4xl mx-auto">
      <h6 className="text-4xl font-serif font-bold mb-6 text-center">
        Share your story for {hardcodedLocation}
      </h6>
              <div className="mt-10 mb-8 mx-50 rounded-lg overflow-hidden shadow-s">
                <Image
                  src={loriWilsonParkImageUrl} // Use the string URL directly
                  alt={`Scenic view of ${hardcodedLocation}`}
                  width={1200} // Still provide intrinsic width for optimization and layout shift prevention
                  height={600} // Still provide intrinsic height
                  className="w-full h-auto object-cover"
                  priority
                />
              </div>

      <p className="text-xl mb-6 text-center">
        Whether it’s the sea breeze, the boardwalk, or the banyans, Lori Wilson Park holds memories for many. What will you share?
      </p>

      <UploadForm location={hardcodedLocation} />

      <StoryList location={hardcodedLocation} />
    </main>
  );
}
