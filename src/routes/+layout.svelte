<script>

    import Nav from '../components/nav.svelte';

    import Footer from '../components/footer.svelte';

    import '../app.css';
</script>



<Nav />
<div class="mt-32">
<slot />
</div>
<Footer />