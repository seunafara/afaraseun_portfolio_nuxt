<template>
  <div class="min-h-screen bg-black relative">
    <Nuxt />
  </div>
</template>

<style>
html {
  background: black;
  scroll-behavior: smooth;
}

/* width */
::-webkit-scrollbar {
  width: 4px;
}

/* Track */
::-webkit-scrollbar-track {
  background: black;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: white;
  border-radius: 10px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555;
}
</style>
