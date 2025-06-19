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
        const response = await fetch('https://script.google.com/macros/s/AKfycbykzaxoTpIjfIYU73FdeChrVNeXFVagM_RHv52ftO8_hkDFbdt8Wdo0_gLPPqTi1ZnpUQ/exec', {
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
        });

        const text = await response.text();
        setMessage(text.includes("Success") ? "Upload successful!" : text);
      } catch (err) {
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
      <form onSubmit={handleSubmit}>
        <label htmlFor="file-upload">Select image:</label>
        <input
          id="file-upload"
          type="file"
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

        <button type="submit" disabled={uploading}>
          {uploading ? 'Uploading...' : 'Submit'}
        </button>
      </form>
      {message && <p className="mt-4 text-sm text-center">{message}</p>}
    </div>
  );
}
