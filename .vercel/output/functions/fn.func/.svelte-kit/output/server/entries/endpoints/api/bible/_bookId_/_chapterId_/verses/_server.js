import { e as error, j as json } from "../../../../../../../chunks/index.js";
import { d as db } from "../../../../../../../chunks/db.js";
async function GET({ params }) {
  const { chapterId } = params;
  try {
    const chapterInfo = await db.chapter.findUnique({
      where: { id: chapterId },
      include: {
        book: true,
        verses: {
          orderBy: { verseNumber: "asc" }
        }
      }
    });
    if (!chapterInfo) {
      return error(404, "Chapter not found");
    }
    const responseData = {
      bookName: chapterInfo.book.name,
      chapterNumber: chapterInfo.chapterNumber,
      verses: chapterInfo.verses
    };
    return json(responseData);
  } catch (err) {
    console.error(`Error fetching chapter and verses for chapter ${chapterId}:`, err);
    return error(500, "Failed to fetch chapter and verses");
  }
}
export {
  GET
};
