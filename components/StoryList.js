'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function StoryList({ location }) {
  const [stories, setStories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchStories() {
      try {
        const res = await fetch(`https://script.google.com/macros/s/AKfycbxcuioCsdvd2SyxIYwbP3NJaQiFEb6qWTY5uHLq_Il4v4p71pxSJ58iBuxsNnxKiRX5Hg/exec?location=${location}`);
        const data = await res.json();
        setStories(data);
      } catch (err) {
        console.error("Failed to fetch stories:", err);
      } finally {
        setLoading(false);
      }
    }

    fetchStories();
  }, [location]);

  // helper function to convert view link → direct download link
  function convertToDirectDownload(url) {
    const match = url?.match(/\/d\/(.+?)\//);
    if (match && match[1]) {
      const fileId = match[1];
      return `https://drive.google.com/uc?export=download&id=${fileId}`;
    }
    return url; // fallback if not a Drive view link
  }

  if (loading) return <p>Loading stories...</p>;

  return (
    <div className="story-list mt-8">
      <h2 className="text-2xl font-semibold mb-4">Other Stories</h2>
      {stories.length === 0 ? (
        <p>No stories yet for this location.</p>
      ) : (
        <div className="story-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...stories].reverse().map((story, idx) => {
            const imageUrl = convertToDirectDownload(story.imageUrl);
            return (
              <div key={idx} className="story-card border p-4 rounded-xl shadow">
                <Image
                  src={imageUrl}
                  alt={`Story ${idx + 1}`}
                  width={600}
                  height={400}
                  className="story-image rounded-md"
                />
                <p className="mt-2">{story.story}</p>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
