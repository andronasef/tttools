<script>
	export let value = 0;
	export let str = ' ';
	export let unit = ' ';
	export let min = 0;
	export let max = 10;
</script>

<div class="flex-col flex gap-3">
	<div>{str}: {value} {unit}</div>
	<input bind:value type="range" {min} {max} class="range range-xs" />
</div>
<slot />
