<script lang="ts">
	import '../app.postcss';
	import Header from '$lib/Header/index.svelte';
	import { onNavigate } from '$app/navigation';

	onNavigate((navigation) => {
		if (!document.startViewTransition) return;

		return new Promise((resolve) => {
			document.startViewTransition(async () => {
				resolve();
				await navigation.complete;
			});
		});
	});
</script>

<Header />

<main class="px-2 md:px-6 max-w-4xl">
	<slot />
</main>
