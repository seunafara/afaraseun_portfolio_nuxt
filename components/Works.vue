<template>
  <div class="as-container">
    <div
      v-for="project in projects"
      :key="project.id"
      class="flex flex-col items-center mt-10 lg:mt-16"
    >
      <a
        data-aos="fade-up"
        data-aos-delay="550"
        data-aos-offset="10"
        data-aos-duration="1700"
        :href="project.link"
        target="_blank"
        class="text-white uppercase text-2xl text-center font-body font-extrabold lg:text-3xl"
      >
        {{ project.name }}
      </a>
      <p
        data-aos="fade-up"
        data-aos-delay="550"
        data-aos-offset="10"
        data-aos-duration="1700"
        class="text-lg text-gray-500 text-center mb-6 lg:text-xl"
      >
        {{ project.desc }}
      </p>
      <div class="preview-img-wrapper relative">
        <section
          class="work-link-overlay flex justify-center items-center"
          style="z-index:99"
        >
          <a
            :href="project.link"
            target="_blank"
            class="flex mt-4 py-4 px-6 text-gray-300 rounded-lg shadow-2xl"
            style="width:fit-content;background:#ffffff0d"
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
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              ></path>
            </svg>

            <span class="text-base">Visit Site</span></a
          >
        </section>
        <img
          data-aos="fade-up"
          data-aos-delay="550"
          data-aos-offset="10"
          data-aos-duration="1700"
          v-lazy="project.image"
          alt=""
          style="z-index:1"
        />
      </div>
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

<style>
.work-link-overlay-inner {
  background-color: #ff3cac;
  background-image: linear-gradient(
    225deg,
    #ff3cac 0%,
    #784ba0 50%,
    #2b86c5 100%
  );
}
.work-link-overlay {
  background-color: rgba(0, 0, 0, 0.7);
  position: absolute;
  width: -webkit-fill-available;
  height: 100%;
  display: flex;
  visibility: hidden;
  flex-direction: column;
  overflow: hidden;
  background-attachment: fixed;
  background-size: cover;
  background-color: rgb(29 29 29 / 52%);
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);
  opacity: 0;
  -webkit-transition: visibility 0s, opacity 0.5s linear;
  -moz-transition: visibility 0s, opacity 0.5s linear;
  -ms-transition: visibility 0s, opacity 0.5s linear;
  -o-transition: visibility 0s, opacity 0.5s linear;
  transition: visibility 0s, opacity 0.5s linear;
}

.preview-img-wrapper:hover > section {
  visibility: visible;
  opacity: 1;
  -webkit-transition: visibility 0s, opacity 0.5s linear;
  -moz-transition: visibility 0s, opacity 0.5s linear;
  -ms-transition: visibility 0s, opacity 0.5s linear;
  -o-transition: visibility 0s, opacity 0.5s linear;
  transition: visibility 0s, opacity 0.5s linear;
}
</style>
