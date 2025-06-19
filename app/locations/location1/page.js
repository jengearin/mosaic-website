'use client';

import UploadForm from '../../../components/UploadForm';
import StoryList from '../../../components/StoryList';

export default function LocationPage({ params }) {
  const { locationId } = params;

  return (
    <main className="p-8 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-6 text-center">
        Share your story for {locationId}
      </h1>

      <p className="text-xl mb-6 text-center">
        What does this place mean to you? Share your story below.
      </p>

      <UploadForm location={locationId} />

      <StoryList location={locationId} />
    </main>
  );
}
