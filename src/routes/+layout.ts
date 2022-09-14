// @ts-check
import { tools } from '$lib/toolsdb'
import type { Tool } from '$lib/toolsdb/models'
export const prerender = true

export function load({ url }: any) {
    const slug = url.pathname.split('/').pop()
    const tool = tools.find((tool: Tool) => tool.slug === slug.split('/').pop())
    if (tool) {
        return { slug, tool }
    } else return { slug }
}


