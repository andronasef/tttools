<script lang="ts">
	import Icon from './icon.svelte';

	export let name = 'Tool Name';
	export let description = 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.';
	export let icon = 'mdi:emoticon-wink';
	export let cat = '';
	export let slug = '';
</script>

<a href={`/tttools/${cat}/${slug}`}>
	<div class="card lg:min-w-49  bg-neutral shadow-xl h-full">
		<div class="card-body gap-5 center flex flex-col justify-center items-c">
			<Icon style={'iconify-inline text-[5rem]'} {icon} />
			<h2 class="card-title text-clip text-center h-full">{name}</h2>
			<p class="text-center ">{description}</p>
		</div>
	</div>
</a>
