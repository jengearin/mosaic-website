
'use client';

export default function StoryList() {
  const dummyStories = [
    { image: "/images/sample1.jpg", text: "This bench reminds me of my childhood." },
    { image: "/images/sample2.jpg", text: "We used to picnic here every Sunday." },
  ];

  return (
    <div className="mt-8">
      <h2 className="text-lg font-bold">Other People's Stories</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        {dummyStories.map((story, idx) => (
          <div key={idx} className="border p-2 rounded">
            <img src={story.image} alt="user upload" className="w-full h-48 object-cover" />
            <p className="mt-2">{story.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
