<script lang="ts">
	import Nav from '../components/nav.svelte';

	import Footer from '../components/footer.svelte';

	import '../app.css';

	import { fade } from 'svelte/transition';

	export let data;
</script>

<Nav />
{#key data.pathname}
	<div in:fade={{ duration: 200, delay: 100 }} out:fade={{ duration: 200 }}>
		<div class="mt-[67px]">
			<slot />
		</div>
	</div>
{/key}
<Footer />
