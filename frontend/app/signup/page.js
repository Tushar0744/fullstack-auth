'use client';
import { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation'; // For redirecting after signup

export default function Signup() {
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });
  const [errors, setErrors] = useState({});
  const router = useRouter(); // Next.js router for programmatic navigation

  const validateForm = () => {
    const errors = {};
    if (!formData.name.trim() || formData.name.length < 3) {
      errors.name = 'Name must be at least 3 characters long';
    }
    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Invalid email format';
    }
    if (formData.password.length < 6) {
      errors.password = 'Password must be at least 6 characters long';
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
      await axios.post('http://localhost:5000/api/auth/signup', formData);
      alert('User registered successfully, please login.');
      router.push('/login'); // Redirect to login page
    } catch (err) {
      alert('Error registering user');
    }
  };

  return (
    <main className="signup-page">
      <form onSubmit={handleSubmit} className="signup-form">
        <h1 className="form-title">Sign Up</h1>
        <div className="form-group">
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            onChange={handleChange}
            required
            className="form-input"
          />
          {errors.name && <p className="error-message">{errors.name}</p>} {/* Error Message */}
        </div>
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
        <button type="submit" className="form-button">Sign Up</button>
      </form>
    </main>
  );
}
