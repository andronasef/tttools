<script lang="ts">
	import Toolview from '$lib/components/toolview.svelte';
	import SvelteSeo from 'svelte-seo';

	export let data: any;
	let category: any = data.tools;
	let tools: any = Object.values(category.list);
	let toolsSlugs = Object.keys(data.tools.list);
</script>

<SvelteSeo
	title={`${category.name} | tttools`}
	description={category.description}
	openGraph={{
		title: `${category.name} Tools | tttools`,
		description: category.description
	}}
/>

<h1 class="text-2xl mb-5 font-bold">{category.name}</h1>

<div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 lg:gap-5">
	{#each tools as { icon, description, name }, i}
		<Toolview {icon} {description} {name} slug={toolsSlugs[i]} catslug={data.slug} />
	{/each}
</div>
