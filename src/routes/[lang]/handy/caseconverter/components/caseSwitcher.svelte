<script lang="ts">
	import { globState } from '../caseStateStore';

	enum State {
		upper,
		lower,
		sentence,
		proper
	}
	export let state: State = State.lower;
	let nowState = state;

	globState.subscribe((state) => {
		nowState = state;
	});
</script>

<button
	on:click={() => {
		globState.set(state);
	}}
	class={state == nowState ? 'btn btn-primary' : 'btn btn-outline'}
>
	{State[state] + ' Case'}
</button>

<style>
</style>
