<script lang="ts">
	import { globState, State } from './caseStateStore';
	import CaseSwitcher from './components/caseSwitcher.svelte';

	let localInput = '';
	let localstate: State;

	globState.subscribe((state) => {
		localstate = state;
	});

	$: if (localInput || localstate) output();

	function output() {
		// change case of text based on state
		switch (localstate) {
			case State.upper:
				localInput = localInput.toUpperCase();
				break;
			case State.lower:
				localInput = localInput.toLowerCase();
				break;
			case State.sentence:
				localInput = localInput
					.toLowerCase()
					.replace(/(^\s*\w|[\.\!\?]\s*\w)/g, (c) => c.toUpperCase());
				break;
			case State.proper:
				// text proper case
				localInput = localInput.replace(/\w\S*/g, function (txt) {
					return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
				});
		}
	}
</script>

<svelte:head>
	<meta name="ToolName" content="Case Converter" />
</svelte:head>

<div class="flex flex-col lg:flex-row justify-center gap-3 w-full">
	<textarea
		bind:value={localInput}
		placeholder="Input / Output"
		cols="30"
		rows="7"
		class="w-full lg:w-96"
	/>
</div>
<div class="flex flex-col lg:flex-row justify-center gap-3 w-full">
	<CaseSwitcher state={State.lower} />
	<CaseSwitcher state={State.upper} />
	<CaseSwitcher state={State.sentence} />
	<CaseSwitcher state={State.proper} />
</div>

<style lang="scss">
	textarea {
		@apply textarea textarea-bordered border-white;
	}
</style>
