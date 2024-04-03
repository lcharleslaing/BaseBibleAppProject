import sqlite3 from 'sqlite3';
import path from 'path';
import { fileURLToPath } from 'url';
import { v4 as uuidv4 } from 'uuid';
import { bibleStructure } from './src/lib/bibleStructure.js';

async function createDatabase() {
	const __dirname = path.dirname(fileURLToPath(import.meta.url));
	const db = new sqlite3.Database(path.join(__dirname, 'bible.db'));

	const runAsync = (sql, params = []) =>
		new Promise((resolve, reject) => {
			db.run(sql, params, function (err) {
				if (err) reject(err);
				else resolve(this);
			});
		});

	// Create tables
	await runAsync(`CREATE TABLE IF NOT EXISTS books (id TEXT PRIMARY KEY, name TEXT UNIQUE)`);
	await runAsync(
		`CREATE TABLE IF NOT EXISTS chapters (id TEXT PRIMARY KEY, book_id TEXT, chapter_number INTEGER, FOREIGN KEY (book_id) REFERENCES books(id))`
	);
	await runAsync(
		`CREATE TABLE IF NOT EXISTS verses (id TEXT PRIMARY KEY, chapter_id TEXT, verse_number INTEGER, text TEXT, FOREIGN KEY (chapter_id) REFERENCES chapters(id))`
	);
	await runAsync(`CREATE TABLE IF NOT EXISTS versions (id INTEGER PRIMARY KEY, name TEXT)`);

	// Start a transaction
	await runAsync('BEGIN TRANSACTION');

	try {
		for (const bookName of Object.keys(bibleStructure)) {
			const bookId = uuidv4();
			await runAsync(`INSERT INTO books (id, name) VALUES (?, ?)`, [bookId, bookName]);

			const chapters = bibleStructure[bookName];
			for (const chapterNumber of Object.keys(chapters)) {
				const chapterId = uuidv4();
				await runAsync(`INSERT INTO chapters (id, book_id, chapter_number) VALUES (?, ?, ?)`, [
					chapterId,
					bookId,
					parseInt(chapterNumber, 10)
				]);

				const verses = chapters[chapterNumber];
				for (const verse of verses) {
					const verseId = uuidv4();
					await runAsync(
						`INSERT INTO verses (id, chapter_id, verse_number, text) VALUES (?, ?, ?, ?)`,
						[verseId, chapterId, parseInt(verse.verse, 10), verse.text]
					);
				}
			}
		}

		await runAsync(`INSERT INTO versions (id, name) VALUES (?, ?)`, [1, 'KJV']);

		// Commit the transaction
		await runAsync('COMMIT');
	} catch (err) {
		await runAsync('ROLLBACK');
		throw err;
	}

	db.close();
}

createDatabase().catch((err) => console.error(err));
