'use client';

import { useState } from 'react';

export default function TestimonialForm() {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [rating, setRating] = useState(0);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const res = await fetch('/api/testimonials', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, message, rating }),
    });

    if (res.ok) {
      setSubmitted(true);
      setName('');
      setMessage('');
      setRating(0);
    }

    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-xl mx-auto bg-white p-6 rounded-2xl shadow-md mt-10 font-Urbanist">
      <h3 className="text-2xl font-semibold mb-4">Leave a Testimonial</h3>

      {submitted && (
        <div className="mb-4 text-spickyPink font-medium">Thanks for your feedback!</div>
      )}

      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">Your Full Name</label>
        <input
          type="text"
          value={name}
          required
          onChange={(e) => setName(e.target.value)}
          className="w-full p-2 border rounded-md"
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">Your Testimonial</label>
        <textarea
          value={message}
          required
          onChange={(e) => setMessage(e.target.value)}
          className="w-full p-2 border rounded-md"
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">Rating</label>
        <div className="flex space-x-1">
          {[1, 2, 3, 4, 5].map((star) => (
            <span
              key={star}
              className={`cursor-pointer text-2xl ${
                star <= rating ? 'text-spickyPink' : 'text-gray-300'
              }`}
              onClick={() => setRating(star)}
            >
              ★
            </span>
          ))}
        </div>
      </div>

      <button
        type="submit"
        disabled={loading}
        className="bg-spickyPink text-white px-6 py-2 rounded-md hover:bg-black transition"
      >
        {loading ? 'Submitting...' : 'Submit'}
      </button>
    </form>
  );
}
