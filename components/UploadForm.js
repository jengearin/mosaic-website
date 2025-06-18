'use client';

import { useState } from 'react';

export default function UploadForm({ location }) {
  const [story, setStory] = useState('');
  const [files, setFiles] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitting story:', story);
    console.log('Files:', files);
    // TODO: Add actual upload logic
  };

  return (
    <div className="upload-form">
      <h2 className='mt-8'>Upload Your Story for {location}</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="file-upload">Select image(s):</label>
        <input
          id="file-upload"
          type="file"
          multiple
          accept="image/*"
          onChange={(e) => setFiles(e.target.files)}
        />

        <label htmlFor="story-text">Your story:</label>
        <textarea
          id="story-text"
          placeholder="Tell me a story..."
          rows={4}
          value={story}
          onChange={(e) => setStory(e.target.value)}
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
