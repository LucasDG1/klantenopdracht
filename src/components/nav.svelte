<script>
	let y = 0;
	$: console.log(y)

	import logo from '../image/logo-removebg-preview.jpg'

</script>

<svelte:window bind:scrollY={y} />

<div class={`navbar fixed top-0 w-full z-50 overflow-hidden bg-black transition-[padding] duration-400 ${y >= 80 ? 'p-[0px_0px]' : 'p-[10px_0px]'}`}>
	<div class="grid grid-cols-2">
  <img   
  class="{`logo w-32 h-32 col-start-1 ${y > 80 ? 'w-16 h-16' : 'w-32 h-32'}`}"
  src={logo}
  alt="image2"
   />
  <div id="navbar-right" class="float-right col-start-2 mr-[20px] mt-[50px]">	
    <a class="active text-white text-center p-[12px] no-underline text-[18px] leading-[25px] rounded-[4px] hover:bg-[#A9A9A9] hover:text-white" href="#home">Home</a>
    <a class="text-white text-center p-[12px] no-underline text-[18px] leading-[25px] rounded-[4px] hover:bg-[#A9A9A9] hover:text-white" href="#contact">Inspiratie</a>
    <a class="text-white text-center p-[12px] no-underline text-[18px] leading-[25px] rounded-[4px] hover:bg-[#A9A9A9] hover:white" href="#about">Nieuws Brief</a>
	<a class="text-white text-center p-[12px] no-underline text-[18px] leading-[25px] rounded-[4px] hover:bg-[#A9A9A9] hover:white" href="#about">Tuinaanleg</a>
	<a class="text-white text-center p-[12px] no-underline text-[18px] leading-[25px] rounded-[4px] hover:bg-[#A9A9A9] hover:white" href="#about">06 5823512</a>
  </div>
 </div>
</div>

<style>

@media screen and (max-width: 580px) {
  .navbar {
    padding: 20px 10px !important; 
  }
  .navbar a {
    float: none;
    display: block;
    text-align: left;
  }
  #navbar-right {
    float: none;
  }
}
</style>

