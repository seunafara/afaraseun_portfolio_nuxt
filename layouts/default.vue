<template>
  <div class="min-h-screen bg-black relative">
    <Nuxt />
  </div>
</template>

<script>
export default {
  head() {
    return {}
  },
  mounted: () => {
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());

    gtag('config', 'G-LP7C3J39BX');
  },
}
</script>

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
