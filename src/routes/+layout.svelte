<script lang="ts">
	import { setLocale } from '$i18n/i18n-svelte';
	import Breadcrumbs from '$lib/components/breadcrumbs.svelte';
	import Header from '$lib/components/header.svelte';
	import SvelteSeo from 'svelte-seo';
	import { fly } from 'svelte/transition';
	import '../app.postcss';
	import '../app.scss';
	import type { LayoutData } from './$types';

	export const prerender = true;
	export let data: LayoutData;

	setLocale(data.lang);

	const pageTransitionDuration = 250;
</script>

<Header />

<!-- Automated Metadata if it a Tool-->
{#key data.slug}
	{#if data.tool}
		<SvelteSeo
			title={data.tool.name + ' | tttools'}
			description={data.tool.description}
			openGraph={{
				title: data.tool.name,
				description: data.tool.description
			}}
		/>
	{/if}

	<div
		class="flex flex-col justify-center items-center min-h-[calc(100vh-4rem)] space-y-5 p-10"
		in:fly={{ y: 10, duration: pageTransitionDuration, delay: pageTransitionDuration + 50 }}
		out:fly={{ y: -10, duration: pageTransitionDuration }}
	>
		{#if data.tool}
			<Breadcrumbs cat={data.category[1]} catslug={data.category[0]} tool={data.tool} />
		{/if}
		<slot class="space-y-5" />
	</div>
{/key}

<!-- <Footer /> -->
