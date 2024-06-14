<script>
	import { onMount } from 'svelte';
	import { writable } from 'svelte/store';
	import hovenier1 from '../image/Hovenier-Almere.jpg';
	import hovenier2 from '../image/hovenier1.jpg';
	import hovenier3 from '../image/hovenier2.jpg';

	let currentIndex = writable(0);
	let images = [hovenier1, hovenier2, hovenier3];

	function nextSlide() {
		currentIndex.update((n) => (n + 1) % images.length);
	}

	function prevSlide() {
		currentIndex.update((n) => (n - 1 + images.length) % images.length);
	}

	onMount(() => {
		const interval = setInterval(nextSlide, 3000);
		return () => clearInterval(interval);
	});
</script>

<div class="relative w-full h-screen">
	{#each images as image, i}
		<div
			class={`absolute w-full h-full transition-opacity duration-500 ${$currentIndex === i ? 'opacity-100' : 'opacity-0'}`}
		>
			<img src={image} alt="Slideshow image" class="inset-0 h-full w-full object-cover" />
		</div>
	{/each}
	<button
		on:click={prevSlide}
		class="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-700 bg-opacity-50 text-white p-2 rounded z-10"
		>Prev</button
	>
	<button
		on:click={nextSlide}
		class="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-700 bg-opacity-50 text-white p-2 rounded z-10"
		>Next</button
	>
	<div class="absolute inset-0 bg-gray-700 opacity-60"></div>
	<div class="absolute inset-0 flex items-center justify-center">
		<h2 class="text-white text-3xl font-bold font-serif">Hendrik Hogendijk Hoveniers</h2>
	</div>
	<style>
		.opacity-100 {
			opacity: 1;
		}
		.opacity-0 {
			opacity: 0;
		}
	</style>
</div>
<div class="container mx-auto p-4 mt-16">
	<div class="grid grid-cols-1 md:grid-cols-6 gap-4 place-content-center mt-8">
		<div
			class="flex flex-col items-start col-span-1 md:col-start-2 md:col-span-4 lg:col-start-2 lg:col-span-2 xl:col-start-2 xl:col-span-2 w-full md:w-64"
		>
			<h2 class="text-3xl font-bold">Hallo</h2>
			<div class="text-2xl font-bold">Hallo2</div>
			<hr class="my-6 w-full md:w-64 rounded bg-[#525F4F] border-1" />
			<p class="text-sm">blablabalbalbalabl</p>
		</div>

		<hr class="h-1 my-6 w-full md:w-full rounded col-span-1 md:col-span-6 bg-[#525F4F] border-0" />

		<div
			class="flex flex-col items-start col-span-1 md:col-start-2 md:col-span-4 lg:col-start-5 lg:col-span-2 xl:col-start-5 xl:col-span-2 w-full md:w-64"
		>
			<h2 class="text-3xl font-bold">Hallo</h2>
			<div class="text-2xl font-bold">Hallo2</div>
			<hr class="my-6 w-full md:w-64 rounded bg-[#525F4F] border-1" />
			<p class="text-sm">blablabalbalbalabl</p>
		</div>

		<hr class="h-1 my-6 w-full md:w-full rounded col-span-1 md:col-span-6 bg-[#525F4F] border-0" />

		<div
			class="flex flex-col items-start col-span-1 md:col-start-2 md:col-span-4 lg:col-start-2 lg:col-span-2 xl:col-start-2 xl:col-span-2 w-full md:w-64"
		>
			<h2 class="text-3xl font-bold">Hallo</h2>
			<div class="text-2xl font-bold">Hallo2</div>
			<hr class="my-6 w-full md:w-64 rounded bg-[#525F4F] border-1" />
			<p class="text-sm">blablabalbalbalabl</p>
		</div>

		<hr class="h-1 my-6 w-full md:w-full rounded col-span-1 md:col-span-6 bg-[#525F4F] border-0" />

		<div
			class="flex flex-col items-start col-span-1 md:col-start-2 md:col-span-4 lg:col-start-5 lg:col-span-2 xl:col-start-5 xl:col-span-2 w-full md:w-64"
		>
			<h2 class="text-3xl font-bold">Hallo</h2>
			<div class="text-2xl font-bold">Hallo2</div>
			<hr class="my-6 w-full md:w-64 rounded bg-[#525F4F] border-1" />
			<p class="text-sm">blablabalbalbalabl</p>
		</div>

		<hr class="h-1 my-6 w-full md:w-full rounded col-span-1 md:col-span-6 bg-[#525F4F] border-0" />

		<div
			class="flex flex-col items-start col-span-1 md:col-start-2 md:col-span-4 lg:col-start-2 lg:col-span-2 xl:col-start-2 xl:col-span-2 w-full md:w-64"
		>
			<h2 class="text-3xl font-bold">Hallo</h2>
			<div class="text-2xl font-bold">Hallo2</div>
			<hr class="my-6 w-full md:w-64 rounded bg-[#525F4F] border-1" />
			<p class="text-sm">blablabalbalbalabl</p>
		</div>
	</div>
</div>
