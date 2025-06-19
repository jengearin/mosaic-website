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

  if (loading) return <p>Loading stories...</p>;

  return (
    <div className="story-list mt-8">
      <h2 className="text-2xl font-semibold mb-4">Other Stories</h2>
      {stories.length === 0 ? (
        <p>No stories yet for this location.</p>
      ) : (
        <div className="story-grid">
          {stories.map((story, idx) => (
            <div key={idx} className="story-card">
              <Image
                src={story.imageUrl}
                alt={`Story ${idx + 1}`}
                width={600}
                height={400}
                className="story-image"
              />
              <p>{story.story}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
