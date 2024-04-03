import { j as json } from "../../../../chunks/index.js";
import { d as db } from "../../../../chunks/db.js";
const GET = async () => {
  const books = await db.book.findMany();
  return json(books);
};
export {
  GET
};
