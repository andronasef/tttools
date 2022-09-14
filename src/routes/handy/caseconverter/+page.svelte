<script lang="ts">
	import { copyToClipboard } from '$lib/ulitites';
	import { globState, State } from './caseStateStore';
	import CaseSwitcher from './components/caseSwitcher.svelte';

	let localInput = '';
	let localOutput = '';
	let localstate: State;

	globState.subscribe((state) => {
		localstate = state;
	});

	$: if (localInput || localstate) localOutput = output() as string;

	function output(): string {
		if (localstate == State.UPPER) {
			return localInput.toUpperCase();
		} else if (localstate == State.Sentence) {
			return localInput.charAt(0).toUpperCase() + localInput.slice(1);
		} else if (localstate == State.lower) {
			return localInput.toLowerCase();
		} else if (localstate == State.Proper) {
			return localInput.replace(/\w\S*/g, function (txt) {
				return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
			});
		}
		return '';
	}
</script>

<svelte:head>
	<meta name="ToolName" content="Case Converter" />
</svelte:head>

<div class="flex flex-col lg:flex-row gap-3">
	<textarea bind:value={localInput} placeholder="Input" cols="30" rows="7" />
	<textarea
		on:keydown={(e) => e.preventDefault()}
		on:click={() => copyToClipboard(localOutput)}
		bind:value={localOutput}
		placeholder="Output"
		cols="30"
		rows="7"
		class="!cursor-copy"
	/>
</div>
<div class="flex flex-col lg:flex-row justify-center gap-3 w-full">
	<CaseSwitcher state={State.lower} />
	<CaseSwitcher state={State.UPPER} />
	<CaseSwitcher state={State.Sentence} />
	<CaseSwitcher state={State.Proper} />
</div>

<style lang="scss">
	textarea {
		@apply textarea textarea-bordered border-white;
	}
</style>
