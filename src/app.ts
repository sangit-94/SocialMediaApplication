
import express from 'express';
import dotenv from 'dotenv';
import DatabaseFactory from './config/databaseFactory';
import userRoutes from './routes/routes';

dotenv.config();

// Use the factory to create the database connection
const dbType = process.env.DB_TYPE || 'mongodb';
const database = DatabaseFactory.createDatabase(dbType);

database.connect().then(() => {
  console.log(`${dbType} database connected`);
});

const app = express();

app.use(express.json());

app.use('/api/users', userRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
