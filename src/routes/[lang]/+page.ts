import { localeTranslations } from '$i18n/formatters'
import { error } from '@sveltejs/kit'

/** @type {import('../../../.svelte-kit/types/src/routes/[slug]/$types').PageLoad} */

export function load({ params }: any) {
	const lang = params.lang as Locales

	/* Providing Tools Categories for Page */
	// @ts-ignore
	const cats = (localeTranslations[lang].tools as any)

	if (cats) {
		return { cats: cats, slug: params.slug }
	} else {
		console.log("error")
		throw error(404, 'Not found')
	}
}
