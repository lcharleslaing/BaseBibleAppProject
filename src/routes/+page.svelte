<script>
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';

	let books = [];

	onMount(async () => {
		const response = await fetch('/api/bible');
		books = await response.json();
	});

	function navigateToBook(bookId) {
		goto(`/books/${bookId}`);
	}
</script>

<div class="m-6">
	<h1 class="text-2xl font-bold">Bible API Data</h1>
	<p>This is the data from the API route</p>
</div>

<div class="m-4 grid grid-cols-3 gap-1">
	{#each books as book}
		<button class="btn btn-primary" on:click={() => navigateToBook(book.id)}>{book.name}</button>
	{/each}
</div>
