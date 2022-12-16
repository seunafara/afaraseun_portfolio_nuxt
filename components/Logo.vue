<template>
  <div class="as-container as-nav-pos fixed  top-0" style="z-index:100">
    <div class=" as-logo-container flex items-center px-4 py-3 ">
      <div class="as-blur absolute w-full h-full"></div>
      <div
        class="as-main-link w-full justify-between md:justify-start items-center"
      >
        <nuxt-link
          to="/"
          class="as-logo-gradient rounded-full py-1.5 px-2 font-body text-lg text-white font-black"
          >AS</nuxt-link
        >
        <a
          class="text-gray-300 ml-6 hover:text-white cursor-pointer"
          v-scroll-to="'#skills'"
          >Skills</a
        >
        <a
          class="text-gray-300 ml-4 hover:text-white cursor-pointer"
          v-scroll-to="'#about'"
          >About</a
        >
        <a
          class="text-gray-300 flex ml-4 py-2 px-4 rounded-full bg-green-200 hover:text-white "
          style="background:#ffffff0d"
          href="https://vue.vigowork.com/uploads/AFARA_SEUN_RESUME.pdf"
          download="AFARA_SEUN_RESUME.pdf"
          ><span class="mr-1 hidden lg:block">Download </span>Resume</a
        >
      </div>
    </div>
  </div>
</template>

<style>
.as-main-link {
  position: relative;
  z-index: 1;
  overflow: hidden;
  display: flex;
}
.as-main-link::before {
  content: "";
  position: absolute;
  background: inherit;
  z-index: -1;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}

.as-nav-pos {
  left: 0;
  right: 0;
}

@media (min-width: 768px) {
  .as-nav-pos {
    left: unset;
    right: unset;
  }
}
</style>
