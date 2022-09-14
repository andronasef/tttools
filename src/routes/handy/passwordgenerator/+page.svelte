<script>
	import { copyToClipboard } from '$lib/ulitites';
	import Slider from '../bmicalculator/components/slider.svelte';

	let length = 10;
	let pass = '';

	function passwordGen() {
		let charset =
			'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+~`|}{[]:;?><,./-=';
		let retVal = '';
		for (let i = 0, n = charset.length; i < length; ++i) {
			retVal += charset.charAt(Math.floor(Math.random() * n));
		}
		pass = retVal;
	}

	$: if (length) passwordGen();
</script>

<div class="w-full lg:min-w-[25rem] lg:w-fit cursor-copy" on:click={() => copyToClipboard(pass)}>
	<div class="relative">
		<button on:click|stopPropagation={passwordGen} class="absolute right-5 top-5">
			<span class="iconify-inline text-[1.75rem] " data-icon="material-symbols:autorenew" />
		</button>
	</div>

	<div class="px-10 w-full py-5 border-2  text-center rounded-lg text-xl">
		{pass}
	</div>
</div>

<Slider bind:value={length} str="Length" unit="Characters" min={8} max={20} />
