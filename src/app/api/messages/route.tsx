// app/messages/route.tsx
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  // Dummy JSON data
  const messages = [
    {
      id: 1,
      sender: { id: 123, name: 'James' },
      recipient: { id: 456, name: 'Krishangi' },
      timestamp: '2024-12-24T10:03:00Z',
      content: 'Hi Krishangi! Thanks for reaching out!',
      platform: 'Instagram',
    },
    {
      id: 2,
      sender: { id: 456, name: 'Krishangi' },
      recipient: { id: 123, name: 'James' },
      timestamp: '2024-12-24T10:15:00Z',
      content: 'Thank you so much! My audience is mostly...',
      platform: 'Facebook',
    },
    // ... more messages
  ];

  // Simulate API call delay (optional)
  // await new Promise((resolve) => setTimeout(resolve, 1000));

  return NextResponse.json(messages);
}