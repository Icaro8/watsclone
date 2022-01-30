import { VercelRequest, VercelResponse } from "@vercel/node";
import { CLientFauna } from "../../services/fauna";
import { query as q } from "faunadb";

interface User {
  name: string;
  email: string;
  password: string;
}

export async function Register(
  request: VercelRequest,
  response: VercelResponse
) {
  const user: User = await request.body;
  const returndata = await CLientFauna.query(
    q.Create(q.Collection("user"), { data: user })
  );
  console.log(returndata);
}
