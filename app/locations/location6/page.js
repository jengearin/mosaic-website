'use client';

import UploadForm from '../../../components/UploadForm';
import StoryList from '../../../components/StoryList';

export default function LocationPage() {
  const hardcodedLocation = 'Downtown Melbourne';

  return (
    <main className="p-8 max-w-4xl mx-auto">
      <h1 className="text-4xl font-serif font-bold mb-6 text-center">
        Share your story for {hardcodedLocation}
      </h1>

      <p className="text-xl mb-6 text-center">
        Alive with color and history, Downtown Melbourne pulses with local life. Which part of it has stayed with you?
      </p>

      <UploadForm location={hardcodedLocation} />

      <StoryList location={hardcodedLocation} />
    </main>
  );
}
