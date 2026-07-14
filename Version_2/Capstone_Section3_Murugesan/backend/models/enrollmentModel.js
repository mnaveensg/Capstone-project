const mongoose = require('mongoose');

const enrollmentSchema = new mongoose.Schema(
  {
    studentName:     { type: String, required: true },
    studentEmail:    { type: String, required: true },
    course:          { type: mongoose.Schema.Types.ObjectId, ref: 'Course', required: true },
    enrollmentDate:  { type: Date, default: Date.now },
  },
  { collection: 'enrollments' }
);

module.exports = mongoose.model('Enrollment', enrollmentSchema);
