import MongoDB from './mongoDb';
import { IDatabase } from 'interfaces/v1/database';

class DatabaseFactory {
  static createDatabase(dbType: string): IDatabase {
    switch (dbType.toLowerCase()) {
      case 'mongodb':
        return new MongoDB();
      default:
        throw new Error(`Unsupported database type: ${dbType}`);
    }
  }
}

export default DatabaseFactory;
