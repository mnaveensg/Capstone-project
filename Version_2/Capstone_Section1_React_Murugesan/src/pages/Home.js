import React from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';

function Home() {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <div>
      <div className="section-card">
        <h1>Welcome to AI-Powered LMS</h1>
        <p>Your intelligent learning management system — explore courses, manage your account, and get AI assistance.</p>
        <nav style={{ marginTop: '20px', display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
          <Link to="/login" style={{ textDecoration: 'none' }}>
            <button
              style={{
                padding: '8px 16px',
                background: isActive('/login') ? '#1a73e8' : '#fff',
                color: isActive('/login') ? '#fff' : '#1a73e8',
                border: '1px solid #1a73e8',
                borderRadius: '6px',
                cursor: 'pointer',
              }}
            >
              Login
            </button>
          </Link>
          <Link to="/courses" style={{ textDecoration: 'none' }}>
            <button
              style={{
                padding: '8px 16px',
                background: isActive('/courses') ? '#1a73e8' : '#fff',
                color: isActive('/courses') ? '#fff' : '#1a73e8',
                border: '1px solid #1a73e8',
                borderRadius: '6px',
                cursor: 'pointer',
              }}
            >
              Courses
            </button>
          </Link>
          <Link to="/chatbot" style={{ textDecoration: 'none' }}>
            <button
              style={{
                padding: '8px 16px',
                background: isActive('/chatbot') ? '#1a73e8' : '#fff',
                color: isActive('/chatbot') ? '#fff' : '#1a73e8',
                border: '1px solid #1a73e8',
                borderRadius: '6px',
                cursor: 'pointer',
              }}
            >
              AI Chatbot
            </button>
          </Link>
        </nav>
      </div>

      {location.pathname !== '/' && (
        <div className="section-card">
          <Outlet />
        </div>
      )}
    </div>
  );
}

export default Home;
