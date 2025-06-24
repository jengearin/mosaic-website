'use client';

import Image from 'next/image';
import UploadForm from '../../../components/UploadForm';
import StoryList from '../../../components/StoryList';

const downtownMelbourneImageUrl = '/images/downtownmelbourne.jpg';

export default function LocationPage() {
  const hardcodedLocation = 'Downtown Melbourne';

  return (
    <main className="p-8 max-w-4xl mx-auto">
      <h1 className="text-4xl font-serif font-bold mb-6 text-center">
        Share your story for {hardcodedLocation}
      </h1>
              <div className="mb-8 rounded-lg overflow-hidden shadow-xl">
                <Image
                  src={downtownMelbourneImageUrl} // Use the string URL directly
                  alt={`Scenic view of ${hardcodedLocation}`}
                  width={1200} // Still provide intrinsic width for optimization and layout shift prevention
                  height={600} // Still provide intrinsic height
                  className="w-full h-auto object-cover"
                  priority
                />
              </div>

      <p className="text-xl mb-6 text-center">
        Alive with color and history, Downtown Melbourne pulses with local life. Which part of it has stayed with you?
      </p>

      <UploadForm location={hardcodedLocation} />

      <StoryList location={hardcodedLocation} />
    </main>
  );
}
