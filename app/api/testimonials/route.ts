import { NextResponse } from 'next/server';
import { connectToDatabase } from '../../lib/Mongodb';
import Testimonial from '../../lib/Models/Testimonial';

// GET: Fetch all testimonials
export async function GET() {
  try {
    await connectToDatabase();
    const testimonials = await Testimonial.find().sort({ createdAt: -1 });
    return NextResponse.json({ success: true, data: testimonials });
  } catch {
    return NextResponse.json({ success: false, message: 'Failed to fetch testimonials' }, { status: 500 });
  }
}

// POST: Create a new testimonial
export async function POST(req: Request) {
  try {
    const { name, message, rating } = await req.json();

    if (!name || !message || !rating) {
      return NextResponse.json({ success: false, message: 'Missing fields' }, { status: 400 });
    }

    await connectToDatabase();

    const testimonial = await Testimonial.create({ name, message, rating });
    return NextResponse.json({ success: true, data: testimonial }, { status: 201 });
  } catch {
    return NextResponse.json({ success: false, message: 'Failed to create testimonial' }, { status: 500 });
  }
}

// DELETE: Delete a testimonial by ID
// http://localhost:3000/api/testimonials?id=60b8f7f8f4d55c63b8b8f5e5
export async function DELETE(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const testimonialId = searchParams.get('id');

    if (!testimonialId) {
      return NextResponse.json({ success: false, message: 'Testimonial ID is required' }, { status: 400 });
    }

    await connectToDatabase();

    const deletedTestimonial = await Testimonial.findByIdAndDelete(testimonialId);

    if (!deletedTestimonial) {
      return NextResponse.json({ success: false, message: 'Testimonial not found' }, { status: 404 });
    }

    return NextResponse.json({ success: true, message: 'Testimonial deleted successfully' });
  } catch {
    return NextResponse.json({ success: false, message: 'Failed to delete testimonial' }, { status: 500 });
  }
}
