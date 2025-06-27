<script lang="ts">
	interface Props {
		href: string;
		src: string;
		alt: string;
	}

	let { href, src, alt }: Props = $props();
</script>

<a {href} rel="noopener noreferrer external" target="_blank"
	><img
		class="inline-block h-8 transform opacity-90 transition duration-300 hover:scale-110 hover:opacity-100"
		{src}
		{alt}
	/></a
>
