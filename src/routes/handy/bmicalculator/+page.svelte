<script lang="ts">
	import Slider from './components/slider.svelte';

	enum Gender {
		Male,
		Female
	}

	// let age: number = 10;
	let height = 160;
	let weight = 70;
	let bmi = 0;
	let status = '';

	function statusCalc() {
		if (bmi <= 18.5) return 'Underweight';
		else if (bmi >= 18.5 && bmi <= 25) return 'Normal';
		else if (bmi >= 25 && bmi <= 30) return 'Overweight';
		else if (bmi >= 30 && bmi <= 35) return 'Obese';
		else if (bmi >= 35) return 'Extremely Obese';
		return '';
	}

	$: {
		bmi = (weight / (height * height)) * 10000;
		status = statusCalc();
	}
</script>

<div class="lg:w-1/2 gap-5 flex flex-col">
	<!-- <Slider value={age} str="Age" unit="Years" min={10} max={120} /> -->
	<Slider bind:value={height} str="Height" unit="CM" min={50} max={210} />
	<Slider bind:value={weight} str="Weight" unit="KG" min={40} max={200} />
	<div class="mt-5 text-center text-5xl font-bold">
		{bmi.toFixed(2)} <br />
		<span class="uppercase text-xl mt-5">{status}</span>
	</div>
</div>

<style>
</style>
