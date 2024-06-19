<script>
    import onderhoud from '.../image/icon-tuinonderhoud.png';
    import aanleg from '.../image/icon-tuinaanleg.png';
    import ontwerp from '.../image/icon-tuinontwerp.png';
    import vijvers from '.../image/icon-zwemvijvers.png';
</script>



<div class="container mx-auto p-4 mt-16">
	<!-- welkom op website -->
	<div class="grid grid-cols-1 md:grid-cols-5 gap-4 place-items-start mt-8">
		<div
			class="flex flex-col items-start col-span-1 md:col-start-2 md:col-span-1 lg:col-start-2 lg:col-span-1 xl:col-start-2 xl:col-span-1 w-full md:w-64"
		>
			<h2 class="text-3xl font-bold">Welkom bij website van</h2>
			<div class="text-2xl text-green-600 font-bold">Hendrik Hogendijk</div>
			<hr class="my-6 w-full md:w-64 rounded bg-[#525F4F] border-1" />
			<p class="text-sm">
				De tuin is een belangrijke plek van de woning, waar je het liefst zoveel mogelijk tijd in
				doorbrengt. Bij Hendrik Hogendijk Hoveniers vinden wij het daarom belangrijk dat iedereen
				zich thuis voelt in zijn of haar tuin. Ik maak de tuin onderdeel van jouw ‘thuis’, door hem
				volledig op jouw wensen af te stemmen. Met behulp van mooie, natuurlijke en duurzame
				producten en materialen creëer ik een tuin, die garant staat voor een jarenlang plezierig
				buitenleven. Van een knusse veranda en een mooie vijver, tot een gezellig terras en een
				kleurrijke bloemenborder: ik stop al mijn energie erin.
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
			class="flex flex-col items-start max-md:hidden drop-shadow-2xl  col-span-1 md:col-start-2 md:col-span-1 lg:col-start-2 lg:col-span-1 xl:col-start-2 xl:col-span-1 w-full md:w-64"
		>
			<img src={aanleg} alt="quote" />
		</figure>
		<div
			class="flex flex-col items-start col-span-1 md:col-start-4 md:col-span-1 lg:col-start-4 lg:col-span-1 xl:col-start-4 xl:col-span-1 w-full md:w-64"
		>
			<h2 class="text-3xl font-bold">Quote</h2>
			<div class="text-2xl text-green-600 font-bold">Een hoveniers quote</div>
			<hr class="my-6 w-full md:w-64 rounded bg-[#525F4F] border-1" />
			<p class="text-sm">
				Inspiratie is handig als je naar een hoveniersbedrijf gaat omdat het helpt om je wensen
				duidelijk te maken. Met ideeën over wat je mooi vindt, kan de hovenier beter inspelen op
				jouw visie en creatief meedenken. Zo bespaar je tijd en krijg je sneller de tuin van je
				dromen.
			</p>
		</div>
		<hr class="h-1 my-6 w-full md:w-full rounded col-span-1 md:col-span-6 bg-[#525F4F] border-0" />
	</div>
	<!-- contact mij -->
	<div class="grid grid-cols-1 md:grid-cols-5 gap-4 place-items-start mt-8">
		<div
			class="flex flex-col items-start col-span-1 md:col-start-2 md:col-span-1 lg:col-start-2 lg:col-span-1 xl:col-start-2 xl:col-span-1 w-full md:w-64"
		>
			<h2 class="text-3xl font-bold">Contact Mij</h2>
			<div class="text-2xl text-green-600 underline font-bold">
				<a href="">Klik hier om mij te contacten</a>
			</div>
			<hr class="my-6 w-full md:w-64 rounded bg-[#525F4F] border-1" />
			<p class="text-sm">
				Een hovenier inschakelen is een goed idee omdat zij de expertise hebben om je tuin
				professioneel aan te leggen en te onderhouden. Ze kunnen je helpen bij het ontwerpen van een
				mooie en functionele buitenruimte, rekening houdend met jouw wensen en de eigenschappen van
				je tuin. Daarnaast bespaart een hovenier je tijd en moeite, zodat je optimaal kunt genieten
				van een perfect verzorgde tuin zonder zelf al het werk te hoeven doen.
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
			<h2 class="text-3xl font-bold">Inspiratie</h2>
			<div class="text-2xl text-green-600 underline font-bold">
				<a href="">vind hier inspiratie</a>
			</div>
			<hr class="my-6 w-full md:w-64 rounded bg-[#525F4F] border-1" />
			<p class="text-sm">
				Inspiratie is handig als je naar een hoveniersbedrijf gaat omdat het helpt om je wensen
				duidelijk te maken. Met ideeën over wat je mooi vindt, kan de hovenier beter inspelen op
				jouw visie en creatief meedenken. Zo bespaar je tijd en krijg je sneller de tuin van je
				dromen.
			</p>
		</div>
	</div>
</div>