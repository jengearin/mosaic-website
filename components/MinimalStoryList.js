'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function StoryList({ location }) {
  const [stories, setStories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [expandedIndexes, setExpandedIndexes] = useState({});

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

  function convertToDirectDownload(url) {
    const match = url?.match(/\/d\/(.+?)\//);
    return match ? `https://drive.google.com/uc?export=download&id=${match[1]}` : url;
  }

  function toggleExpand(idx) {
    setExpandedIndexes(prev => ({
      ...prev,
      [idx]: !prev[idx]
    }));
  }

  if (loading) return <p>Loading stories...</p>;

  return (
    <div className="story-list mt-4 px-2">
      {stories.length === 0 ? (
        <p>No stories yet for this location.</p>
      ) : (
        <div className="columns-2 sm:columns-2 md:columns-3 lg:columns-4 gap-2 space-y-4">
          {[...stories].reverse().map((story, idx) => {
            const imageUrl = convertToDirectDownload(story.imageUrl);
            const isExpanded = expandedIndexes[idx];
            const isLong = story.story.length > 100;
            const previewText = story.story.slice(0, 100);

            return (
              <div key={idx} className="story-card break-inside-avoid border rounded-md shadow-sm p-2 leading-tight">
                <Image
                  src={imageUrl}
                  alt={`Story ${idx + 1}`}
                  width={200}
                  height={140}
                  className="story-image rounded-sm w-full h-auto object-cover"
                />
                <p className="mt-1 whitespace-pre-line">
                  {isExpanded || !isLong ? story.story : `${previewText}...`}
                </p>
                {isLong && (
                  <button
                    onClick={() => toggleExpand(idx)}
                    className="text-blue-600 hover:underline mt-1"
                  >
                    {isExpanded ? 'Show less' : 'Read more'}
                  </button>
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
