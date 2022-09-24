import { localeTranslations } from '$i18n/formatters'
import { locale } from '$i18n/i18n-svelte'
import { get } from 'svelte/store'

// @ts-ignore
export const db: unknown = (localeTranslations[get(locale)])
