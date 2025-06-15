const mongoose = require('mongoose');
const History = require('./models/history');
require('./config/db');

async function migrate() {
  // Add id field to all existing documents
  await History.updateMany(
    { id: { $exists: false } },
    { $set: { id: '$_id' } }
  );
  
  console.log('Migration complete');
  process.exit(0);
}

migrate().catch(console.error);