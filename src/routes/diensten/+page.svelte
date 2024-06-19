<script>
	import onderhoud from '../../image/icon-tuinonderhoud.png';
	import aanleg from '../../image/icon-tuinaanleg.png';
	import ontwerp from '../../image/icon-tuinontwerp.png';
	import vijvers from '../../image/icon-zwemvijvers.png';
</script>

<div class="container mx-auto p-4 mt-16">
	<!-- welkom op website -->
	<div class="grid grid-cols-1 md:grid-cols-5 gap-4 place-items-start mt-8">
		<div
			class="flex flex-col items-start col-span-1 md:col-start-2 md:col-span-1 lg:col-start-2 lg:col-span-1 xl:col-start-2 xl:col-span-1 w-full md:w-64"
		>
			<div class="text-2xl text-green-600 font-bold">Tuinontwerp</div>
			<hr class="my-6 w-full md:w-64 rounded bg-[#525F4F] border-1" />
			<p class="text-sm">
				Een mooie tuin valt of staat bij een goed tuinontwerp. Als het op ontwerpen aankomt, maakt
				Hendrik Hogendijk het verschil.
			</p>
		</div>
		<figure
			class="flex flex-col items-start max-md:hidden drop-shadow-2xl col-span-1 md:col-start-4 md:col-span-1 lg:col-start-4 lg:col-span-1 xl:col-start-4 xl:col-span-1 w-full md:w-64"
		>
			<img src={onderhoud} alt="photopfp" />
		</figure>

		<hr class="h-1 my-6 w-full md:w-full rounded col-span-1 md:col-span-6 bg-[#525F4F] border-0" />
	</div>
	<!-- qoute -->
	<div class="grid grid-cols-1 md:grid-cols-5 gap-4 place-items-start mt-8">
		<figure
			class="flex flex-col items-start max-md:hidden drop-shadow-2xl col-span-1 md:col-start-2 md:col-span-1 lg:col-start-2 lg:col-span-1 xl:col-start-2 xl:col-span-1 w-full md:w-64"
		>
			<img src={aanleg} alt="quote" />
		</figure>
		<div
			class="flex flex-col items-start col-span-1 md:col-start-4 md:col-span-1 lg:col-start-4 lg:col-span-1 xl:col-start-4 xl:col-span-1 w-full md:w-64"
		>
			<div class="text-2xl text-green-600 font-bold">Tuinaanleg</div>
			<hr class="my-6 w-full md:w-64 rounded bg-[#525F4F] border-1" />
			<p class="text-sm">
				Het aanleggen van een tuin doen ik altijd vanuit dezelfde drive: ik wil er iets moois van
				maken.
			</p>
		</div>
		<hr class="h-1 my-6 w-full md:w-full rounded col-span-1 md:col-span-6 bg-[#525F4F] border-0" />
	</div>
	<!-- contact mij -->
	<div class="grid grid-cols-1 md:grid-cols-5 gap-4 place-items-start mt-8">
		<div
			class="flex flex-col items-start col-span-1 md:col-start-2 md:col-span-1 lg:col-start-2 lg:col-span-1 xl:col-start-2 xl:col-span-1 w-full md:w-64"
		>
			<div class="text-2xl text-green-600  font-bold">Tuinonderhoud</div>
			<hr class="my-6 w-full md:w-64 rounded bg-[#525F4F] border-1" />
			<p class="text-sm">
				Een mooie tuin verdient het juiste onderhoud. Immers, goed onderhoud is een essentiële
				voorwaarde voor een tuin die het hele jaar door mooi blijft.
			</p>
		</div>
		<figure
			class="flex flex-col items-start max-md:hidden drop-shadow-2xl col-span-1 md:col-start-4 md:col-span-1 lg:col-start-4 lg:col-span-1 xl:col-start-4 xl:col-span-1 w-full md:w-64"
		>
			<img src={ontwerp} alt="contactmij" />
		</figure>
		<hr class="h-1 my-6 w-full md:w-full rounded col-span-1 md:col-span-6 bg-[#525F4F] border-0" />
	</div>

	<!-- inspiratie -->
	<div class="grid grid-cols-1 md:grid-cols-5 gap-4 place-items-start mt-8">
		<figure
			class="flex flex-col items-start max-md:hidden drop-shadow-2xl col-span-1 md:col-start-2 md:col-span-1 lg:col-start-2 lg:col-span-1 xl:col-start-2 xl:col-span-1 w-full md:w-64"
		>
			<img src={vijvers} alt="contactmij" />
		</figure>
		<div
			class="flex flex-col items-start mb-5 col-span-1 md:col-start-4 md:col-span-1 lg:col-start-4 lg:col-span-1 xl:col-start-4 xl:col-span-1 w-full md:w-64"
		>
			<div class="text-2xl text-green-600  font-bold">Zwemvijvers</div>
			<hr class="my-6 w-full md:w-64 rounded bg-[#525F4F] border-1" />
			<p class="text-sm">
				Zwemvijvers, is één van mjn grootste passies. En gelukkig, ze winnen aan steeds meer
				populariteit, waardoor ik er veel ervaring mee heb opgebouwd.
			</p>
		</div>
	</div>
</div>
