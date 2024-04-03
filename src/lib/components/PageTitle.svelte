<script>
	import { page } from '$app/stores';
	import { derived } from 'svelte/store';
	import { bibleBooks } from '$lib/params.js';

	const title = derived(page, ($page) => {
		// Ensure $page.url is defined to avoid errors during SSR
		if (!$page.url) return 'Loading...';

		const pathParts = $page.url.pathname.split('/').filter(Boolean);

		if (pathParts.length >= 1 && bibleBooks.hasOwnProperty(pathParts[0].toLowerCase())) {
			const bookName = bibleBooks[pathParts[0].toLowerCase()];

			if (pathParts.length >= 2) {
				const chapter = pathParts[1];
				const verse = pathParts.length === 3 ? `:${pathParts[2]}` : '';
				return `${bookName} ${chapter}${verse}`;
			}

			return bookName;
		} else if ($page.url.pathname === '/') {
			return 'Homepage';
		} else {
			return pathParts.map((part) => part.charAt(0).toUpperCase() + part.slice(1)).join(' ');
		}
	});
</script>

<h1 class="mb-4 text-center text-4xl font-bold">{$title}</h1>
