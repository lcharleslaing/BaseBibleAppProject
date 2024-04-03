import { PrismaClient } from '@prisma/client';

const db = new PrismaClient();

async function getPosts() {
	const response = await fetch('https://dummyjson.com/posts');
	const { posts } = await response.json();

	return posts;
}

function slugify(text) {
	return text.replace(/\s+/g, '-').toLowerCase();
}

async function main() {
	const posts = await getPosts();

	for (const post of posts) {
		await db.post.create({
			data: {
				title: post.title,
				content: post.body,
				slug: slugify(post.title)
			}
		});
	}

	await db.$disconnect();
}

main().catch((e) => {
	throw e;
});
