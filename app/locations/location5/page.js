'use client';

import Image from 'next/image';
import UploadForm from '../../../components/UploadForm';
import StoryList from '../../../components/StoryList';

const cocoaVillageImageUrl = '/images/cocoavillage.jpg';

export default function LocationPage() {
  const hardcodedLocation = 'Cocoa Village';

  return (
    <main className="p-8 max-w-4xl mx-auto">
      <h1 className="text-4xl font-serif font-bold mb-6 text-center">
        Share your story for {hardcodedLocation}
      </h1>
              <div className="mb-8 rounded-lg overflow-hidden shadow-xl">
                <Image
                  src={cocoaVillageImageUrl} // Use the string URL directly
                  alt={`Scenic view of ${hardcodedLocation}`}
                  width={1200} // Still provide intrinsic width for optimization and layout shift prevention
                  height={600} // Still provide intrinsic height
                  className="w-full h-auto object-cover"
                  priority
                />
              </div>

      <p className="text-xl mb-6 text-center">
        Charming, creative, full of heart. Cocoa Village invites stories at every turn. What’s yours?
      </p>

      <UploadForm location={hardcodedLocation} />

      <StoryList location={hardcodedLocation} />
    </main>
  );
}
