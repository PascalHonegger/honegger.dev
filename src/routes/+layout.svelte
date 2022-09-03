<script lang="ts">
	import '../app.postcss';
	import Header from '$lib/Header/index.svelte';
	export const prerender = true;
</script>

<Header />

<main class="px-2 md:px-6 max-w-4xl">
	<slot />
</main>
