<script lang="ts">
	import { toProperCase } from '$lib/utils';

	export let tool: any;
	export let catIcon: any;
	export let cat: string;
</script>

{#if tool}
	<div class="text-sm breadcrumbs relative -top-2 lg:-top-12">
		<ul>
			<li>
				<a href="/tttools">
					<svg width="24" height="24" class="w-4 h-4 mr-2 stroke-current" viewBox="0 0 24 24"
						><path
							fill="currentColor"
							d="M6 21q-.825 0-1.412-.587Q4 19.825 4 19v-9q0-.475.213-.9q.212-.425.587-.7l6-4.5q.275-.2.575-.3q.3-.1.625-.1t.625.1q.3.1.575.3l6 4.5q.375.275.588.7q.212.425.212.9v9q0 .825-.587 1.413Q18.825 21 18 21h-4v-7h-4v7Z"
						/></svg
					> Home</a
				>
			</li>
			<li>
				<a href={`/tttools/${cat}`}>
					<span class="iconify-inline w-4 h-4 mr-2 stroke-current" data-icon={catIcon} />

					{toProperCase(cat)}</a
				>
			</li>
			<li>
				<span class="iconify-inline w-4 h-4 mr-2 stroke-current" data-icon={tool.icon} />

				{tool.name}
			</li>
		</ul>
	</div>
{/if}
