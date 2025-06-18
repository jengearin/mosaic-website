'use client';
import Image from 'next/image';

export default function StoryList() {
  const dummyStories = [
    { image: "/images/sample1.jpg", text: "This bench reminds me of my childhood." },
    { image: "/images/sample2.jpg", text: "We used to picnic here every Sunday." },
  ];

  return (
    <div className="story-list">
      <h2>Other Stories</h2>
      <div className="story-grid">
        {dummyStories.map((story, idx) => (
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
        ))}
      </div>
    </div>
  );
}
