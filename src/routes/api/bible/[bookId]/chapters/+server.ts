// src/routes/api/bible/[bookId]/chapters/+server.ts
import { error, json } from '@sveltejs/kit';
import db from '../../../../../lib/db.js'; // Adjust the import path according to your project structure

export const GET = async ({ params }) => {
	const { bookId } = params;

	try {
		const chapters = await db.chapter.findMany({
			where: { bookId: bookId },
			select: { id: true, chapterNumber: true }, // Adjust according to your model fields
			orderBy: { chapterNumber: 'asc' } // Assuming chapters should be ordered by their number
		});

		return json(chapters);
	} catch (e) {
		console.error('Failed to fetch chapters:', e);
		return error(500, 'Failed to fetch chapters');
	}
};
