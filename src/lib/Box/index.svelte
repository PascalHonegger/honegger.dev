<script lang="ts">
	let clazz = '';
	export { clazz as class };
</script>

<div
	class="bg-white p-4 md:p-6 shadow-md bg-opacity-75 hover:bg-opacity-90 hover:shadow-lg transition-all mb-4 md:mb-6 {clazz ??
		''}"
>
	<slot />
</div>
