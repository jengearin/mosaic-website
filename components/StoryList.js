'use client';
import Image from 'next/image';

const storiesByLocation = {
  location1: [
    { image: "/images/sample1.jpg", text: "Story for Location 1 - 1" },
    { image: "/images/sample2.jpg", text: "Story for Location 1 - 2" },
  ],
  location2: [
    { image: "/images/sample3.jpg", text: "Story for Location 2 - 1" },
    { image: "/images/sample4.jpg", text: "Story for Location 2 - 2" },
  ],
  location3: [
    { image: "/images/sample5.jpg", text: "Story for Location 3 - 1" },
    { image: "/images/sample6.jpg", text: "Story for Location 3 - 2" },
  ],
    location4: [
    { image: "/images/sample7.jpg", text: "Story for Location 4 - 1" },
    { image: "/images/sample8.jpg", text: "Story for Location 4 - 2" },
  ],
    location5: [
    { image: "/images/sample9.jpg", text: "Story for Location 5 - 1" },
    { image: "/images/sample10.jpg", text: "Story for Location 5 - 2" },
  ],
    location6: [
    { image: "/images/sample11.jpg", text: "Story for Location 6 - 1" },
    { image: "/images/sample12.jpg", text: "Story for Location 6 - 2" },
  ],
};

export default function StoryList({ location }) {
  // Use location to get relevant stories or fallback to empty array
  const stories = storiesByLocation[location] || [];

  return (
    <div className="story-list">
      <h2>Other Stories</h2>
      <div className="story-grid">
        {stories.length === 0 ? (
          <p>No stories for this location yet.</p>
        ) : (
          stories.map((story, idx) => (
            <div key={idx} className="story-card">
              <Image
                src={story.image}
                alt={`Story ${idx + 1}`}
                width={600}
                height={400}
                className="story-image"
              />
              <p>{story.text}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
