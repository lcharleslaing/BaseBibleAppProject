<script>
	import { onMount, onDestroy } from 'svelte';
	import { goto } from '$app/navigation';
	import { fontSize } from '$lib/stores/fontSizeStore';

	let lastScrollY;
	let showTopMenu = false;
	let showBottomMenu = false;
	let autoHideTimeout;

	function increaseFontSize() {
		console.log('increaseFontSize called');
		fontSize.update((size) => {
			const newSize = size + 2;
			if (typeof window !== 'undefined') {
				localStorage.setItem('fontSize', newSize.toString());
			}
			return newSize;
		});
	}

	function decreaseFontSize() {
		console.log('decreaseFontSize called');
		fontSize.update((size) => {
			const newSize = Math.max(12, size - 2);
			if (typeof window !== 'undefined') {
				localStorage.setItem('fontSize', newSize.toString());
			}
			return newSize;
		});
	}

	const isBrowser = typeof window !== 'undefined';

	const topIcons = [
		{ src: '/menu/books.png', alt: 'Books', action: () => goto('/') },
		{ src: '/menu/search.svg', alt: 'Search', action: () => console.log('Search clicked') }
		// Add more top menu icons as needed
	];

	const bottomIcons = [
		{
			src: '/menu/back.png',
			alt: 'Back',
			action: () => {
				if (isBrowser) window.history.back();
			}
		},
		{ src: '/menu/plus.png', alt: 'Bigger', action: () => increaseFontSize() },
		{
			src: '/menu/minus.png',
			alt: 'Smaller',
			action: () => decreaseFontSize()
		},
		{
			src: '/menu/forward.png',
			alt: 'Forward',
			action: () => {
				if (isBrowser) window.history.forward();
			}
		}
		// Add more bottom menu icons as needed
	];

	function handleScroll() {
		const currentScrollY = window.scrollY;
		clearTimeout(autoHideTimeout);

		showTopMenu = currentScrollY > lastScrollY;
		showBottomMenu = !showTopMenu;

		lastScrollY = currentScrollY;

		// Auto-hide menus after 5 seconds of inactivity
		autoHideTimeout = setTimeout(() => {
			showTopMenu = false;
			showBottomMenu = false;
		}, 5000);
	}

	onMount(() => {
		if (isBrowser) {
			lastScrollY = window.scrollY; // Initialize lastScrollY here
			window.addEventListener('scroll', handleScroll, { passive: true });
			handleScroll(); // Initialize based on the current scroll position
		}
	});

	onDestroy(() => {
		if (isBrowser) {
			window.removeEventListener('scroll', handleScroll);
		}
		clearTimeout(autoHideTimeout);
	});
</script>

<div
	class={showTopMenu
		? 'fixed left-0 top-0 z-50 w-full bg-white opacity-100 shadow-md transition-opacity duration-300'
		: 'pointer-events-none fixed left-0 top-0 z-50 w-full bg-white opacity-0 shadow-md transition-opacity duration-300'}
>
	<div class="flex items-center justify-around p-4">
		{#each topIcons as { src, alt, action }}
			<button class="icon-button" on:click={action}>
				<img {src} {alt} class="h-6 w-6" />
			</button>
		{/each}
	</div>
</div>

<div
	class={showBottomMenu
		? 'fixed bottom-0 left-0 z-50 w-full bg-white opacity-100 shadow-md transition-opacity duration-300'
		: 'pointer-events-none fixed bottom-0 left-0 z-50 w-full bg-white opacity-0 shadow-md transition-opacity duration-300'}
>
	<div class="flex items-center justify-around p-4">
		{#each bottomIcons as { src, alt, action }}
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
</style>
