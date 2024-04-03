// src/routes/api/bible/[bookId]/[chapterId]/verses/+server.ts
import { error, json } from '@sveltejs/kit';
import db from '$lib/db.js';

export async function GET({ params }) {
	const { chapterId } = params;

	try {
		// Assuming that chapterId is unique across all books
		const chapterInfo = await db.chapter.findUnique({
			where: { id: chapterId },
			include: {
				book: true,
				verses: {
					orderBy: { verseNumber: 'asc' }
				}
			}
		});

		if (!chapterInfo) {
			return error(404, 'Chapter not found');
		}

		const responseData = {
			bookName: chapterInfo.book.name,
			chapterNumber: chapterInfo.chapterNumber,
			verses: chapterInfo.verses
		};

		return json(responseData);
	} catch (err) {
		console.error(`Error fetching chapter and verses for chapter ${chapterId}:`, err);
		return error(500, 'Failed to fetch chapter and verses');
	}
}
