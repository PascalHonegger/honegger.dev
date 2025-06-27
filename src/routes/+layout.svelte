<script lang="ts">
	import '../app.css';
	import Header from '$lib/Header/index.svelte';
	import { onNavigate } from '$app/navigation';
	import type { Snippet } from 'svelte';
	interface Props {
		children?: Snippet;
	}

	let { children }: Props = $props();

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

<main class="max-w-4xl px-2 md:px-6">
	{@render children?.()}
</main>
