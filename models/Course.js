const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
  courseTitle: { type: String, required: true, unique: true },
  courseContent: { type: String, required: true },
  courseDuration: { type: String, required: true },
  ccreationDate: { type: Date, default: Date.now },
  level: {
    type: mongoose.Types.ObjectId,
    ref: 'Level',
  },
});

module.exports = mongoose.model('Course', courseSchema);
