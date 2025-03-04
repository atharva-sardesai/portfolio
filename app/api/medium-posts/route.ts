import { NextResponse } from 'next/server'

export async function GET() {
  try {
    const apiUrl = process.env.NEXT_PUBLIC_API_GATEWAY_URL;
    if (!apiUrl) {
      throw new Error('API Gateway URL not configured');
    }

    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error(`Failed to fetch posts: ${response.status}`);
    }

    const data = await response.json();
    return NextResponse.json(data.posts || []);
  } catch (error) {
    console.error('Error fetching posts:', error);
    return NextResponse.json([], { status: 500 });
  }
} 