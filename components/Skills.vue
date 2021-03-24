<template>
  <div
    class="flex flex-col as-margin"
    style="margin-bottom:4rem;margin-top:4rem"
  >
    <h2
      class="text-white uppercase text-2xl text-center font-body font-extrabold lg:text-3xl mb-6"
    >
      My Skills
    </h2>
    <div class="as-skills-slide mb-4">
      <VueSlickCarousel v-bind="slickOptions">
        <div
          v-for="skill in skills"
          :key="skill.id"
          class="as-slide-card rounded-md bg-gray-900 shadow-2xl p-5 py-6 text-white flex items-center"
        >
          <img :src="skill.image" class="w-6 h-6" alt="" />
          <h4
            class="ml-2 text-sm md:text-base whitespace-nowrap text-white inline-flex"
          >
            {{ skill.name }}
          </h4>
        </div>
      </VueSlickCarousel>
    </div>
    <div class="as-skills-slide mb-4">
      <VueSlickCarousel v-bind="slickOptions2">
        <div
          v-for="skill in skills_second"
          :key="skill.id"
          class="as-slide-card rounded-md bg-gray-900 shadow-2xl p-5 py-6 text-white flex items-center"
        >
          <img :src="skill.image" class="w-6 h-6" alt="" />
          <h4
            class="ml-2 text-sm md:text-base whitespace-nowrap text-white inline-flex"
          >
            {{ skill.name }}
          </h4>
        </div>
      </VueSlickCarousel>
    </div>
    <div class="as-skills-slide mb-4">
      <VueSlickCarousel v-bind="slickOptions">
        <div
          v-for="skill in skills_third"
          :key="skill.id"
          class="as-slide-card rounded-md bg-gray-900 shadow-2xl p-5 py-6 text-white flex items-center"
        >
          <img :src="skill.image" class="w-6 h-6" alt="" />
          <h4
            class="ml-2 text-sm md:text-base whitespace-nowrap text-white inline-flex"
          >
            {{ skill.name }}
          </h4>
        </div>
      </VueSlickCarousel>
    </div>
  </div>
</template>

<script>
import skills from "../assets/data/skills.json";
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
export default {
  components: {
    VueSlickCarousel
  },

  data() {
    var self = this;
    return {
      skills: skills.skills,
      skills_second: skills.skills,
      skills_third: skills.skills,
      slickOptions: {
        centerMode: true,
        centerPadding: "20px",
        focusOnSelect: true,
        draggable: false,
        pauseOnHover: false,
        infinite: true,
        slidesToShow: 5,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear",
        arrows: false,
        autoplay: true,
        responsive: [
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 2
            }
          }
        ]
      },
      slickOptions2: {
        centerMode: true,
        centerPadding: "20px",
        focusOnSelect: true,
        pauseOnHover: false,
        draggable: false,
        infinite: true,
        slidesToShow: 5,
        speed: 3000,
        autoplaySpeed: 3000,
        cssEase: "linear",
        arrows: false,
        autoplay: true,
        rtl: true,
        responsive: [
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 2
            }
          }
        ]
      }
    };
  },
  mounted() {
    this.skills = this.$_.shuffle(this.skills);
    this.skills_second = this.$_.shuffle(this.skills_second);
    this.skills_third = this.$_.shuffle(this.skills_third);
  }
};
</script>

<style>
.as-slide-card {
  background: rgba(29, 29, 29, 0.5);
  display: flex !important;
  width: 90% !important;
  overflow: hidden;
}
</style>
