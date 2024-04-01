<script lang="ts">
	import Box from '$lib/Box/index.svelte';
</script>

<svelte:head>
	<title>How This Site Is Built | Pascal Honegger</title>
</svelte:head>

<div>
	<Box>
		<h1>How This Site Is Built</h1>
	</Box>

	<Box>
		<h2>Tech-Stack</h2>

		<section>
			<p>
				This website was built by myself using <a
					href="https://kit.svelte.dev/"
					rel="noopener noreferrer external"
					target="_blank">SvelteKit</a
				>
				as a framework and
				<a href="https://tailwindcss.com/" rel="noopener noreferrer external" target="_blank"
					>Tailwind CSS</a
				>
				for creating my custom styles. I decided to opt into
				<a href="https://pnpm.io/" rel="noopener noreferrer external" target="_blank">pnpm</a> to manage
				my NPM dependencies and greatly reduce install times. I'm a good web developer but by no means
				a designer, but I still like the way this site turned out.
			</p>
		</section>
	</Box>

	<Box>
		<h2>CI/CD</h2>

		<section>
			<p>
				Of course, no modern website can operate without continuous integration and deployment. I
				decided to use <a
					href="https://github.com/features/actions"
					rel="noopener noreferrer external"
					target="_blank">GitHub Actions</a
				> to get the job done.
			</p>
		</section>
	</Box>

	<Box>
		<h2>Hosting</h2>

		<section>
			<p>
				The obvious solution for hosting this static website would be the cloud. But if I did that,
				I couldn't easily experiment with cool features like HTTP/3, TLS 1.3, a custom DMZ and all
				the problems that come with hosting a site yourself.
			</p>
		</section>
	</Box>

	<Box>
		<h2>More details?</h2>

		<section>
			<p>More details will follow once I get around to writing them 😅.</p>
		</section>
	</Box>
</div>
