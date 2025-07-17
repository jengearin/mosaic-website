'use client';

import '../styles/globals.css';
import Navbar from '../components/Navbar';
import PhotoGallery from '@/components/PhotoGallery';
import { useState } from 'react';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Mosaic</title>
        {/* You can add meta tags, fonts, and favicon here */}
      </head>
      <body className="bg-white text-gray-900 font-sans">
        {/* Photo Gallery at the top */}
        <PhotoGallery location="Home" />

        {/* Header Block */}
        <header className="text-center pt-10 pb-4">
          <div className="flex flex-col items-center space-y-2">
            <h1 className="text-massive text-9xl sm:text-7xl lg:text-9xl font-serif font-semibold text-gray-900 leading-tight tracking-normal">
              Mosaic
            </h1>
            <p className="mb-8 text-xl sm:text-2xl text-gray-500 italic">
              Every place holds a story.
            </p>
          </div>
        </header>

        <Navbar />

        <p className="text-xl sm:text-2xl text-white italic">’</p>

        <main className="w-full">
          {children}
          <EmailConsentForm />
        </main>

        <footer id="contact" className="text-center mt-10 p-4 bg-white">
          <p className="text-sm text-gray-600">
            Contact:{' '}
            <a
              href="mailto:mosaic.jgearin@gmail.com"
              className="text-slate-600 hover:underline"
            >
              mosaic.jgearin@gmail.com
            </a>
          </p>
        </footer>
      </body>
    </html>
  );
}

function EmailConsentForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    consent: false,
  });

  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.consent) {
      setStatus('You must consent to receive emails.');
      return;
    }

    const url = 'https://script.google.com/macros/s/AKfycbyqANGCtWyFiPQrhTsDraeNiA-xHC1okgOyV26iv14FSwf7WqekypsVAa43v1FvlWvmOA/exec';

    const params = new URLSearchParams({
      name: formData.name,
      email: formData.email,
      consent: formData.consent.toString(),
    });

    try {
      const res = await fetch(url, {
        method: 'POST',
        body: params,
      });

      const data = await res.json();
      setStatus(data.message);
      setFormData({ name: '', email: '', consent: false });
    } catch (err) {
      setStatus('Submission failed.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-sm mx-auto p-4 border border-gray-200! rounded shadow mt-13">
      <h2 className="text-2xl! font-bold mb-3">Join Our Mailing List</h2>
      
      <input
        name="name"
        type="text"
        placeholder="Your Name"
        value={formData.name}
        onChange={handleChange}
        className="w-full border border-gray-400! mb-2 p-2 rounded bg-gray-50!"
        required
      />
      
      <input
        name="email"
        type="email"
        placeholder="Your Email"
        value={formData.email}
        onChange={handleChange}
        className="w-full border border-gray-400! mb-2 p-2 rounded bg-gray-50!"
        required
      />
      
      <label className="flex items-center text-sm mb-2">
        <input
          name="consent"
          type="checkbox"
          checked={formData.consent}
          onChange={handleChange}
          className="mr-2"
        />
        I consent to receive emails.
      </label>

      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
        Submit
      </button>

      {status && <p className="mt-2 text-sm text-gray-600">{status}</p>}
    </form>
  );
}
