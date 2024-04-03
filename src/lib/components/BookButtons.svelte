<script>
	import { goto } from '$app/navigation';
	export let books; // Assume this is an array of book objects
</script>

<div class="book-buttons">
	{#each books as book}
		<button on:click={() => goto(`/${book.id}`)}>{book.name}</button>
	{/each}
</div>

<style>
	.book-buttons button {
		margin: 5px;
	}
</style>
