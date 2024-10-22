'use client';
import { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation'; // For redirecting after login

export default function Login() {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [errors, setErrors] = useState({}); // Form validation errors
  const router = useRouter(); // Next.js router for programmatic navigation

  const validateForm = () => {
    const errors = {};
    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Invalid email format';
    }
    if (formData.password === '') {
      errors.password = 'Password is required';
    }
    return errors;
  };

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors); // Show validation errors
      return;
    }

    try {
      const res = await axios.post('http://localhost:5000/api/auth/login', formData);
      localStorage.setItem('token', res.data.token); // Store JWT token
      router.push('/protected'); // Redirect to protected page
    } catch (err) {
      alert('Login failed');
    }
  };

  return (
    <main className="login-page">
      <form onSubmit={handleSubmit} className="login-form">
        <h1 className="form-title">Login</h1>
        <div className="form-group">
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            onChange={handleChange}
            required
            className="form-input"
          />
          {errors.email && <p className="error-message">{errors.email}</p>} {/* Error Message */}
        </div>
        <div className="form-group">
          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            onChange={handleChange}
            required
            className="form-input"
          />
          {errors.password && <p className="error-message">{errors.password}</p>} {/* Error Message */}
        </div>
        <button type="submit" className="form-button">Login</button>
      </form>
    </main>
  );
}
