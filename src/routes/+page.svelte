<script lang="ts">
	import { base } from '$app/paths';
	import LinkedIn from '$lib/logos/LinkedIn.png';
	import GitHub from '$lib/logos/GitHub-Dark.png';
	import Box from '$lib/Box/index.svelte';
	import ImageLink from '$lib/ImageLink/index.svelte';

	interface Social {
		href: string;
		src: string;
		alt: string;
	}
	const socials: readonly Social[] = [
		{ src: LinkedIn, alt: 'LinkedIn', href: 'https://ch.linkedin.com/in/pascal-honegger' },
		{ src: GitHub, alt: 'GitHub', href: 'https://github.com/PascalHonegger' }
	];
</script>

<svelte:head>
	<title>About Me | Pascal Honegger</title>
</svelte:head>

<Box>
	<h1>
		Welcome to the Glorious Website of <span class="underline">Pascal&nbsp;Honegger</span> 👋
	</h1>
</Box>

<Box>
	<section>
		<h2>TL;DR</h2>
		<ul class="list-inside list-disc">
			<li>Fullstack developer from Switzerland 🇨🇭</li>
			<li>Passionate about web development and cyber security</li>
			<li>
				Enjoys using the latest and greatest technologies (see <a href="{base}/setup">here</a> for proof)
			</li>
			<li>Hobbies include watching Netflix, playing Chess and solving Rubik's Cubes in ~30s</li>
			<li>
				More details available online:
				{#each socials as { href, src, alt }}
					<ImageLink {href} {src} {alt} />
				{/each}
			</li>
		</ul>
	</section>
</Box>

<Box>
	<section>
		<h2>Work in Progress</h2>
		<p>
			More content is currently in development, you can follow the latest updates on this website on <a
				href="https://github.com/PascalHonegger/honegger.dev"
				rel="noopener noreferrer external"
				target="_blank">GitHub</a
			>
		</p>
	</section>
</Box>
