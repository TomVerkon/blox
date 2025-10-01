import { neon } from '@neondatabase/serverless';
import { loadEnvConfig } from '@next/env';

// Define the shape of your data for type safety
interface Category {
  name: string;
}

interface Blox {
  page_title: string;
  category_id: number;
  content: string;
}

async function seed() {
  const projectDir = process.cwd();
  loadEnvConfig(projectDir);

  const connectionString = process.env.DATABASE_URL;

  if (!connectionString) {
    throw new Error('DATABASE_URL environment variable is not set.');
  }
  const sql = neon(connectionString);

  try {
    console.log('Seeding database...');
    //const client = await pool.connect();
    console.log('Deleting tables.');
    await sql.query('DROP TABLE IF EXISTS blox CASCADE;');
    await sql.query('DROP TABLE IF EXISTS category CASCADE;');
    console.log('Deleted any existing tables.');

    // 1: Create category table
    console.log('Creating category table...');
    await sql.query(`
      CREATE TABLE IF NOT EXISTS category (
        id SERIAL PRIMARY KEY NOT NULL,
        name VARCHAR(255) UNIQUE NOT NULL,
        createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        );
    `);
    console.log('category table created.');

    // 2: Create a table
    console.log('Creating blox table...');
    await sql.query(`
      CREATE TABLE IF NOT EXISTS blox (
        id SERIAL PRIMARY KEY,
        category_id integer REFERENCES category (id),
        page_title VARCHAR(255) NOT NULL,
        content TEXT NOT NULL,
        createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        );
    `);
    console.log('blox table created.');

    // Example 2: Insert seed data
    console.log('Inserting seed data...');

    const seedCategories: Category[] = [
      { name: 'NextJS' },
      { name: 'Git' },
      { name: 'TypeScript' },
    ];

    for (const category of seedCategories) {
      let currentCat = await sql.query(
        'INSERT INTO category (name) VALUES ($1)',
        [category.name]
      );
      console.log(`Inserted category: ${currentCat}`);
    }

    const seedBlox: Blox[] = [
      {
        category_id: 1,
        page_title: 'Getting Started',
        content: 'This is a getting started guide for NextJS.',
      },
      {
        category_id: 1,
        page_title: 'Routing',
        content: 'This is a guide on routing in NextJS.',
      },
      {
        category_id: 3,
        page_title: 'Git Basics',
        content: 'This is a guide on Git basics.',
      },
      {
        category_id: 2,
        page_title: 'Type or Interface',
        content: 'when to use....',
      },
    ];

    for (const blox of seedBlox) {
      let currentBlox = await sql.query(
        'INSERT INTO blox (category_id, page_title, content) VALUES ($1, $2, $3 )',
        [blox.category_id, blox.page_title, blox.content]
      );
      console.log(`Inserted category: ${currentBlox}`);
    }

    console.log('Seed data inserted.');

    console.log('Seeding completed successfully!');
  } catch (err) {
    console.error('Error during seeding:', err);
    process.exit(1);
  } finally {
  }
}

seed();
