<script>
	import { onMount } from 'svelte';
	import { browser } from '$app/environment';
	let verses = [];

	// Props received from parent
	export let chapterId;

	// Simulated fetch function. Replace this with your actual data fetching logic.
	async function fetchVerses(chapterId) {
		if (!browser) return []; // Prevent running on server-side

		// Simulated fetch request. Replace with actual API call or database query.
		const response = await fetch(`/api/chapters/${chapterId}/verses`);
		const data = await response.json();
		return data.verses;
	}

	onMount(async () => {
		if (chapterId) {
			verses = await fetchVerses(chapterId);
		}
	});
</script>

{#if verses.length}
	<div>
		{#each verses as { id, verse_number }}
			<button on:click={() => console.log(`Verse ${verse_number} selected`)}>
				Verse {verse_number}
			</button>
		{/each}
	</div>
{:else}
	<p>No verses found for this chapter.</p>
{/if}
