import _mongoose, { connect, disconnect } from "mongoose";

declare global {
  var mongoose: {
    promise: ReturnType<typeof connect> | null;
    conn: typeof _mongoose | null;
  };
}

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI || MONGODB_URI.length === 0) {
  throw new Error("Please add your MongoDB URI to .env.local");
}

/**
 * Global is used here to maintain a cached connection across hot reloads
 * in development. This prevents connections from growing exponentially
 * during API Route usage.
 */
let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

async function connectDB() {
  if (cached.conn) {
    console.log("🚀 Using cached connection");
    return cached.conn;
  }

  if (!cached.promise) {
    const opts = {};

    cached.promise = connect(MONGODB_URI!, opts)
      .then((mongoose) => {
        console.log("✅ New connection established");
        cached.conn = mongoose;
        return mongoose;
      })
      .catch((error) => {
        console.error("❌ Connection to database failed");
        throw error;
      });
  }

  try {
    await cached.promise;
  } catch (e) {
    cached.promise = null;
    throw e;
  }

  return cached.conn;
}

async function disconnectDB() {
  if (cached.conn) {
    if (process.env.NODE_ENV === "production") {
      await disconnect(); // Disconnect from the database
      console.log("🛑 Disconnected from the database");
    } else {
      console.log("⚠️ Not disconnected. Environment is not production.");
    }

    cached.conn = null; // Clear the cached connection
    cached.promise = null; // Clear the promise to allow reconnection if needed
  }
}

const db = { connectDB, disconnectDB };
export default db;
