<script lang="ts">
	import ToolGroup from '$lib/components/toolcat.svelte';
	import { toolsGroupslist } from '$lib/toolsdb';
	import SvelteSeo from 'svelte-seo';
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
	{#each Object.values(toolsGroupslist) as { name, icon, description }}
		<ToolGroup {name} {description} {icon} />
	{/each}
</div>
<!-- Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut nostrum eveniet, ut vero inventore, modi
quas iusto totam laborum natus at odit tempora quos tenetur ex cupiditate. Atque, laborum illum? -->
