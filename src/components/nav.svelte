<script>
	let y = 0;
	// $: out = y > -100 || ;

	import logo from '../image/logo-removebg-preview-removebg-preview.png';

	let showMenu = false;

	function toggleNavbar() {
		showMenu = !showMenu;
	}

	function closeNavbar() {
		showMenu = false;
	}
</script>

<svelte:window bind:scrollY={y} />

<div>
	<div
		class={`navbar fixed top-0 w-full z-50 bg-green-950 transition-[padding,background-color] border-black duration-400 ${y >= 2 ? 'p-0 border-b' : 'p-2 border-b'}`}
	>
		<nav class="container px-6 py-1 mx-auto md:flex md:justify-between md:items-center">
			<div class="flex items-center justify-between">
				<a href="/">
					<img
						class={`logo transition-all duration-200 col-start-1 ${y > 2 ? 'w-11 h-11' : 'w-12 h-12'}`}
						src={logo}
						alt="logo"
					/>
				</a>
				<div on:click={toggleNavbar} class="flex md:hidden">
					<button
						type="button"
						class="text-white hover:text-white focus:outline-none focus:text-white"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke-width="2"
							stroke="currentColor"
							class="w-7 h-7"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
							/>
						</svg>
					</button>
				</div>
			</div>
			<div
				class={`flex-col mt-8 gap-2 space-y-4 md:flex md:space-y-0 md:flex-row md:items-center md:space-x-6 md:mt-0 ${showMenu ? 'flex' : 'hidden'}`}
			>
				<a
					on:click={closeNavbar}
					class="text-white text-base md:text-lg hover:bg-gray-500 hover:rounded px-2 py-1"
					href="/">Home</a
				>
				<a
					on:click={closeNavbar}
					class="text-white text-base md:text-lg hover:bg-gray-500 hover:rounded px-2 py-1"
					href="/foto-album">Inspiratie</a
				>
				<a
					on:click={closeNavbar}
					class="text-white text-base md:text-lg hover:bg-gray-500 hover:rounded px-2 py-1"
					href="/contact">Contact Mij</a
				>
				<a
					on:click={closeNavbar}
					class="text-white text-base md:text-lg hover:bg-gray-500 hover:rounded px-2 py-1"
					href="/diensten">Diensten</a
				>
				<a
					on:click={closeNavbar}
					class="text-white text-base md:text-lg hover:bg-gray-500 hover:rounded px-2 py-1"
					href="https://wa.me/065823123">+31 6 12345678</a
				>
				<div class="space-y-2"></div>
			</div>
		</nav>
	</div>
</div>


