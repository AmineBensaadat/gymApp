// pages/index.js
import { useEffect, useState } from 'react';

export default function Home() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Fetch data from the API route
    fetch('/api/users')
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <div>
      <h1>Users</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name} - {user.email}</li>
        ))}
      </ul>
    </div>
  );
}
