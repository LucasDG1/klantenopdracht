<script>
 import img1 from "../../image/a8db60_8430792b04494ef1985704c9dda7049d_mv2.webp";
 import img2 from "../../image/a8db60_0f63450d75f645bdab574047c56cf898_mv2.webp";
 import img3 from "../../image/a8db60_89729f86eabe4bf3b65d2f554cfecd6d_mv2.webp";
 import img4 from "../../image/a8db60_9f168361c12f4ad5800e1acf22f49080_mv2.jpeg";
 import img5 from "../../image/a8db60_b84128c7e416498ebd0c8972d3604240_mv2.jpeg";
 import img6 from "../../image/a8db60_fbe67e59c7c94339903b8a24155922f0_mv2.jpeg";
 import img7 from "../../image/Site foto mv2 (1).jpeg";
 import img8 from "../../image/Site foto mv2.jpeg";
 import img9 from "../../image/Site foto's mv2.webp";
 import background from "../../image/360_F_249687268_Yl4AswCdwBQS7NA6hczKq0pfnjQs02UP.jpg"
</script> 
<div id="default-carousel" class="relative w-full" data-carousel="slide">
    <!-- Carousel wrapper -->
    <div class="relative h-56 overflow-hidden rounded-lg md:h-96">
         <!-- Item 1 -->
        <div class="hidden duration-700 ease-in-out" data-carousel-item>
            <img src={img5} class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="...">
        </div>
        <!-- Item 2 -->
        <div class="hidden duration-700 ease-in-out" data-carousel-item>
            <img src={img4} class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="...">
        </div>
        <!-- Item 3 -->
        <div class="hidden duration-700 ease-in-out" data-carousel-item>
            <img src={img3} class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="...">
        </div>
        <!-- Item 4 -->
        <div class="hidden duration-700 ease-in-out" data-carousel-item>
            <img src={img2} class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="...">
        </div>
        <!-- Item 5 -->
        <div class="hidden duration-700 ease-in-out" data-carousel-item>
            <img src={img1} class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="...">
        </div>
    </div>
    <!-- Slider indicators -->
    <div class="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
        <button type="button" class="w-3 h-3 rounded-full" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
        <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
        <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
        <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 4" data-carousel-slide-to="3"></button>
        <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 5" data-carousel-slide-to="4"></button>
    </div>
    <!-- Slider controls -->
    <button type="button" class="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
        <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4"/>
            </svg>
            <span class="sr-only">Previous</span>
        </span>
    </button>
    <button type="button" class="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
        <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
            </svg>
            <span class="sr-only">Next</span>
        </span>
    </button>
</div>
<!-- <div class="bg-green-200">
    <div class="flex flex-col items-center">
        <div class="border-solid border-black border-4 rounded mt-7"><img alt="img" src={img1}></div>
        <div class="border-solid border-black border-4 rounded mt-7"><img alt="img" src={img2}></div>
        <div class="border-solid border-black border-4 rounded mt-7"><img alt="img" src={img3}></div>
        <div class="border-solid border-black border-4 rounded mt-7 h-7/12 w-7/12"><img alt="img" src={img4}></div>
        <div class="border-solid border-black border-4 rounded mt-7"><img alt="img" src={img5}></div>
        <div class="border-solid border-black border-4 rounded mt-7"><img alt="img" src={img6}></div>
        <div class="border-solid border-black border-4 rounded mt-7"><img alt="img" src={img7}></div>
        <div class="border-solid border-black border-4 rounded mt-7"><img alt="img" src={img8}></div>
        <div class="border-solid border-black border-4 rounded mt-7 mb-7"><img alt="img" src={img9}></div>
    </div>
</div> -->

