<script lang="ts">
	let lower = 0;
	let upper = 0;
	let result = 0;

	function genRandNum() {
		if (lower > upper) {
			alert('Lower number must be less than upper number');
		} else result = Math.floor(Math.random() * (upper - lower + 1)) + lower;
	}
</script>

<div class="text-5xl">
	{result}
</div>
<div class="form-control w-full max-w-xs flex flex-row gap-5">
	<div>
		<label class="label" for="">Lower Limit</label>
		<input bind:value={lower} type="number" class="input input-bordered w-full max-w-xs" />
	</div>
	<div>
		<label class="label" for="">Upper Limit</label>
		<input bind:value={upper} type="number" class="input input-bordered w-full max-w-xs" />
	</div>
</div>
<button on:click={genRandNum} class="btn ">Generate!</button>
