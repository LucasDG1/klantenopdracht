<script>
	import { onMount } from 'svelte';
	import { writable } from 'svelte/store';
	import hovenier1 from '../image/Hovenier-Almere.jpg';
	import tuin1 from '../image/thumbnail_tuin1.jpg';
	import tuin2 from '../image/thumbnail_tuin2.jpg';
	import tuin3 from '../image/tuin3.jpg';
	import qoute from '../image/qoute.jpg';
	import contactmij from '../image/contact.png';
	import inspiratie from '../image/Site foto mv2.jpeg';
	import pfp from '../image/pfp.jpg';

	let currentIndex = writable(0);
	let images = [hovenier1, tuin1, tuin2, tuin3];

	function nextSlide() {
		currentIndex.update((n) => (n + 1) % images.length);
	}

	function prevSlide() {
		currentIndex.update((n) => (n - 1 + images.length) % images.length);
	}

	onMount(() => {
		const interval = setInterval(nextSlide, 4000);
		return () => clearInterval(interval);
	});
</script>

	<div class="relative w-full h-screen snap-start ">
		{#each images as image, i}
			<div class={`absolute w-full h-full transition-opacity duration-500 ${$currentIndex === i ? 'opacity-100' : 'opacity-0'}`}>
				<img src={image} alt="Slideshow image" class="inset-0 h-full w-full object-cover" />
			</div>
		{/each}
		<div class="absolute inset-0 bg-gray-700 opacity-60"></div>
		<div class="absolute inset-0 flex flex-col justify-items-start gap-4 items-center justify-center">
			<h1 class="text-white text-3xl drop-shadow-lg max-sm:ml-16 font-bold">Hendrik Hogendijk Hoveniers</h1>
			<h2 class="text-white text-2xl drop-shadow-lg max-sm:ml-16 max-md:ml-32 font-bold">"Een mooie tuin brengt vreugde en verbetert de leefomgeving."</h2>
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

	
		<!-- welkom op website -->
		<div class="grid grid-cols-1 md:grid-cols-6 gap-4 place-items-start pt-16 md:pt-40 transition duration-300 snap-start">
			<div class="flex flex-col items-start col-span-2 md:col-start-2 md:col-span-2 lg:col-start-2 lg:col-span-2 xl:col-start-2 xl:col-span-2  w-full">
				<h2 class="text-4xl font-bold ml-2">Welkom bij de website van</h2>
				<div class="text-3xl text-green-600 font-bold ml-3 ">Hendrik Hogendijk</div>
				<hr class="my-6 w-full md:w-64 rounded bg-[#525F4F] border-1" />
				<p class="text-lg w-full ml-4">
					De tuin is een belangrijke plek van de woning, waar je het liefst zoveel mogelijk tijd in doorbrengt. Bij Hendrik Hogendijk Hoveniers vinden wij het daarom belangrijk dat iedereen zich thuis voelt in zijn of haar tuin. Ik maak de tuin onderdeel van jouw ‘thuis’, door hem volledig op jouw wensen af te stemmen. Met behulp van mooie, natuurlijke en duurzame producten en materialen creëer ik een tuin, die garant staat voor een jarenlang plezierig buitenleven. Van een knusse veranda en een mooie vijver, tot een gezellig terras en een kleurrijke bloemenborder: ik stop al mijn energie erin.
				</p>
			</div>
			<figure class="flex flex-col items-start max-md:hidden drop-shadow-2xl col-span-1 md:col-start-5 md:col-span-1 lg:col-start-5 lg:col-span-1 xl:col-start-5 xl:col-span-1 w-full md:w-80">
				<img src={pfp} alt="photopfp" class="rounded-full"/>
				<div class="pl-24">Hendrik Hogendijk</div>
			</figure>
		</div>

		<div class="grid grid-cols-1 md:grid-cols-5 gap-4 place-items-start md:pt-8">
			<hr class="my-16 w-full md:w-full rounded col-span-1 md:col-span-6 bg-white border-1" />
		</div>

		<!-- qoute -->
		<div class="grid grid-cols-1 md:grid-cols-5 gap-4 place-items-start pt-16 md:pt-40 transition duration-300 snap-start ">
			<figure class="flex flex-col items-start max-md:hidden drop-shadow-2xl col-span-1 md:col-start-1 md:col-span-2 lg:col-start-2 lg:col-span-1 xl:col-start-2 xl:col-span-1 w-full md:w-[350px]">
				<img src={qoute} alt="quote" class="w-[350px] h-[350px] rounded border-1" />
			</figure>
			<div class="flex flex-col items-start col-span-1 md:col-start-4 md:col-span-1 lg:col-start-4 lg:col-span-1 xl:col-start-4 xl:col-span-1 w-full md:w-64">
				<h2 class="text-4xl font-bold ml-2">Quote</h2>
				<div class="text-3xl text-green-600 font-bold ml-3">Een hoveniers quote</div>
				<hr class="my-6 w-full md:w-64 rounded bg-[#525F4F] border-1" />
				<p class="text-lg ml-4">
					Inspiratie is handig als je naar een hoveniersbedrijf gaat omdat het helpt om je wensen duidelijk te maken. Met ideeën over wat je mooi vindt, kan de hovenier beter inspelen op jouw visie en creatief meedenken. Zo bespaar je tijd en krijg je sneller de tuin van je dromen.
				</p>
			</div>
		</div>

		<div class="grid grid-cols-1 md:grid-cols-5 gap-4 place-items-start md:pt-36">
			<hr class="my-16 w-full md:w-full rounded col-span-1 md:col-span-6 bg-white border-1" />
		</div>

		<!-- contact mij -->
		<div class="grid grid-cols-1 md:grid-cols-6 gap-4 place-items-start pt-16 md:pt-40 transition duration-300 snap-start">
			<div class="flex flex-col items-start col-span-1 md:col-start-2 md:col-span-2 lg:col-start-2 lg:col-span-2 xl:col-start-2 xl:col-span-2	 w-full ">
				<h2 class="text-4xl font-bold ml-2">Contact Mij</h2>
				<div class="text-3xl text-green-600 underline font-bold ml-3">
					<a href="/contact">Klik hier om mij te contacten</a>
				</div>
				<hr class="my-6 w-full md:w-64 rounded bg-[#525F4F] border-1" />
				<p class="text-lg ml-4">
					Een hovenier inschakelen is een goed idee omdat zij de expertise hebben om je tuin professioneel aan te leggen en te onderhouden. Ze kunnen je helpen bij het ontwerpen van een mooie en functionele buitenruimte, rekening houdend met jouw wensen en de eigenschappen van je tuin. Daarnaast bespaart een hovenier je tijd en moeite, zodat je optimaal kunt genieten van een perfect verzorgde tuin zonder zelf al het werk te hoeven doen.
				</p>
			</div>
			<figure class="flex flex-col items-start max-md:hidden drop-shadow-2xl col-span-1 md:col-start-5 md:col-span-1 lg:col-start-5 lg:col-span-1 xl:col-start-5 xl:col-span-1 w-full md:w-64">
				<img src={contactmij} alt="contactmij" class="" />
			</figure>
		</div>

		<div class="grid grid-cols-1 md:grid-cols-5 gap-4 place-items-start drop-shadow-2xl	md:pt-28">
			<hr class="my-16 w-full md:w-full rounded col-span-1 md:col-span-6 bg-white border-1 " />
		</div>

		<!-- inspiratie -->
		<div class="grid grid-cols-1 md:grid-cols-5 gap-4 place-items-start mt-8  transition duration-300 snap-start mb-60 pt-16 md:pt-32 ">
			<figure class="flex flex-col items-start max-md:hidden drop-shadow-2xl col-span-2 md:col-start-2 md:col-span-2 lg:col-start-2 lg:col-span-2 xl:col-start-2 xl:col-span-2 w-full ">
				<img src={inspiratie} alt="contactmij" class="rounded w-[400px]"/>
			</figure>
			<div class="flex flex-col items-start mb-5 col-span-1 md:col-start-4 md:col-span-1 lg:col-start-4 lg:col-span-1 xl:col-start-4 xl:col-span-1 w-full md:w-64">
					<h2 class="text-4xl font-bold ml-2">Inspiratie</h2>
					<div class="text-3xl text-green-600 underline font-bold ml-3">
						<a href="/foto-album">vind hier inspiratie</a>
					</div>
					<hr class="my-6 w-full md:w-64 rounded bg-[#525F4F] border-1" />
					<p class="text-lg ml-4">
						Inspiratie is handig als je naar een hoveniersbedrijf gaat omdat het helpt om je wensen duidelijk te maken. Met ideeën over wat je mooi vindt, kan de hovenier beter inspelen op jouw visie en creatief meedenken. Zo bespaar je tijd en krijg je sneller de tuin van je dromen.
					</p>
			</div>
		</div>





