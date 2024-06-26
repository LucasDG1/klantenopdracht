<script lang="ts">
	import Nav from '../components/nav.svelte';

	import Footer from '../components/footer.svelte';

	import '../app.css';

	import { fade } from 'svelte/transition';

	import Snap from '../components/snap.svelte'
	import { page } from '$app/stores';

	export let data;
</script>	
<Nav />

<Snap includeSnap={$page.url.pathname === '/' || $page.url.pathname === '/diensten'}>
	{#key data.pathname}
		<div in:fade={{ duration: 200, delay: 100 }} out:fade={{ duration: 200 }}>
			<div class="mt-[50px]">
				<slot />
			</div>
		</div>
	{/key}
<Footer />	
</Snap>