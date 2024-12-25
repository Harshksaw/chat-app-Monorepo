// app/messages/[platform]/page.tsx 
import { notFound } from 'next/navigation';
import platform from '../../../../node_modules/axios/lib/helpers/cookies';

interface PageProps {
  params: {
    platform: string; 
  };
}

export default function MessagePage({ params }: PageProps) {
  const {  message: platform } = params;
  console.log("🚀 ~ MessagePage ~ platform:", platform)


  const platformUsers = {
    twitter: [
      { id: 1, name: 'Alice', username: '@alice123' },
      { id: 2, name: 'Bob', username: '@bob456' },
    ],
    linkedin: [
      { id: 3, name: 'Charlie', title: 'Software Engineer' },
      { id: 4, name: 'David', title: 'Data Scientist' },
    ],
    facebook: [
      { id: 5, name: 'Eve', profilePicture: '/images/eve.jpg' },
      { id: 6, name: 'Frank', profilePicture: '/images/frank.jpg' },
    ],
    instagram: [
      { id: 7, name: 'Grace', username: '@grace789' },
      { id: 8, name: 'Henry', username: '@henry000' },
    ],
  };

  // if (!platform || !platformUsers[platform]) {
  //   notFound();
  // }

  const users = platformUsers[platform];

  return (
    <div>
      <h1>{platform} Users</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {/* Render user information based on the platform */}
            {platform === 'twitter' && (
              <div>
                <p>{user.name} ({user.username})</p>
              </div>
            )}
            {platform === 'linkedin' && (
              <div>
                <p>{user.name} - {user.title}</p>
              </div>
            )}
            {platform === 'facebook' && (
              <div>
                {/* <img src={user.profilePicture} alt={user.name} /> */}
                <p>{user.name}</p>
              </div>
            )}
            {platform === 'instagram' && (
              <div>
                <p>{user.name} ({user.username})</p>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}