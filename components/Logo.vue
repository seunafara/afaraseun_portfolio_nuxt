<template>
  <div
    class="as-container as-logo-container flex items-center px-4 py-3 fixed left-0 right-0 top-0 z-10"
  >
    <div class="as-blur absolute w-full h-full"></div>
    <div
      class="as-main-link w-full justify-between md:justify-start items-center"
    >
      <nuxt-link
        to="/"
        class="as-logo-gradient rounded-full py-1.5 px-2 font-body text-lg text-white font-black"
        >AS</nuxt-link
      >
      <nuxt-link class="text-gray-300 ml-6 hover:text-white " to="/hello"
        >Skills</nuxt-link
      >
      <nuxt-link class="text-gray-300 ml-4 hover:text-white " to="/hello"
        >About</nuxt-link
      >
      <nuxt-link
        class="text-gray-300 flex ml-4 py-2 px-4 rounded-full bg-green-200 hover:text-white "
        style="background:#ffffff0d"
        to="/hello"
        >Contact <span class="ml-1 hidden lg:block">Me</span></nuxt-link
      >
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
</style>
