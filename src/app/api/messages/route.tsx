// app/messages/route.tsx
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  // Dummy JSON data
  const messages = 
  {
    twitter: [
      {
        id: 1,
        name: 'Alice',
        username: '@alice123',
        sender: { id: 101, name: 'Alice' },
        recipient: { id: 201, name: 'Bob' },
        timestamp: '2024-12-24T10:03:00Z',
        content: 'Hi Bob! Thanks for reaching out!',
      },
      {
        id: 2,
        name: 'Bob',
        username: '@bob456',
        sender: { id: 201, name: 'Bob' },
        recipient: { id: 101, name: 'Alice' },
        timestamp: '2024-12-24T11:03:00Z',
        content: 'Hi Alice! How can I help you?',
      },
    ],
    linkedin: [
      {
        id: 3,
        name: 'Charlie',
        title: 'Software Engineer',
        sender: { id: 301, name: 'Charlie' },
        recipient: { id: 401, name: 'David' },
        timestamp: '2024-12-24T12:03:00Z',
        content: 'Hi David! I have a question about our project.',
      },
      {
        id: 4,
        name: 'David',
        title: 'Data Scientist',
        sender: { id: 401, name: 'David' },
        recipient: { id: 301, name: 'Charlie' },
        timestamp: '2024-12-24T13:03:00Z',
        content: 'Hi Charlie! Sure, what do you need help with?',
      },
    ],
    facebook: [
      {
        id: 5,
        name: 'Eve',
        profilePicture: '/images/eve.jpg',
        sender: { id: 501, name: 'Eve' },
        recipient: { id: 601, name: 'Frank' },
        timestamp: '2024-12-24T14:03:00Z',
        content: 'Hi Frank! Long time no see!',
      },
      {
        id: 6,
        name: 'Frank',
        profilePicture: '/images/frank.jpg',
        sender: { id: 601, name: 'Frank' },
        recipient: { id: 501, name: 'Eve' },
        timestamp: '2024-12-24T15:03:00Z',
        content: 'Hi Eve! Yes, it has been a while!',
      },
    ],
    instagram: [
      {
        id: 7,
        name: 'Grace',
        username: '@grace789',
        sender: { id: 701, name: 'Grace' },
        recipient: { id: 801, name: 'Henry' },
        timestamp: '2024-12-24T16:03:00Z',
        content: 'Hi Henry! Check out my new post!',
      },
      {
        id: 8,
        name: 'Henry',
        username: '@henry000',
        sender: { id: 801, name: 'Henry' },
        recipient: { id: 701, name: 'Grace' },
        timestamp: '2024-12-24T17:03:00Z',
        content: 'Hi Grace! I just saw it, looks great!',
      },
    ],
  }

  // Simulate API call delay (optional)
  // await new Promise((resolve) => setTimeout(resolve, 1000));

  return NextResponse.json(messages);
}

