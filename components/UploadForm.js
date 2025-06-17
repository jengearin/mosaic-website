'use client';

import { useState } from 'react';

export default function UploadForm({ location }) {
  const [story, setStory] = useState('');
  const [files, setFiles] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitting story:', story);
    console.log('Files:', files);
    // Add your upload logic here
  };

  return (
    <div className="mt-6">
      <h2 className="text-xl font-semibold">Upload Your Story for {location}</h2>
      <form className="mt-4 flex flex-col gap-4" onSubmit={handleSubmit}>
        <input
          type="file"
          multiple
          accept="image/*"
          onChange={(e) => setFiles(e.target.files)}
        />
        <textarea
          placeholder="Tell me a story..."
          rows={4}
          className="border p-2"
          value={story}
          onChange={(e) => setStory(e.target.value)}
        />
        <button type="submit" className="bg-blue-600 text-white p-2 rounded">
          Submit
        </button>
      </form>
    </div>
  );
}
