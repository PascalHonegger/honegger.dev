<script lang="ts">
	import type { Snippet } from 'svelte';

	interface Props {
		class?: string;
		children?: Snippet;
	}

	let { class: clazz = '', children }: Props = $props();
</script>

<div
	class="mb-4 bg-white/75 p-4 shadow-md transition-all hover:bg-white/90 hover:shadow-lg md:mb-6 md:p-6 {clazz ??
		''}"
>
	{@render children?.()}
</div>
