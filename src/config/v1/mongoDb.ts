import mongoose from 'mongoose';
import { IDatabase } from 'interfaces/v1/database';
import dotenv from 'dotenv';

dotenv.config();

class MongoDB implements IDatabase {
  async connect(): Promise<void> {
    try {
      await mongoose.connect(process.env.MONGO_URI as string);
      console.log('MongoDB connected successfully');
    } catch (error) {
      console.error('MongoDB connection error:', error);
      process.exit(1);
    }
  }

  async disconnect(): Promise<void> {
    await mongoose.connection.close();
    console.log('MongoDB disconnected');
  }
}

export default MongoDB;
