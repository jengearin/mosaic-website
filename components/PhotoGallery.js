// PhotoGallery.js
'use client';
import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

export default function PhotoGallery({ location }) {
  const [stories, setStories] = useState([]);
  const [selectedStory, setSelectedStory] = useState(null);
  const scrollContainerRef = useRef(null);

  const IMAGE_WIDTH = 175; // px
  const GAP_WIDTH = 16;    // px (tailwind's space-x-4 is 16px)
  const VISIBLE_IMAGES = 6;

  const visibleWindowWidth = VISIBLE_IMAGES * IMAGE_WIDTH + (VISIBLE_IMAGES - 1) * GAP_WIDTH;

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

  function scrollByAmount(direction) {
    const scrollAmount = visibleWindowWidth;
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  }

  return (
    <>
      <div className="relative w-full py-4 flex justify-center">

        <div
          className="relative overflow-hidden"
          style={{ width: `${visibleWindowWidth}px` }}
        >
          {/* Left button */}
          <button
            onClick={() => scrollByAmount('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 px-3 text-xl font-bold text-gray-600 hover:text-black bg-transparent! h-full flex items-center"
          >
            ‹
          </button>

          {/* The actual scrolling container */}
          <div
            ref={scrollContainerRef}
            className={`flex space-x-4 overflow-x-scroll no-scrollbar`}
          >
            {stories.map((story, idx) => (
              <div // <--- CHANGED TO A DIV HERE
                key={idx}
                className="flex-none" // <--- Use flex-none for exact sizing (flex-grow: 0, flex-shrink: 0, basis: auto)
                style={{ width: `${IMAGE_WIDTH}px`, height: `${IMAGE_WIDTH}px` }}
              >
                <button // <--- WRAPPED IMAGE IN A BUTTON FOR CLICKABILITY
                  onClick={() => setSelectedStory(story)}
                  className="focus:outline-none unstyled-button hover:bg-white! hover:opacity-90 w-full h-full" // Button fills its parent div
                >
                  <Image
                    src={convertToDirectDownload(story.imageUrl)}
                    alt={`Story ${idx + 1}`}
                    width={IMAGE_WIDTH} // Still define intrinsic width/height for Next/Image
                    height={IMAGE_WIDTH}
                    className="object-cover rounded-none w-full h-full" // <--- IMPORTANT: Ensure Image fills the button/div
                  />
                </button>
              </div>
            ))}
          </div>

          {/* Right button */}
          <button
            onClick={() => scrollByAmount('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 px-3 text-xl font-bold text-gray-600 hover:text-black bg-transparent! h-full flex items-center"
          >
            ›
          </button>
        </div>
      </div>

      {/* Modal viewer */}
      {selectedStory && (
        <div className="fixed inset-0 bg-slate-950/60 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-white max-w-lg p-6 relative">
            <button
              onClick={() => setSelectedStory(null)}
              className="absolute top-2 right-2 text-black-500 bg-transparent! hover:text-black text-4xl!"
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