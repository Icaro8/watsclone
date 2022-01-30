import mongoose from "mongoose";
import "dotenv/config";

const uriDB = process.env.DATABASE!;

if (!uriDB) {
  throw new Error("We can`t find the url");
}
//@ts-ignore
let cached = global.mongoose;

if (!cached) {
  //@ts-ignore
  global.mongoose = { conn: null, promise: null };
  cached = { conn: null, promise: null };
}

async function connectToDB() {
  if (cached.conn) {
    return cached.conn;
  }
  if (!cached.promise) {
    const opts = {
      poolSize: 1,
      useNewUrlParser: true,
      useUnifiedTopology: true,
      bufferCommands: false,
      bufferMaxEntries: 0,
      useFindAndModify: false,
      useCreateIndex: true,
    };

    cached.promise = mongoose
      .connect(`${uriDB}`, opts)
      .then((response) => response);
  }
  cached.conn = await cached.promise;
  return cached.conn;
}

export default connectToDB;
