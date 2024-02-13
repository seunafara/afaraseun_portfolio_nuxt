<template>
  <div
    id="about"
    class="flex flex-col-reverse lg:flex-row  justify-between as-container as-margin "
    style="margin-bottom:0rem;margin-top:unset;padding:5rem 0rem;"
  >
    <div class="flex flex-col mt-6 lg:mt-0 w-full lg:w-5/12">
      <div class="flex flex-row justify-start items-center">
        <div class="rounded-full p-2 as-about-me">
          <!-- <img src="~/assets/img/about_me.png" alt="" class="w-20 h-20" /> -->
        </div>
        <div class="flex ml-4 flex-col">
        </div>
      </div>
      <div class="mt-4">
        <p class="text-white text-base">
          That's all! Say NO to internet spam! If you play EAFC, add me up: <b>cosmic-pager1</b>. See ya!
        </p>
      </div>
      <a
        href="mailto:seunvigo@gmail.com"
        class="flex mt-4 py-4 px-6 bg-gray-300 text-gray-700 rounded-lg shadow-2xl hover:shadow-inner"
        style="width:fit-content;"
      >
        <svg
          class="w-6 h-6 mr-2"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          ></path>
        </svg>
        <span class="text-base">Contact me</span></a
      >
    </div>
    <!--- Code editor -->
    <div
      class="rounded-md w-full   lg:w-2/4  shadow-md"
      style="background: #171717"
    >
      <div
        class="flex rounded-t-md  w-full p-4 pb-0 "
        style="background: #252525"
      >
        <div class="flex items-center ">
          <div class="w-2.5 h-2.5 rounded-full bg-red-700 mr-2"></div>
          <div class="w-2.5 h-2.5 rounded-full bg-green-700 mr-2"></div>
          <div class="w-2.5 h-2.5 rounded-full bg-yellow-400 mr-2"></div>
        </div>
        <div class="p-2.5 px-3 ml-2 rounded-t-lg" style="background: #171717">
          <h4 class="text-red-50 text-base">Hobbies.js</h4>
        </div>
      </div>
      <div class="flex flex-col py-2 px-4">
        <div class="flex flex-col">
          <p class="text-white text-base mb-4">
            <span class="pr-2" style="color:#6272a480">1</span
            ><span class="pr-2" style="color:#ff79c6">const</span
            ><span class="pr-2" style="color:#50fa7b">myHobbies</span
            ><span class="pr-2">=</span><span class="pr-2">[</span
            ><span class="pr-1">'</span><span class="pr-1">☕</span
            ><span class="pr-2">'</span><span class="pr-2">,</span
            ><span class="pr-1">'</span><span class="pr-1">💻</span
            ><span class="pr-2">'</span><span class="pr-2">,</span
            ><span class="pr-2">'</span><span class="pr-1">🍷</span
            ><span class="pr-2">'</span><span class="pr-2">,</span>
            <span class="pr-2">'</span><span class="pr-1">🎵</span
            ><span class="pr-2">'</span><span class="pr-2">,</span>
            <span class="pr-2">'</span><span class="pr-1">🍧</span
            ><span class="pr-2">'</span><span class="pr-2">,</span>
            <span class="pr-2">'</span><span class="pr-1">🍗</span
            ><span class="pr-1">'</span>
            <span>]</span>
          </p>
          <p class="text-white text-base mb-1">
            <span class="pr-2" style="color:#6272a480">2</span>
            <span class="pr-2.5 text-pink-400">for</span
            ><span class="pr-1 text-purple-200">(</span
            ><span class="pr-2 text-purple-500 ">let</span>
            <span class="pr-2 text-purple-200">item</span>
            <span class="pr-2 text-purple-500 ">in</span>
            <span class="pr-0" style="color:#50fa7b">myHobbies</span>
            <span class="pr-3 text-purple-200">)</span>
            <span class="pr-3 text-purple-200">{</span>
          </p>
          <p class="text-white text-base mb-1">
            <span class="pr-10" style="color:#6272a480">3</span>
            <span class=" text-purple-200">console</span>
            <span class="text-white">.</span>
            <span class="text-pink-400">log</span>
            <span class="text-pink-400">(</span
            ><span class="pr-0" style="color:#50fa7b">item</span>
            <span class="pr-1 text-pink-400">)</span
            ><span class="text-purple-200">;</span>
          </p>
          <p class="text-white text-base mb-3">
            <span class="pr-2" style="color:#6272a480">4</span>
            <span class="pr-2.5 text-pink-400">}</span>
          </p>

          <p class="text-white text-base mb-1">
            <span class="pr-2" style="color:#6272a480">5</span>
            <span class="pr-2.5 text-pink-400">for</span
            ><span class="pr-1 text-purple-200">(</span
            ><span class="pr-2 text-purple-500 ">let</span>
            <span class="pr-2 text-purple-200">item</span>
            <span class="pr-2 text-purple-500 ">of</span>
            <span class="pr-0" style="color:#50fa7b">myHobbies</span>
            <span class="pr-3 text-purple-200">)</span>
            <span class="pr-3 text-purple-200">{</span>
          </p>
          <p class="text-white text-base mb-1">
            <span class="pr-10" style="color:#6272a480">6</span>
            <span class=" text-purple-200">console</span>
            <span class="text-white">.</span>
            <span class="text-pink-400">log</span>
            <span class="text-pink-400">(</span
            ><span class="pr-0" style="color:#50fa7b">item</span>
            <span class="pr-1 text-pink-400">)</span
            ><span class="text-purple-200">;</span>
          </p>
          <p class="text-white text-base mb-2">
            <span class="pr-2" style="color:#6272a480">7</span>
            <span class="pr-2.5 text-pink-400">}</span>
          </p>
          <p class="text-white text-base mb-2">
            <span class="pr-2" style="color:#6272a480">8</span>
            <span class="pr-2 text-pink-400" style="color:#6272a480">
              <span class="pr-1">//</span> 1,2,3,4,5</span
            >
          </p>
          <p class="text-white text-base mb-1">
            <span class="pr-2" style="color:#6272a480">9</span>
            <span class="pr-2 text-pink-400" style="color:#6272a480">
              <span class="pr-1">//</span> ☕, 💻, 🍷, 🎵, 🍧, 🍗</span
            >
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
