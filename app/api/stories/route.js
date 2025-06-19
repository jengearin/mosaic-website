import { NextResponse } from 'next/server';

// Temporary in-memory "database"
const storiesDB = [
  {
    id: 1,
    location: 'location1',
    imageUrl: '/images/sample1.jpg',
    text: 'Sample story for location1',
  },
  {
    id: 2,
    location: 'location2',
    imageUrl: '/images/sample2.jpg',
    text: 'Sample story for location2',
  },
];

// GET handler
export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const location = searchParams.get('location');

  if (!location) {
    return NextResponse.json({ error: 'Missing location parameter' }, { status: 400 });
  }

  const filteredStories = storiesDB.filter((story) => story.location === location);

  return NextResponse.json(filteredStories);
}
