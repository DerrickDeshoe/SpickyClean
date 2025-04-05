import mongoose, { Connection } from 'mongoose';

// Ensure that MONGODB_URI is set in your environment variables
const MONGODB_URI = process.env.MONGODB_URI!;

if (!MONGODB_URI) {
  throw new Error('Please define the MONGODB_URI environment variable in .env.local');
}

// Declaring a custom global object type for mongoose
declare global {
  var mongoose: { conn: Connection | null; promise: Promise<Connection> | null } | undefined;
}

// Use let or const instead of var
const cached = global.mongoose || { conn: null, promise: null };

// Create the connection or return the existing one from cache
export async function connectToDatabase() {
  if (cached.conn) return cached.conn;

  if (!cached.promise) {
    // mongoose.connect returns a Promise<Connection>
    cached.promise = mongoose.connect(MONGODB_URI, {
      dbName: 'spickyclean',
      bufferCommands: false,
    }).then((mongoose) => mongoose.connection); // Resolving to mongoose.connection
  }

  cached.conn = await cached.promise;
  global.mongoose = cached;  // Set the global object for reuse

  return cached.conn;
}
