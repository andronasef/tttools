import { writable } from 'svelte/store'
export enum State {
    upper,
    lower,
    sentence,
    proper
}
export const globState = writable(State.lower)
