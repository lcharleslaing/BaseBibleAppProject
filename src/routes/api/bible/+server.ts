import { json } from '@sveltejs/kit';
import db from '../../../lib/db';

export const GET = async () => {
	const books = await db.book.findMany();
	return json(books);
};
