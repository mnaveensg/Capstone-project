const express    = require('express');
const mongoose   = require('mongoose');
const cors       = require('cors');

const schoolRoutes     = require('./routes/schoolRoutes');
const courseRoutes     = require('./routes/courseRoutes');
const enrollmentRoutes = require('./routes/enrollmentRoutes');

const app  = express();
const PORT = 5000;

// ── Middleware ────────────────────────────────────────────────
app.use(cors());
app.use(express.json());

// ── Routes ────────────────────────────────────────────────────
app.use('/api/schools',     schoolRoutes);
app.use('/api/courses',     courseRoutes);
app.use('/api/enrollments', enrollmentRoutes);

// Health check
app.get('/', (req, res) => {
  res.send('LMS MongoDB backend is running.');
});

// ── Connect to MongoDB and start server ───────────────────────
// For local MongoDB: mongodb://127.0.0.1:27017/schoolsystem
// For MongoDB Atlas: replace the URI with your Atlas connection string
const MONGO_URI = 'mongodb+srv://mnaveensg2:Mn97758529@cluster0.97bypce.mongodb.net/?appName=Cluster0';
// 'mongodb+srv://mnaveensg2_db_user:Mn97758529@@cluster0.97bypce.mongodb.net/'
mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log('MongoDB connected');
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error('MongoDB connection error:', err);
    process.exit(1);
  });
