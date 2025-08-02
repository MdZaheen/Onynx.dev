

import mongoose, { Schema, Document } from 'mongoose';

// TypeScript interface for a project
export interface Project extends Document {
  title: string;
  description: string;
  tags?: string[];
  projectLink: string;
}

// Mongoose schema for projects
const ProjectSchema: Schema<Project> = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    unique: true,
  },
  description: {
    type: String,
    required: true,
    default:'Project Description',
  },
  tags: {
    type: [String],
    default: [],
  },
  projectLink: {
    type: String,
    required: true,
  }
});

// Export model with Next.js hot-reload protection
const ProjectModel =
  mongoose.models.Project || mongoose.model<Project>('Project', ProjectSchema);

export default ProjectModel;

