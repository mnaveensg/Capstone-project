const express    = require('express');
const mongoose   = require('mongoose');
const cors       = require('cors');

const schoolRoutes     = require('./routes/schoolRoutes');
const courseRoutes     = require('./routes/courseRoutes');
const enrollmentRoutes = require('./routes/enrollmentRoutes');

const app  = express();
const PORT = process.env.PORT || 5000;
const DEBUG = process.env.DEBUG_LOGS === '1';

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
const MONGO_URI = process.env.MONGO_URI || 'mongodb+srv://mnaveensg2:Mn97758529@cluster0.97bypce.mongodb.net/schoolsystem?retryWrites=true&w=majority&appName=Cluster0';
mongoose
  .connect(MONGO_URI, { dbName: 'schoolsystem' })
  .then(() => {
    console.log(`MongoDB connected to database: ${mongoose.connection.name}`);
    if (DEBUG) {
      mongoose.connection.db
        .listCollections({}, { nameOnly: true })
        .toArray()
        .then((collections) => {
          const names = collections.map((c) => c.name).join(', ') || '(none)';
          console.log(`[debug] Collections in ${mongoose.connection.name}: ${names}`);
        })
        .catch((err) => {
          console.error('[debug] Failed to list collections:', err.message);
        });
    }
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
      if (DEBUG) {
        console.log('[debug] Debug logs enabled (DEBUG_LOGS=1)');
      }
    });
  })
  .catch((err) => {
    console.error('MongoDB connection error:', err);
    process.exit(1);
  });
