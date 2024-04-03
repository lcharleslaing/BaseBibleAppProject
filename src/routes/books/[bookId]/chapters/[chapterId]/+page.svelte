<script>
	import { onMount } from 'svelte';
	import { page } from '$app/stores';

	let verses = [];
	let bookName = '';
	let chapterNumber = '';
	let loading = true;

	onMount(async () => {
		const { bookId, chapterId } = $page.params;
		try {
			const response = await fetch(`/api/bible/${bookId}/${chapterId}/verses`);
			if (response.ok) {
				const data = await response.json();
				bookName = data.bookName;
				chapterNumber = data.chapterNumber;
				verses = data.verses;
				loading = false;
			} else {
				console.error('Failed to fetch chapter and verses: Response not OK');
			}
		} catch (error) {
			console.error('Failed to fetch chapter and verses:', error);
		}
	});
</script>

{#if loading}
	<p>Loading verses...</p>
{:else if verses.length === 0}
	<p>No verses found.</p>
{:else}
	<div class="m-6">
		<h1 class="text-center text-4xl font-black">{bookName} {chapterNumber}</h1>
		{#each verses as verse}
			<div class="my-4">
				<p><strong>{verse.verseNumber}.</strong> {verse.text}</p>
			</div>
		{/each}
	</div>
{/if}
