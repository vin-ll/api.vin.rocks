import mongoose from 'mongoose';

const skillSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  use: {
    type: String,
    required: true,
  },
  dotColor: {
    type: String,
    required: true,
  },
});

export default mongoose.model('skill', skillSchema);
