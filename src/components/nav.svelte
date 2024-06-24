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
		class={`navbar fixed top-0 w-full z-50 bg-white transition-[padding,background-color]  border-black duration-400 ${y >= 80 ? 'p-[0px_0px] border-b ' : 'p-[10px_0px] border-b'}`}
	>
		<nav class="container px-6 py-2 mx-auto md:flex md:justify-between md:items-center">
			<div class="flex items-center justify-between">
				<a href="/">
					<img
						class={`logo w-32 h-32 transition-all duration-200 col-start-1 ${y > 80 ? 'w-[44px] h-[44px] mt-[5px]' : 'w-[60px] h-[60px]'}`}
						src={logo}
						alt="image2"
					/>
				</a>
			<div on:click={toggleNavbar} class="flex md:hidden">
				<button
					type="button"
					class="text-black hover:text-gray-400 focus:outline-none focus:text-gray-400"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke-width="2"
						stroke="currentColor"
						class="w-[28px] h-[28]"
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
				class="flex-col mt-8 gap-2 space-y-4 md:flex md:space-y-0 md:flex-row md:items-center md:space-x-10 md:mt-0 {showMenu
					? 'flex'
					: 'hidden'}"
			>
				<a
					on:click={closeNavbar}
					class="text-black text-base hover:bg-[#A9A9A9] hover:rounded hover:p-1"
					href="/">Home</a
				>
				<a
					on:click={closeNavbar}
					class="text-black text-base hover:bg-[#A9A9A9] hover:rounded hover:p-1"
					href="/foto-album">Inspiratie</a
				>
				<a
					on:click={closeNavbar}
					class="text-black text-base hover:bg-[#A9A9A9] hover:rounded hover:p-1"
					href="/contact">Contact Mij</a
				>
				<a
					on:click={closeNavbar}
					class="text-black text-base hover:bg-[#A9A9A9] hover:rounded hover:p-1"
					href="/diensten">Diensten</a
				>
				<a
					on:click={closeNavbar}
					class="text-black text-base hover:bg-[#A9A9A9] hover:rounded hover:p-1"
					href="">+31 6 12345678</a
				>
				<div class="space-y-2"></div>
			</div>
		</nav>
	</div>
</div>
