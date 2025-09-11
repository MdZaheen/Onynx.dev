import mongoose, { Schema, Document } from 'mongoose';

// TypeScript interface for a project
export interface IProject {
  title: string;
  description: string;
  tags?: string[];
  projectLink: string;
  image?: string;
}

export interface Project extends IProject, Document {
  _id: string;
  createdAt?: Date;
  updatedAt?: Date;
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
  },
  image: {
    type: String,
    default: '',
  }
});

// Export model with Next.js hot-reload protection
const ProjectModel =
  mongoose.models.Project || mongoose.model<Project>('Project', ProjectSchema);

export default ProjectModel;

