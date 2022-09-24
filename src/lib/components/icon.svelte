<script lang="ts">
	import { loadIcon } from 'iconify-icon';

	export let icon: string;
	export let style: string;

	loadIcon(icon);
</script>

<iconify-icon {icon} class={style} />
