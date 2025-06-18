'use client';
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-slate-600 px-6 py-4 shadow-md">
      <ul className="no-bullets flex gap-4">
        <li><Link href="/" className="!text-white">Home</Link></li>
        <li><Link href="/about" className="!text-white">About</Link></li>
        <li><Link href="#contact" className="!text-white">Contact</Link></li>
      </ul>
    </nav>
  );
}
