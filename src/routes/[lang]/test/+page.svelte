<script>
	import LL from '$i18n/i18n-svelte';

	let tools = Object.values($LL.tools.handy.list);
</script>

{#each tools as tool}
	<div>{tool.name()}</div>
{/each}
<div />
