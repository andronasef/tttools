<script>
	import { localeTranslations } from '$i18n/formatters';
	import { locale } from '$i18n/i18n-svelte';
	import Toolview from '$lib/components/toolview.svelte';
	import { fly } from 'svelte/transition';

	let toolsCats = localeTranslations[$locale]['tools'];
	// console.log(toolsCats);

	let query = '';
	let filterdTools = {};
	$: if (query) search();

	function search() {
		filterdTools = {};
		Object.values(toolsCats).forEach((cat, catindex) => {
			Object.values(cat.list).forEach((tool, index) => {
				if (tool.name.toLowerCase().includes(query.toLowerCase())) {
					const toolslug = Object.keys(cat.list)[index];
					const catslug = Object.keys(toolsCats)[catindex];
					Object.assign(tool, { catslug: catslug });
					filterdTools[`${toolslug}`] = tool;
				}
			});
		});
	}
	search();
</script>

<!-- Search Input -->
<input
	bind:value={query}
	type="text"
	placeholder="Search for tool!"
	class="input input-bordered w-full max-w-xs transition transform"
/>
<!-- Search Result -->
<div class="flex-grow">
	{#if query.length > 1}
		<div class="grid grid-cols-1 md:grid-cols-3 gap-5 p-10 ">
			{#each Object.entries(filterdTools) as [slug, tool], i}
				<div transition:fly={{ y: 10, duration: 250, delay: 250 + 50 * i }}>
					<Toolview
						{slug}
						catslug={tool.catslug}
						name={tool.name}
						description={tool.description}
						icon={tool.icon}
					/>
				</div>
			{/each}
		</div>
	{/if}
</div>
