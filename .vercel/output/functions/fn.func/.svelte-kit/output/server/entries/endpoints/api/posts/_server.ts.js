import { j as json } from "../../../../chunks/index.js";
import { d as db } from "../../../../chunks/db.js";
const GET = async () => {
  const posts = await db.post.findMany();
  return json(posts);
};
export {
  GET
};
