<script>
    import Header from '../components/header.svelte';

    import Nav from '../components/nav.svelte';

    import Footer from '../components/footer.svelte';

    import '../app.css';
</script>

<Header />
<div class="mb-[h-32]">
<Nav />
</div>
<slot />

<Footer />