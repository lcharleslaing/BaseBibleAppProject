import { json } from '@sveltejs/kit';
import db from '../../../lib/db';

export const GET = async () => {
	const posts = await db.post.findMany();
	return json(posts);
};
