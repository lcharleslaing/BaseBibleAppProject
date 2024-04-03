<script>
	import { onMount } from 'svelte';
	import { page } from '$app/stores';
	import { goto } from '$app/navigation';

	let chapters = [];

	onMount(async () => {
		const bookId = $page.params.bookId;
		const res = await fetch(`/api/bible/${bookId}/chapters`);
		if (res.ok) {
			chapters = await res.json();
		} else {
			console.error('Failed to fetch chapters');
		}
	});

	// Example function to navigate to a chapter
	function navigateToChapter(chapterId) {
		const { bookId } = $page.params;
		goto(`/books/${bookId}/chapters/${chapterId}`);
	}
</script>

<div class="m-6 grid grid-cols-6 gap-1">
	{#each chapters as chapter}
		<!-- Ensure that chapter.id is the correct property that holds the chapter's identifier -->
		<button class="btn btn-primary" on:click={() => navigateToChapter(chapter.id)}
			>{chapter.chapterNumber}</button
		>
	{/each}
</div>
