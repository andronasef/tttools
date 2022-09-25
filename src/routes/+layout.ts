// @ts-check
import { localeTranslations } from '$i18n/formatters'
import type { Locales } from '$i18n/i18n-types'
import { baseLocale, locales } from '$i18n/i18n-util'
import { loadLocaleAsync } from '$i18n/i18n-util.async'
import { redirect } from '@sveltejs/kit'
import { replaceLocaleInUrl } from '../utils'
import type { LayoutLoad } from './$types'

export const prerender = true

// @ts-ignore
export const load: LayoutLoad<{ locale: Locales }> = async ({ url, params }) => {

    /* Localization */
    const lang = params.lang as Locales

    // redirect to base locale if language is not present
    if (!locales.includes(lang || !url.pathname.includes('/' + lang))) {
        throw redirect(302, replaceLocaleInUrl(url.pathname, baseLocale))
    }

    await loadLocaleAsync(lang)
    const slug = url.pathname.split('/').pop()
    const catslug = url.pathname.split('/')[url.pathname.split('/').length - 2]

    /* Metadata for tool */
    let thetool
    let thecategory
    try {
        // @ts-ignore
        thetool = localeTranslations[lang].tools[catslug].list[slug]
        // @ts-ignore
        thecategory = (localeTranslations[lang].tools)[catslug]



    } catch (error) {

    }


    return { lang, slug, tool: thetool ?? null, category: [catslug, thecategory] ?? null }

}



