'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function Logout() {
  const router = useRouter();

  useEffect(() => {
    // Clear the token from localStorage
    localStorage.removeItem('token');

    // Optionally show an alert or a message
    alert('You have successfully logged out.');

    // Redirect to the login page after logout
    router.push('/login');
  }, []);

  return (
    <main>
      <h1>Logging out...</h1>
    </main>
  );
}
