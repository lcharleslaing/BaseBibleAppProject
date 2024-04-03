import Database from 'better-sqlite3';
import path from 'path';

// Assuming your database file is located at the root of your project.
// You might need to adjust the path based on your actual database location.
const dbPath = path.resolve('bible.db');
const db = new Database(dbPath, { readonly: true });

export function getBooks() {
	const stmt = db.prepare('SELECT * FROM books');
	return stmt.all();
}

export function getChaptersByBookId(bookId) {
	const stmt = db.prepare('SELECT * FROM chapters WHERE book_id = ?');
	return stmt.all(bookId);
}

export function getVersesByChapterId(chapterId) {
	const stmt = db.prepare('SELECT * FROM verses WHERE chapter_id = ?');
	return stmt.all(chapterId);
}

// Add more functions as needed for interacting with other parts of your database.
