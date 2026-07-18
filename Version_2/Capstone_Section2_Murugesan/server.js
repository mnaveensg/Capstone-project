const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;
app.use(express.json());
app.get('/', (req, res) => {
  res.send('Welcome to the LMS backend!');
});
app.get('/courses', (req, res) => {
  const courses = [
    { id: 1, name: 'React for Beginners' },
    { id: 2, name: 'Intro to Data Science' },
    { id: 3, name: 'AI Fundamentals' },
  ];

  res.json(courses);
});
app.post('/enroll', (req, res) => {
  const { userId, courseId } = req.body;

  if (!userId || !courseId) {
    return res.status(400).json({ error: 'Missing userId or courseId in request.' });
  }

  return res.json({
    message: `User ${userId} successfully enrolled in course ${courseId}.`,
  });
});
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
