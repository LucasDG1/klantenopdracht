<script>
	let y = 0;
	$: console.log(y);

	import logo from '../image/logo-removebg-preview.jpg';

	let showMenu = false;

	function toggleNavbar() {
		showMenu = !showMenu;
	}
</script>

<svelte:window bind:scrollY={y} />

<div>
	<div
		class={`navbar fixed top-0 w-full z-50 overflow-hidden bg-black transition-[padding] duration-400 ${y >= 80 ? 'p-[0px_0px]' : 'p-[10px_0px]'}`}
	>
		<nav class="container px-6 py-2 mx-auto md:flex md:justify-between md:items-center">
			<div class="flex items-center justify-between">
				<img
					class={`logo w-32 h-32 col-start-1 ${y > 80 ? 'w-[64px] h-[64px] mt-[20px]' : 'w-32 h-32'}`}
					src={logo}
					alt="image2"
				/>

				<div on:click={toggleNavbar} class="flex md:hidden">
					<button
						type="button"
						class="text-gray-100 hover:text-gray-400 focus:outline-none focus:text-gray-400"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke-width="2"
							stroke="currentColor"
							class="w-8 h-8"
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
				class="flex-col mt-8 space-y-4 md:flex md:space-y-0 md:flex-row md:items-center md:space-x-10 md:mt-0 {showMenu
					? 'flex'
					: 'hidden'}"
			>
				<a class="text-gray-100 text-xl hover:bg-[#A9A9A9] hover:rounded" href="/home">Home</a>
				<a class="text-gray-100 text-xl hover:bg-[#A9A9A9] hover:rounded" href="/blog">Inspiratie</a
				>
				<a class="text-gray-100 text-xl hover:bg-[#A9A9A9] hover:rounded" href="/contact"
					>Contact Mij</a
				>
				<a class="text-gray-100 text-xl hover:bg-[#A9A9A9] hover:rounded" href="/about"
					>06 5823123</a
				>
				<div class="space-y-2"></div>
			</div>
		</nav>
	</div>
</div>
