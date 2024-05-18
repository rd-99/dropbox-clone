const conn = require("./connection");

 async function createFileSchema() {
    const client = await conn.connect();
    try {
      await client.query(`
      CREATE TABLE IF NOT EXISTS file_metadata (
        id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
        name VARCHAR(255) NOT NULL,
        type VARCHAR(50) ,
        size VARCHAR(255) ,
        uploadDate TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );
      `);
      console.log('Tables created successfully');
    } catch (error) {
      console.error('Error creating tables:', error);
    } finally {
      client.release();
    }
  }

  module.exports = createFileSchema;