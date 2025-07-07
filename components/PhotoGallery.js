'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function PhotoGallery({ location }) {
  const [stories, setStories] = useState([]);
  const [selectedStory, setSelectedStory] = useState(null);

  useEffect(() => {
    async function fetchStories() {
      const res = await fetch(`https://script.google.com/macros/s/AKfycbxcuioCsdvd2SyxIYwbP3NJaQiFEb6qWTY5uHLq_Il4v4p71pxSJ58iBuxsNnxKiRX5Hg/exec?location=${location}`);
      const data = await res.json();
      setStories(data.reverse());
    }
    fetchStories();
  }, [location]);

  function convertToDirectDownload(url) {
    const match = url?.match(/\/d\/(.+?)\//);
    return match ? `https://drive.google.com/uc?export=download&id=${match[1]}` : url;
  }

  return (
    <>
      <div className="hidden lg:block">
        <div className="relative w-full">
          {/* Left column */}
          <div className="absolute top-0 left-0 flex flex-col space-y-4 px-2">
            {stories
              .filter((_, idx) => idx % 2 === 0)
              .map((story, idx) => (
                <span
                  key={`left-${idx}`}
                  role="button"
                  tabIndex={0}
                  onClick={() => setSelectedStory(story)}
                  onKeyDown={(e) => e.key === 'Enter' && setSelectedStory(story)}
                  className="unstyled-button unstyled-hover hover:opacity-90"
                >
                  <Image
                    src={convertToDirectDownload(story.imageUrl)}
                    alt={`Story left ${idx + 1}`}
                    width={175}
                    height={175}
                    className="object-cover rounded-none"
                  />
                </span>
              ))}
          </div>

          {/* Right column */}
          <div className="absolute top-0 right-0 flex flex-col space-y-4 px-2">
            {stories
              .filter((_, idx) => idx % 2 !== 0)
              .map((story, idx) => (
                <span
                  key={`right-${idx}`}
                  role="button"
                  tabIndex={0}
                  onClick={() => setSelectedStory(story)}
                  onKeyDown={(e) => e.key === 'Enter' && setSelectedStory(story)}
                  className="unstyled-button unstyled-hover hover:opacity-90"
                >
                  <Image
                    src={convertToDirectDownload(story.imageUrl)}
                    alt={`Story right ${idx + 1}`}
                    width={175}
                    height={175}
                    className="object-cover rounded-none"
                  />
                </span>
              ))}
          </div>
        </div>
      </div>

      {/* Modal viewer */}
      {selectedStory && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
          <div className="bg-white max-w-lg p-6 relative">
            <button
              onClick={() => setSelectedStory(null)}
              className="unstyled-hover unstyled-button absolute top-2 right-2 text-gray-500 hover:text-black text-xl"
            >
              ×
            </button>
            <Image
              src={convertToDirectDownload(selectedStory.imageUrl)}
              alt="Selected story"
              width={600}
              height={400}
              className="mb-4 object-cover rounded-none"
            />
            <p className="whitespace-pre-line">{selectedStory.story}</p>
          </div>
        </div>
      )}
    </>
  );
}
