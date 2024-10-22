'use client';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation'; // For redirecting

export default function ProtectedPage() {
  const [userData, setUserData] = useState(null); // Store user data here
  const [error, setError] = useState(null);
  const router = useRouter();

  const handleAccessProtected = async () => {
    const token = localStorage.getItem('token'); // Get JWT token from localStorage
    if (!token) {
      alert('No token found, please login first.');
      router.push('/login');
      return;
    }

    try {
      const res = await axios.get('http://localhost:5000/api/auth/protected', {
        headers: { Authorization: `Bearer ${token}` }, // Attach token to Authorization header
      });
      setUserData(res.data.user); // Save user data
    } catch (err) {
      setError('Error accessing protected route');
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('token'); // Remove token from localStorage
    router.push('/login'); // Redirect to login page
  };

  useEffect(() => {
    handleAccessProtected();
  }, []);

  return (
    <main className="protected-page">
      <div className="protected-container">
        <h1>Protected Content</h1>
        {userData ? (
          <div className="user-info">
            <h2>Welcome, {userData.name}</h2>
            <p>Email: {userData.email}</p>
            <button className="logout-button" onClick={handleLogout}>Logout</button>
          </div>
        ) : (
          <p>{error || 'Loading user details...'}</p>
        )}
      </div>
    </main>
  );
}
