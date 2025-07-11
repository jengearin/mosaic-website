'use client';
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="relative navbar-fade-edges w-full bg-slate-100 px-6 py-4 border-y-2 border-slate-600 max-w-3xl mx-auto">
      <ul className="flex justify-center no-bullets gap-24 w-full">
        <li><Link href="/" className="!text-black text-lg">Home</Link></li>
        <li><Link href="/about" className="!text-black text-lg">About</Link></li>
        <li><Link href="#contact" className="!text-black text-lg">Contact</Link></li>
      </ul>
    </nav>
  );
}