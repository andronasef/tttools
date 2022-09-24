<script lang="ts">
	let num: number = 0;
	let precent: number = 0;
</script>

<div class="form-control w-full max-w-xs flex flex-row gap-5 mb-10">
	<div>
		<label class="label" for="">Precent %</label>
		<input bind:value={precent} type="number" class="input input-bordered w-full max-w-xs" />
	</div>
	<div>
		<label class="label" for="">Of Number</label>
		<input bind:value={num} type="number" class="input input-bordered w-full max-w-xs" />
	</div>
</div>

<div class="mb-10 transition-all transform">
	<h2 class="text-2xl font-bold mb-2">Result</h2>
	<p class="text-lg">
		{num ?? 0} * {precent ?? 0} / 100 = {(num * precent) / 100}
	</p>
</div>
