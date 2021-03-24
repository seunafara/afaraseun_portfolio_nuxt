<template>
  <div class="as-container">
    <div
      v-for="project in projects"
      :key="project.id"
      class="flex flex-col items-center mt-10 lg:mt-16"
    >
      <a
        data-aos="fade-up"
        :href="project.link"
        target="_blank"
        class="text-white uppercase text-2xl text-center font-body font-extrabold lg:text-3xl"
      >
        {{ project.name }}
      </a>
      <p
        data-aos="fade-up"
        class="text-lg text-gray-500 text-center mb-6 lg:text-xl"
      >
        {{ project.desc }}
      </p>
      <img data-aos="fade-up" v-lazy="project.image" alt="" />
    </div>
  </div>
</template>

<script>
import projects from "../assets/data/projects.json";
export default {
  data() {
    return {
      projects: projects.projects
    };
  }
};
</script>

<style></style>
