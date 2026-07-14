// Import the express module
const express = require('express');

// Create an Express application
const app = express();

// Define the port number to run the server on
const PORT = 5000;

// ── Middleware ────────────────────────────────────────────────────────────────

// Parse JSON bodies in incoming requests
app.use(express.json());

// ── Routes ────────────────────────────────────────────────────────────────────

// 1. Basic GET route for homepage
app.get('/', (req, res) => {
  res.send('Welcome to the LMS backend!');
});

// 2. GET /courses — Return a sample list of available courses
app.get('/courses', (req, res) => {
  const courses = [
    { id: 1, name: 'React for Beginners' },
    { id: 2, name: 'Intro to Data Science' },
    { id: 3, name: 'AI Fundamentals' },
  ];
  res.json(courses);
});

// 3. POST /enroll — Enroll a user in a course
//    Required body fields: userId, courseId
//    Returns 400 if either field is missing.
app.post('/enroll', (req, res) => {
  const { userId, courseId } = req.body;

  // Validate that both fields are present
  if (!userId || !courseId) {
    return res.status(400).json({ error: 'Missing userId or courseId in request.' });
  }

  res.json({ message: `User ${userId} successfully enrolled in course ${courseId}.` });
});

// ── Start server ──────────────────────────────────────────────────────────────

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
