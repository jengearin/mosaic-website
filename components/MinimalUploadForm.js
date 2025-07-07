'use client';
import { useState } from 'react';

export default function MinimalUploadForm({ location }) {
  const [story, setStory] = useState('');
  const [files, setFiles] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!story || !files?.[0]) {
      setMessage("Please provide both a story and an image.");
      return;
    }

    setUploading(true);
    setMessage('');

    const reader = new FileReader();
    reader.onloadend = async () => {
      const base64Image = reader.result;

      try {
        const response = await fetch(
          'https://script.google.com/macros/s/AKfycbwCaEqPJ7yAXCzGhQMrIVh2x4DOiP1aA_1UzK0McLxRDnh1kkWHTC9X_PsyABwXQKhnCg/exec',
          {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: new URLSearchParams({
              story,
              location,
              filename: files[0].name,
              image: base64Image,
            }),
          }
        );

        const text = await response.text();
        if (text.toLowerCase().includes("success")) {
          setMessage("✓ Uploaded");
          setTimeout(() => window.location.reload(), 3000);
        } else {
          setMessage("Upload complete, but unexpected response.");
        }
      } catch (err) {
        console.error(err);
        setMessage("Upload failed.");
      } finally {
        setUploading(false);
        setStory('');
        setFiles(null);
      }
    };

    reader.readAsDataURL(files[0]);
  };

  return (
    <form onSubmit={handleSubmit} className="mt-4 max-w-md mx-auto space-y-2 text-sm">
      <input
        type="file"
        accept="image/*"
        onChange={(e) => setFiles(e.target.files)}
        className="w-full border-none px-0 py-1"
      />

      <textarea
        placeholder="Your story..."
        rows={2}
        value={story}
        onChange={(e) => setStory(e.target.value)}
        className="w-full border border-gray-300 rounded-sm px-2 py-1 text-sm"
      />

      <div className="text-right">
        <button
          type="submit"
          disabled={uploading}
          className="bg-gray-800 text-white px-3 py-1 rounded text-sm hover:bg-black"
        >
          {uploading ? 'Uploading...' : 'Submit'}
        </button>
      </div>

      {message && (
        <p className="text-gray-500 text-xs mt-1 text-center">{message}</p>
      )}
    </form>
  );
}
