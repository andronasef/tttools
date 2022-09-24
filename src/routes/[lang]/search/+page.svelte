<script lang="ts">
	import { localeTranslations } from '$i18n/formatters';
	import { locale } from '$i18n/i18n-svelte';

	import Toolview from '$lib/components/toolview.svelte';
	import { fly } from 'svelte/transition';

	let toolsCats = localeTranslations[$locale]['tools'];
	// console.log(toolsCats);

	let query = '';
	let filterdTools: any[] = [];

	$: if (query) search();

	function search() {
		filterdTools = [];
		Object.values(toolsCats).forEach((cat: any) => {
			Object.values(cat.list).forEach((tool: any) => {
				if ((tool.name as string).toLowerCase().includes(query.toLowerCase())) {
					filterdTools.push(tool);
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
	{#if query.length > 2}
		<div class="grid grid-cols-1 md:grid-cols-3 gap-5 p-10 ">
			{#each filterdTools as { name, description, icon, slug }, i}
				<div transition:fly={{ y: 10, duration: 250, delay: 250 + 50 * i }}>
					<Toolview cat={'handy'} {name} {description} {icon} {slug} />
				</div>
			{/each}
		</div>
	{/if}
</div>
