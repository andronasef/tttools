import { localeTranslations } from '$i18n/formatters'
import { error } from '@sveltejs/kit'

/** @type {import('../../../.svelte-kit/types/src/routes/[slug]/$types').PageLoad} */

export function load({ params }: any) {
    const lang = params.lang as Locales

    // @ts-ignore
    const tools = (localeTranslations[lang].tools as any)[params.slug]

    if (tools) {
        return { tools: tools, slug: params.slug }
    } else {
        console.log("error")
        throw error(404, 'Not found')
    }
}
