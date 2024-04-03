// prisma/seed.js
import { PrismaClient } from '@prisma/client';
import sqlite3 from 'sqlite3';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const prisma = new PrismaClient();

async function seed() {
	const dbPath = join(__dirname, '../src/lib/bible.db');
	const db = new sqlite3.Database(dbPath, sqlite3.OPEN_READONLY, (err) => {
		if (err) {
			console.error('Error opening SQLite database', err);
		}
	});

	console.log('Seeding started.');

	const getBooks = () =>
		new Promise((resolve, reject) => {
			console.log('Fetching books...');
			db.all('SELECT * FROM books', [], (err, rows) => {
				if (err) reject(err);
				else {
					console.log(`${rows.length} books fetched.`);
					resolve(rows);
				}
			});
		});

	const getChapters = (bookId) =>
		new Promise((resolve, reject) => {
			console.log(`Fetching chapters for book ID ${bookId}...`);
			db.all('SELECT * FROM chapters WHERE book_id = ?', [bookId], (err, rows) => {
				if (err) reject(err);
				else {
					console.log(`${rows.length} chapters fetched for book ID ${bookId}.`);
					resolve(rows);
				}
			});
		});

	const getVerses = (chapterId) =>
		new Promise((resolve, reject) => {
			console.log(`Fetching verses for chapter ID ${chapterId}...`);
			db.all('SELECT * FROM verses WHERE chapter_id = ?', [chapterId], (err, rows) => {
				if (err) reject(err);
				else {
					console.log(`${rows.length} verses fetched for chapter ID ${chapterId}.`);
					resolve(rows);
				}
			});
		});

	try {
		const books = await getBooks();

		for (const book of books) {
			console.log(`Seeding book: ${book.name}`);
			const prismaBook = await prisma.book.upsert({
				where: { name: book.name },
				update: {},
				create: {
					id: book.id,
					name: book.name
				}
			});

			const chapters = await getChapters(book.id);
			for (const chapter of chapters) {
				console.log(`Seeding chapter ${chapter.chapter_number} for book: ${book.name}`);
				const prismaChapter = await prisma.chapter.create({
					data: {
						id: chapter.id,
						bookId: prismaBook.id,
						chapterNumber: chapter.chapter_number
					}
				});

				const verses = await getVerses(chapter.id);
				for (const verse of verses) {
					console.log(`Seeding verse ${verse.verse_number} for chapter ${chapter.chapter_number}`);
					await prisma.verse.create({
						data: {
							id: verse.id,
							chapterId: prismaChapter.id,
							verseNumber: verse.verse_number,
							text: verse.text
						}
					});
				}
			}
		}

		console.log('Seeding completed successfully.');
	} catch (e) {
		console.error('Error during seeding:', e);
	} finally {
		db.close();
		await prisma.$disconnect();
	}
}

seed();
