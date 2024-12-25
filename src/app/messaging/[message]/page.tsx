// app/messages/[name]/[messageId]/page.tsx
import { notFound } from 'next/navigation';

interface PageProps {
  params: {
    name: string;
    messageId: string;
  };
}

export default function MessagePage({ params }: PageProps) {
  const {  message } = params;

  // If name or messageId is missing, show a 404 page

  return (
    <div>


        <div>
            {message}

        </div>
    </div>
  );
}