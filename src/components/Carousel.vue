<template>
  <div class="swiper-container">

      <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="(content, index) in contents" :key="index" >
              {{ content }}
          </div>
       </div>

    <div class="button-container">
          <button class="swiper-previous" @click="prevSlide" :disabled="currentIndex === 0"> 
             Previous 
           </button>
          <button class="swiper-next" @click="nextSlide" :disabled="currentIndex === contents.length - 3">
             Next 
           </button>
     </div>
  </div>

</template>

<script setup>
import Swiper from "swiper";
import "swiper/swiper-bundle.css";
import { onMounted, ref } from "vue";

const currentIndex = ref(0);
const contents = [
  "Content 1",
  "Content 2",
  "Content 3",
  "Content 4",
  "Content 5",
  "Content 6",
];

let swiper = null;

onMounted(() => {
  swiper = new Swiper(".swiper-container", {
    slidesPerView: 3,
    spaceBetween: 10,
  });
});

function prevSlide() {
  if (currentIndex.value > 0) {
    currentIndex.value--;
    swiper.slidePrev();
  }
}

function nextSlide() {
  if (currentIndex.value < contents.length - 1) {
    currentIndex.value++;
    swiper.slideNext();
  }
}
</script>

<style scoped>
.swiper-container {
  width: 100%;
  height: 100%;
  margin: 100px auto;
  width: 80%;
  overflow: hidden;
  white-space: nowrap;
}
.button-container {
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  width: 80%;
}
.swiper-slide {
  text-align: center;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  position: relative;
}
.swiper-previous {
  font-size: 16px;
  cursor: pointer;
  padding: 20px;
  border-radius: 40px;
  left: -22px;
  top: -25px;
  position: relative;
}
.swiper-next {
  font-size: 16px;
  cursor: pointer;
  padding: 20px;
  border-radius: 40px;
  right: -22px;
  top: -29px;
  position: relative;

}
button:disabled {
  opacity: 0;
}
</style>
