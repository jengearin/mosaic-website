'use client';

import UploadForm from '../../../components/UploadForm';
import StoryList from '../../../components/StoryList';

export default function LocationPage() {
  const hardcodedLocation = 'Lori Wilson Park';

  return (
    <main className="p-8 max-w-4xl mx-auto">
      <h1 className="text-4xl font-serif font-bold mb-6 text-center">
        Share your story for {hardcodedLocation}
      </h1>

      <p className="text-xl mb-6 text-center">
        Whether it’s the sea breeze, the boardwalk, or the banyans, Lori Wilson Park holds memories for many. What will you share?
      </p>

      <UploadForm location={hardcodedLocation} />

      <StoryList location={hardcodedLocation} />
    </main>
  );
}
