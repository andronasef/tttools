<script lang="ts">
	import Toolview from '$lib/components/toolview.svelte';

	import SvelteSeo from 'svelte-seo';

	export let data: any;
	// $: tools = (data.tools as Array<Tool>).filter((tool) => tool.name.includes(search));
	// let search: string = '';
</script>

<SvelteSeo
	title={data.slug}
	description={'tool description'}
	openGraph={{
		title: 'tttools categories',
		description: 'tool.description'
	}}
/>
<!-- <input class="input input-bordered" bind:value={search} type="text" /> -->
<div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
	{#each data.tools as { name, description, icon, slug }}
		<Toolview cat={data.slug} {name} {description} {icon} {slug} />
	{/each}
</div>
