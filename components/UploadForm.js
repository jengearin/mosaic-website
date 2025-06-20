'use client';
import { useState } from 'react';

export default function UploadForm({ location }) {
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
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: new URLSearchParams({
              story,
              location,
              filename: files[0].name,
              image: base64Image,
            }),
          }
        );

        const text = await response.text();
        console.log("Upload response:", text); // 🔍 for debugging

        if (text.toLowerCase().includes("success")) {
          setMessage("Upload successful! Refreshing...");

          setTimeout(() => {
            window.location.reload();
          }, 4000); // allow 4s buffer for Drive & Sheet to sync
        } else {
          setMessage("Upload complete, but received unexpected response: " + text);
        }
      } catch (err) {
        console.error(err);
        setMessage("Upload failed: " + err.message);
      } finally {
        setUploading(false);
        setStory('');
        setFiles(null);
      }
    };

    reader.readAsDataURL(files[0]);
  };

  return (
    <div className="upload-form mt-8">
      <h2 className="text-xl font-bold mb-4">Upload Your Story for {location}</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="file-upload" className="block font-medium">Select image:</label>
          <input
            id="file-upload"
            type="file"
            accept="image/*"
            onChange={(e) => setFiles(e.target.files)}
            className="block w-full"
          />
        </div>

        <div>
          <label htmlFor="story-text" className="block font-medium">Your story:</label>
          <textarea
            id="story-text"
            placeholder="Tell me a story..."
            rows={4}
            value={story}
            onChange={(e) => setStory(e.target.value)}
            className="block w-full border rounded-md p-2"
          />
        </div>

        <button
          type="submit"
          disabled={uploading}
          className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 disabled:opacity-50"
        >
          {uploading ? 'Uploading...' : 'Submit'}
        </button>
      </form>

      {message && <p className="mt-4 text-sm text-center text-gray-700">{message}</p>}
    </div>
  );
}
