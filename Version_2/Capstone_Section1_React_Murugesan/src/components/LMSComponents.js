import React, { useState } from 'react';

// ─── Login Component ──────────────────────────────────────────────────────────
function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();

    if (email === '' || password === '') {
      setMessage('Please fill in all fields.');
    } else if (!email.includes('@')) {
      setMessage('Invalid email format.');
    } else {
      setMessage('Login successful!');
      // API call or redirection can be added here
    }
  };

  return (
    <div className="section-card">
      <h2>Login to LMS</h2>
      <form onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{ marginBottom: '10px', display: 'block', width: '100%', padding: '8px' }}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{ marginBottom: '10px', display: 'block', width: '100%', padding: '8px' }}
        />
        <button type="submit" style={{ padding: '8px 16px' }}>Login</button>
      </form>
      {message && <p style={{ marginTop: '10px', color: message === 'Login successful!' ? 'green' : 'red' }}>{message}</p>}
    </div>
  );
}

// ─── Course Recommender Component ────────────────────────────────────────────
function CourseRecommender() {
  const [interest, setInterest] = useState('');
  const [recommended, setRecommended] = useState('');

  const recommendCourse = () => {
    if (interest.toLowerCase().includes('web')) {
      setRecommended('We recommend: React.js for Beginners');
    } else if (interest.toLowerCase().includes('data')) {
      setRecommended('We recommend: Intro to Data Science with Python');
    } else if (interest.toLowerCase().includes('ai')) {
      setRecommended('We recommend: Machine Learning with Scikit-Learn');
    } else {
      setRecommended('Please enter a valid interest (e.g., AI, Web, Data)');
    }
  };

  return (
    <div className="section-card">
      <h2>AI Course Recommender</h2>
      <input
        type="text"
        placeholder="Enter your interest (e.g., AI, Web, Data)"
        value={interest}
        onChange={(e) => setInterest(e.target.value)}
        style={{ marginBottom: '10px', display: 'block', width: '100%', padding: '8px' }}
      />
      <button onClick={recommendCourse} style={{ padding: '8px 16px' }}>Get Recommendation</button>
      {recommended && <p style={{ marginTop: '10px', color: '#1a73e8' }}>{recommended}</p>}
    </div>
  );
}

export { Login, CourseRecommender };
