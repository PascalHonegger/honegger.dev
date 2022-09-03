<script lang="ts">
	import Box from '$lib/Box/index.svelte';
	import ImageLink from '$lib/ImageLink/index.svelte';
	import GitHub from '$lib/logos/GitHub-Dark.png';
	import Gugus from '@fortawesome/fontawesome-free/svgs/solid/up-right-from-square.svg?url';
	import { projects } from './projects';
</script>

<svelte:head>
	<title>My Projects | Pascal Honegger</title>
</svelte:head>

<Box>
	<h1>My Projects</h1>
	<section>
		I have a number of open source projects hosted on GitHub, here is a list of the projects I'm
		most proud of
	</section>
</Box>

<section class="grid md:grid-cols-3 sm:grid-cols-2 gap-x-2 sm:gap-x-4 md:gap-x-6">
	{#each projects as { name, description, technologies, github, website }}
		<Box class="relative md:h-72">
			<h2>{name}</h2>
			<p>{description}</p>
			<span class="flex flex-row flex-wrap gap-2">
				{#each technologies as technology}
					<span
						class="inline-flex items-center rounded-full border-2 border-green-200 bg-green-200 px-2 py-1 text-sm font-semibold text-green-600 shadow-sm"
						>{technology}</span
					>
				{/each}
			</span>
			<span
				class="absolute inset-x-4 bottom-4 md:inset-x-6 md:bottom-6 flex flex-row justify-end gap-x-2"
			>
				{#if website}
					<ImageLink src={Gugus} alt="Gugus" href={website} />
				{/if}
				{#if github}
					<ImageLink src={GitHub} alt="GitHub" href={github} />
				{/if}
			</span>
		</Box>
	{/each}
</section>
