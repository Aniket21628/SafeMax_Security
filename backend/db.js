import { connect, Schema, model } from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const uri = process.env.DB_URL;

// Updated connection code without deprecated options
connect(uri)
  .then(() => console.log('MongoDB connected successfully'))
  .catch((err) => console.error('MongoDB connection error:', err));

const appointmentSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    trim: true,
    match: [
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      "Please enter a valid email address"
    ]
  },
  appointmentDate: {
    type: Date,
    required: true
  },
  comments: {
    type: String,
    trim: true,
    maxlength: 500
  },
  status: {
    type: String,
    enum: ["pending", "confirmed", "cancelled"],
    default: "pending"
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const querySchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    trim: true,
    match: [
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      "Please enter a valid email address"
    ]
  },
  subject: {
    type: String,
    required: true,
    trim: true
  },
  comments: {
    type: String,
    trim: true,
    maxlength: 500
  },
  status: {
    type: String,
    enum: ["new", "in-progress", "resolved"],
    default: "new"
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const adminUserSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  firstname: {
    type: String,
    required: true,
    trim: true
  },
  lastname: {
    type: String,
    required: true,
    trim: true
  },
  password: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 25
  }
});

// Export models
export const AdminUser = model('AdminUser', adminUserSchema);
export const Appointment = model('Appointment', appointmentSchema);
export const Query = model('Query', querySchema);
