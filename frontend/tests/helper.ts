import { MongoClient } from 'mongodb';
import technologies from '../../database/seed/technologies.json';
import users from '../../database/seed/users.json';

export async function resetDatabase() {
  const client = new MongoClient('mongodb://appuser:securepassword@localhost:27017/techradardb');
  try {
    await client.connect();
    const userCollection = client.db('techradardb').collection('users');
    const technologyCollection = client.db('techradardb').collection('technologies');
    await userCollection.deleteMany({});
    await userCollection.insertMany(users);
    await technologyCollection.deleteMany({});
    await technologyCollection.insertMany(technologies);
  } finally {
    await client.close();
  }
}
