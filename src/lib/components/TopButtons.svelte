<script>
	import { onMount, onDestroy } from 'svelte';

	export let icons = [];
	let lastScrollY = window.scrollY;
	let showMenu = false;

	function handleScroll() {
		const currentScrollY = window.scrollY;

		showMenu = currentScrollY > lastScrollY;
		lastScrollY = currentScrollY <= 0 ? 0 : currentScrollY;
	}

	onMount(() => {
		window.addEventListener('scroll', handleScroll, { passive: true });
	});

	onDestroy(() => {
		window.removeEventListener('scroll', handleScroll);
	});
</script>

<div
	class:showMenu
	class="pointer-events-none fixed left-0 top-0 z-50 w-full bg-white opacity-0 shadow-md transition-opacity duration-500"
>
	<div class="flex items-center justify-around p-4">
		{#each icons as { src, alt, action }}
			<button class="icon-button" on:click={action}>
				<img {src} {alt} class="h-6 w-6" />
			</button>
		{/each}
	</div>
</div>

<style>
	.icon-button {
		background: none;
		border: none;
		cursor: pointer;
	}

	.showMenu {
		opacity: 100 !important;
		pointer-events: auto !important;
	}
</style>
