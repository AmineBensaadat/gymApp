// src/pages/index.js

import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    const user = localStorage.getItem('user');
    if (!user) {
      router.push('/login'); // Redirect to login if no user is found
    } else {
      router.push('/dashboard'); // Redirect to dashboard if user is logged in
    }
  }, [router]);

  return (
    <div>
      <h1>Loading...</h1> {/* A simple loading message */}
    </div>
  );
}
