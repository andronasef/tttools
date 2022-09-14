<script>
	export let name = 'Tool Name';
	export let description = 'Lxorem, ipsum dolor sit amet consectetur adipisicing elit.';
	export let icon = 'mdi:emoticon-wink';
</script>

<a href={`/tttools/${name.toLowerCase().replace(/ /g, '')}`}>
	<div class="card w-49 lg:min-w-96 lg:min-h-full bg-neutral shadow-xl">
		<div class="card-body center">
			<span class="iconify-inline text-[5rem]" data-icon={icon} />
			<h2 class="card-title">{name}</h2>
			<p class="text-center">{description}</p>
		</div>
	</div>
</a>
