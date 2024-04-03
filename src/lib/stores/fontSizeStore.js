// src/stores/fontSizeStore.js
import { writable } from 'svelte/store';

function createFontSizeStore() {
	const initialValue = getInitialFontSize();
	const { subscribe, set, update } = writable(initialValue);

	return {
		subscribe,
		set: (value) => {
			if (typeof window !== 'undefined') {
				localStorage.setItem('fontSize', value.toString());
			}
			set(value);
		},
		update
	};
}

function getInitialFontSize() {
	if (typeof window !== 'undefined') {
		const storedFontSize = localStorage.getItem('fontSize');
		return storedFontSize ? parseInt(storedFontSize, 10) : 16;
	}
	return 16;
}

export const fontSize = createFontSizeStore();
