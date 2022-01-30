import faunadb from "faunadb";
import "dotenv/config";

export const CLientFauna = new faunadb.Client({
  secret: process.env.DATABASEFAUNADB!,
});
