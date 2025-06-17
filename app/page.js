import Link from 'next/link';

export default function Home() {
  return (
    <>
     
      <main className="p-8">
        <h1 className="text-3xl font-bold mb-4">Mosaic</h1>
        <p>Click a location below to share your memory:</p>
        <ul className="mt-4 space-y-2">
                <li><Link href="/locations/location1">Location 1</Link></li>
                <li><Link href="/locations/location2">Location 2</Link></li>
                <li><Link href="/locations/location3">Location 3</Link></li>
                <li><Link href="/locations/location4">Location 4</Link></li>
                <li><Link href="/locations/location5">Location 5</Link></li>
                <li><Link href="/locations/location6">Location 6</Link></li>
        </ul>
      </main>
    </>
  );
}
