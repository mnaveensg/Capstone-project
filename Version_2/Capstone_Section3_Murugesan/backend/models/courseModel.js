const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema(
  {
    title:       { type: String, required: true },
    description: { type: String },
    school:      { type: mongoose.Schema.Types.ObjectId, ref: 'School' },
  },
  { collection: 'courses' }
);

module.exports = mongoose.model('Course', courseSchema);
