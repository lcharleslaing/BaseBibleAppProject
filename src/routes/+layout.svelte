<script>
	import '../app.pcss';
	import MenuBars from '../lib/components/MenuBars.svelte';
</script>

<MenuBars />
<slot />

<style>
	:global(body) {
		/* Set the min-height to 100vh plus a little extra to ensure scrolling */
		min-height: calc(100vh + 5rem); /* Adjust 5rem to the amount just enough to enable scrolling */
		/* Ensure the content box is at least as tall as the viewport */
		display: flex;
		flex-direction: column;
	}

	:global(main) {
		flex: 1;
	}
</style>
