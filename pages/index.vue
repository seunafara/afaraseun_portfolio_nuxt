<template>
  <div class="container font-body mx-auto relative">
    <Logo />
    <Hero />
    <Works />
    <Skills />
    <About />
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: `Full Stack Engineer`,
      titleTemplate: "%s | Afara Seun",
      meta: [
        {
          name: "description",
          content:
            "A software engineer helping businesses get more clients with their web or mobile applications. If you're interested in helping your clients live happier by using your platform, I'd love to help you grow your business. Afara Seun"
        },
        { property: "og:site_name", content: "Afara Seun" },
        {
          property: "og:description",
          content:
            "A software engineer helping businesses get more clients with their web or mobile applications. If you're interested in helping your clients live happier by using your platform, I'd love to help you grow your business. Afara Seun"
        },
        { property: "og:type", content: "website" },
        { property: "og:url", content: "https://afaraseun.com/" },
        {
          name: "keywords",
          content:
            "Afara Seun, Afara Seun Abiola,About Afara Seun,Who is Afara Seun, Software engineer Afara seun"
        }
      ]
    };
  }
};
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
@apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
</style>
