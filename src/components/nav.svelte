<nav class=" grid fixed top-0 z-50">
	<div class="bg-black w-32">
		<img
			class="w-full h-32"
			src="https://cdn.discordapp.com/attachments/1247088455469764670/1248542844965355530/logo-removebg-preview.jpg?ex=66640ba3&is=6662ba23&hm=66f8c300901dc2fb9305cf321190bc65125263e915d48540a4429381bdb4b2c1&"
			alt="image description"
		/>
	</div>
	<div class="col-start-2 w-screen bg-black">
		<div>2</div>
		<hr class="h-1 my-8 m-16 rounded bg-[#525F4F] border-0" />
		<div class="sm:hidden">
			<label for="tabs" class="sr-only">Select your country</label>
			<select
				id="tabs"
				class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
			>
				<option>Home</option>
				<option>Inspiratie</option>
				<option>Nieuws Brief</option>
				<option>Tuinaanleg</option>
				<option>06 5823512</option>
			</select>
		</div>
		<div class="hidden sm:flex gap-32 bg-black">
			<li>
				<a
					href="./routes/+page.svelte/"
					class="text-white duration-150 hover:text-lg font-bold"
					aria-current="page">Home</a
				>
			</li>
			<li>
				<a
					href="./routes/foto-album/+page.svelte/"
					class="text-white duration-150 hover:text-lg font-bold">Inspiratie</a
				>
			</li>
			<li><a href="#" class="text-white duration-150 hover:text-lg font-bold">Nieuws Brief</a></li>
			<li><a href="#" class="text-white duration-150 hover:text-lg font-bold">Tuinaanleg</a></li>
			<li><a href="#" class="text-white duration-150 hover:text-lg font-bold"> 06 5823512</a></li>
		</div>
	</div>
</nav>
