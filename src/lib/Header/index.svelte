<script lang="ts">
	import { page } from '$app/stores';
	import { base } from '$app/paths';
	import ImagePortrait from '@fortawesome/fontawesome-free/svgs/solid/image-portrait.svg?component';
	import Code from '@fortawesome/fontawesome-free/svgs/solid/code.svg?component';
	import FolderTree from '@fortawesome/fontawesome-free/svgs/solid/folder-tree.svg?component';
	import type { ComponentType } from 'svelte';

	interface Route {
		href: string;
		label: string;
		icon: ComponentType;
	}
	const routes: readonly Route[] = [
		{ href: `${base}/`, label: 'About Me', icon: ImagePortrait },
		{ href: `${base}/setup`, label: 'How This Site Is Built', icon: Code },
		{ href: `${base}/projects`, label: 'My Projects', icon: FolderTree }
	];
</script>

<header
	class="flex flex-row justify-end place-items-center p-4 md:p-6 mb-6 xl:rounded-b-md w-full max-w-6xl bg-white bg-opacity-95 shadow-md"
>
	<nav class="flex flex-row gap-x-2 md:gap-x-6">
		{#each routes as { href, label, icon }}
			<a {href} class="nav-link" class:active={$page.url.pathname.split('?')[0] === href}
				><svelte:component this={icon} class="h-6" /><span class="hidden sm:inline">{label}</span
				></a
			>
		{/each}
	</nav>
</header>

<style type="postcss">
	.nav-link {
		@apply border-4 border-transparent
		font-semibold p-2 rounded-md
		transition-colors
		grid grid-cols-[20px,_1fr] items-center sm:gap-x-2 md:gap-x-4;
	}

	.nav-link:hover {
		@apply no-underline border-gray-600;
	}

	.nav-link:not(.active) {
		@apply text-gray-600 fill-gray-600;
	}

	.active {
		@apply bg-gray-200;
	}
</style>
