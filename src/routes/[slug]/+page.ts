import { toolsGroupslist } from '$lib/toolsdb'
import { error } from '@sveltejs/kit'

/** @type {import('../../../.svelte-kit/types/src/routes/[slug]/$types').PageLoad} */
// @ts-ignore
export function load({ params }) {
    if (toolsGroupslist[params.slug]) {
        return { tools: toolsGroupslist[params.slug].list }
    } else {
        console.log("error")
        throw error(404, 'Not found')
    }
}
