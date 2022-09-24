<script lang="ts">
	import ToolGroup from '$lib/components/catView.svelte';
	import SvelteSeo from 'svelte-seo';

	export let data: any;

	let cats: any = Object.values(data.cats);
	let toolsSlugs = Object.keys(data.cats);
</script>

<SvelteSeo
	title="tttools"
	description={'Tools for everyone!'}
	openGraph={{
		title: 'tttools',
		description: 'Tools for everyone!'
	}}
/>

<div class="grid lg:grid-cols-3 gap-5">
	{#each cats as { name, icon, description }, i}
		<ToolGroup {name} {description} {icon} catslug={toolsSlugs[i]} />
	{/each}
</div>
