import { j as json, e as error } from "../../../../../../chunks/index.js";
import { d as db } from "../../../../../../chunks/db.js";
const GET = async ({ params }) => {
  const { bookId } = params;
  try {
    const chapters = await db.chapter.findMany({
      where: { bookId },
      select: { id: true, chapterNumber: true },
      // Adjust according to your model fields
      orderBy: { chapterNumber: "asc" }
      // Assuming chapters should be ordered by their number
    });
    return json(chapters);
  } catch (e) {
    console.error("Failed to fetch chapters:", e);
    return error(500, "Failed to fetch chapters");
  }
};
export {
  GET
};
