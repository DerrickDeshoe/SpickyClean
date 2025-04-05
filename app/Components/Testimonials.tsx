'use client';

import { useEffect, useState } from 'react';

type Testimonial = {
  _id: string;
  name: string;
  message: string;
  rating: number;
  createdAt: string;
};

export default function Testimonials() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);  // Default to empty array
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTestimonials = async () => {
      const res = await fetch('/api/testimonials');
      
      // Check if the response is ok
      if (res.ok) {
        const data = await res.json();
        console.log('Fetched testimonials data:', data); // Log to inspect data

        // Safely access the `data` field
        if (data?.data) {
          setTestimonials(data.data);
        } else {
          console.error('No testimonials data available');
        }
      } else {
        console.error('Failed to fetch testimonials');
      }
      
      setLoading(false);
    };

    fetchTestimonials();
  }, []);

  return (
    <div className="max-w-4xl mx-auto mt-16 px-4 font-Urbanist">

      {loading ? (
        <p className="text-center">Loading testimonials...</p>
      ) : testimonials.length === 0 ? (
        <p className="text-center text-gray-500">No testimonials yet.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {testimonials.map((testimonial) => (
            <div key={testimonial._id} className="bg-white shadow-md p-6 rounded-xl border">
              <div className="text-spickyPink text-xl mb-2">
                {'★'.repeat(testimonial.rating)}
                {'☆'.repeat(5 - testimonial.rating)}
              </div>
              <p className="text-gray-700 mb-4">
                {/* Escape quotes around the message */}
                {testimonial.message.replace(/"/g, '&quot;')}
              </p>
              <p className="font-semibold text-sm text-right text-gray-600">- {testimonial.name}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
