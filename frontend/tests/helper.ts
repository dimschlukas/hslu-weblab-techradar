import { MongoClient } from 'mongodb';
import technologiesData from '../../database/seed/technologies.json';
import usersData from '../../database/seed/users.json';

function deepCopy(obj: any) {
  return JSON.parse(JSON.stringify(obj)); // Ensure a mutable deep copy
}

function parseDates(obj: any): any {
  if (typeof obj === 'object' && obj !== null) {
    for (const key in obj) {
      if (typeof obj[key] === 'object' && obj[key] !== null && '$date' in obj[key]) {
        obj[key] = new Date(obj[key].$date);
      } else if (typeof obj[key] === 'object') {
        obj[key] = parseDates(obj[key]);
      }
    }
  }
  return obj;
}

export async function resetDatabase() {
  const client = new MongoClient('mongodb://appuser:securepassword@localhost:27017/techradardb');
  try {
    await client.connect();
    const userCollection = client.db('techradardb').collection('users');
    const technologyCollection = client.db('techradardb').collection('technologies');

    const users = deepCopy(usersData).map(parseDates);
    const technologies = deepCopy(technologiesData).map(parseDates);

    await userCollection.deleteMany({});
    await userCollection.insertMany(users.map(parseDates));
    await technologyCollection.deleteMany({});
    await technologyCollection.insertMany(technologies.map(parseDates));
  } finally {
    await client.close();
  }
}
