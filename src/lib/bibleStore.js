import { writable } from 'svelte/store';
import { bibleStructure } from './bibleStructure.js';

function createBibleStore() {
	const { subscribe, set } = writable([]);

	const loadBible = () => {
		// Convert your object structure to an array for easier management in Svelte
		const booksArray = Object.entries(bibleStructure).map(([bookName, chapters]) => ({
			name: bookName,
			chapters: Object.keys(chapters).map((chapterNumber) => ({
				number: chapterNumber,
				verses: chapters[chapterNumber]
			}))
		}));

		set(booksArray);
	};

	return {
		subscribe,
		loadBible
	};
}

export const bibleStore = createBibleStore();
