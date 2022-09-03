<script lang="ts">
	export let href: string;
	export let src: string;
	export let alt: string;
</script>

<a {href} rel="noopener noreferrer external" target="_blank"
	><img
		class="inline-block h-8 transform transition duration-300 opacity-90 hover:scale-110 hover:opacity-100"
		{src}
		{alt}
	/></a
>
