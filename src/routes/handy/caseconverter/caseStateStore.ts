import { writable } from 'svelte/store'
export enum State {
    UPPER,
    lower,
    Sentence,
    Proper
}
export const globState = writable(State.lower)
