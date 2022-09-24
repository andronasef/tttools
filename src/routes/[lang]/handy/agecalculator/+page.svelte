<script lang="ts">
	import { Datepicker } from 'svelte-calendar';

	let store: any;
	const theme = {
		calendar: {
			width: '500px',
			maxWidth: '50vw',
			legend: {
				height: '40px'
			},
			shadow: '0px 10px 26px rgba(0, 0, 0, 0.25)',
			colors: {
				text: {
					primary: '#fff',
					highlight: '#fff'
				},
				background: {
					primary: '#262B36',
					highlight: '#3B4252',
					hover: '#4a556b'
				},
				border: '#222'
			},
			font: {
				regular: '1.5em',
				large: '30em'
			},
			grid: {
				disabledOpacity: '.35',
				outsiderOpacity: '.6'
			}
		}
	};

	let years: number = 0;
	let month: number = 0;
	let day: number = 0;

	$: calculateAge($store?.selected);
	function calculateAge(date: Date) {
		if (date) {
			let today = new Date();
			let birthDate = new Date(date);
			let age = today.getFullYear() - birthDate.getFullYear();
			let m = today.getMonth() - birthDate.getMonth();
			if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
				age--;
			}
			// calc days
			let days = today.getDate() - birthDate.getDate();
			years = age;
			month = m;
			day = days;
		}
	}
</script>

<div class="flex flex-col mb-8 items-center gap-3">
	<span class="label">Please choose your birthday date?</span>
	<Datepicker bind:store {theme} />
</div>
<div class="text-2xl border-gray-500 border-2  p-5 rounded-xl">
	{years} years, {month} months, and {day} Days
</div>
