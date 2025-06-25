'use client';

import Image from 'next/image';
import UploadForm from '../../../components/UploadForm';
import StoryList from '../../../components/StoryList';

const lakeWashingtonParkImageUrl = '/images/lakewashingtonpark.jpg';

export default function LocationPage() {
  const hardcodedLocation = 'Lake Washington Park';

  return (
    <main className="p-8 max-w-4xl mx-auto">
      <h6 className="text-4xl font-serif font-bold mb-6 text-center">
        Share your story for {hardcodedLocation}
      </h6>
              {/* Image at the top */}
              <div className="mt-10 mb-8 mx-50 rounded-lg overflow-hidden shadow-s">
                <Image
                  src={lakeWashingtonParkImageUrl} // Use the string URL directly
                  alt={`Scenic view of ${hardcodedLocation}`}
                  width={1200} // Still provide intrinsic width for optimization and layout shift prevention
                  height={600} // Still provide intrinsic height
                  className="w-full h-auto object-cover"
                  priority
                />
              </div>

      <p className="text-xl mb-6 text-center">
        Still waters and old trails. Lake Washington Park is a haven for quiet moments. What part of this place lives in your memory?
      </p>

      <UploadForm location={hardcodedLocation} />

      <StoryList location={hardcodedLocation} />
    </main>
  );
}
