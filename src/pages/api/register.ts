import { VercelRequest, VercelResponse } from "@vercel/node";
import faunadb from "faunadb";
import "dotenv/config";

export function Register(request: VercelRequest, response: VercelResponse) {
  const query = faunadb.query;
  const adminClient = new faunadb.Client({
    secret: process.env.DATABASEFAUNADB!,
  });
  adminClient.query(query.CreateCollection({ name: "users" }));
}
