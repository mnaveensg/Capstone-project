import React from 'react';
import { Login, CourseRecommender } from './components/LMSComponents';
import PasswordStrength from './components/PasswordStrength';
import CourseToggle from './components/CourseToggle';

function App() {
  return (
    <div>
      <h1>AI-Powered LMS: React Components</h1>

      {/* Starter components: Login form and Course Recommender */}
      <Login />
      <CourseRecommender />

      {/* Task 1: Password Strength Checker */}
      <PasswordStrength />

      {/* Task 2: Course Description Toggle */}
      <CourseToggle />
    </div>
  );
}

export default App;
