<script context="module">
	export async function load({ params }) {
		const { bookId } = params;
		// Fetch chapters for the bookId from your database
		return { props: { chapters: [] } }; // Replace with actual fetch result
	}
</script>

<script>
	export let chapters;
	import { goto } from '$app/navigation';

	function selectChapter(chapterId) {
		goto(`/books/${$page.params.bookId}/chapters/${chapterId}`);
	}
</script>

{#each chapters as { id, chapter_number }}
	<button on:click={() => selectChapter(id)}>Chapter {chapter_number}</button>
{/each}
