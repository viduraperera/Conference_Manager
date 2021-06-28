import mongoose from 'mongoose';

const ResearchSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  keywords: [
    {
      type: String,
      required: false,
    },
  ],
  description: {
    type: String,
    required: true,
  },
  path: {
    type: String,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  approved_by: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  status: {
    type: Boolean,
    required: true,
    default: false,
  },
  note: {
    type: String,
    required: false,
  },
});

const Workshop = mongoose.model('Research', ResearchSchema);

export default Workshop;
