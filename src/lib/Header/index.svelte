<script lang="ts">
	import { page } from '$app/state';
	import routes from '$lib/Data/routes';
</script>

<header
	class="mb-6 flex w-full max-w-6xl flex-row place-items-center justify-end bg-white/95 p-4 shadow-md md:p-6 xl:rounded-b-md"
>
	<nav class="flex flex-row gap-x-2 md:gap-x-6">
		{#each routes as { href, label, icon: SvelteComponent } (label)}
			{@const active = page.url.pathname.split('?')[0] === href}
			<a
				{href}
				class="grid grid-cols-[28px_1fr] items-center justify-items-center rounded-md border-4 border-transparent p-2 font-semibold transition-colors hover:border-gray-600 hover:no-underline sm:gap-x-2 md:gap-x-4 {active
					? 'bg-gray-200'
					: 'fill-gray-600 text-gray-600'}"
				><SvelteComponent class="h-6" /><span class="hidden sm:inline">{label}</span></a
			>
		{/each}
	</nav>
</header>
