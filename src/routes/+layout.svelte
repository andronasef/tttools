<script lang="ts">
	import Footer from '$lib/components/footer.svelte';
	import Header from '$lib/components/header.svelte';
	import SvelteSeo from 'svelte-seo';
	import { fly } from 'svelte/transition';
	import '../app.postcss';
	import '../app.scss';

	export const prerender = true;
	export let data: any;

	// console.log(data);

	const pageTransitionDuration = 250;
</script>

<Header />
{#key data.slug}
	{#if data.tool}
		<SvelteSeo
			title={data.tool.name + '- tttools'}
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
		<slot class="space-y-5" />
	</div>
{/key}

<Footer />
