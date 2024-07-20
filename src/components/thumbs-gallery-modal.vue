<template>
  <modal-window :is-open="isOpen" @close-thumbs-modal="emit('close-thumbs-modal')">
    <div class="wrapper">
      <swiper
        :style="{
          '--swiper-navigation-color': '#fff',
          '--swiper-pagination-color': '#fff'
        }"
        :space-between="10"
        :navigation="true"
        :thumbs="{ swiper: thumbsSwiper }"
        :modules="[FreeMode, Navigation, Thumbs]"
        class="mySwiper2"
      >
        <swiper-slide v-for="(item, idx) in reviewImages" :key="idx"
          ><img :src="item"
        /></swiper-slide>
      </swiper>
      <swiper
        @swiper="setThumbsSwiper"
        :space-between="10"
        :slides-per-view="4"
        :free-mode="true"
        :watch-slides-progress="true"
        :modules="[FreeMode, Navigation, Thumbs]"
        class="mySwiper"
      >
        <swiper-slide v-for="(item, idx) in reviewImages" :key="idx"
          ><img :src="item"
        /></swiper-slide>
      </swiper>
    </div>
  </modal-window>
</template>

<script setup lang="ts">
import ModalWindow from '@/components/modal-window.vue'
import { ref, watch } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/navigation'
import 'swiper/css/thumbs'
import { FreeMode, Navigation, Thumbs } from 'swiper/modules'

const props = defineProps<{ isOpen: boolean; reviewImages: string[] }>()
const emit = defineEmits(['close-thumbs-modal'])

const thumbsSwiper = ref(null)

const setThumbsSwiper = (swiper: any) => {
  thumbsSwiper.value = swiper
}

watch(
  () => props.isOpen,
  (v) => {
    if (!v) thumbsSwiper.value = null
  }
)
</script>

<style scoped>
.wrapper {
  user-select: none;
}

.swiper {
  width: 100%;
  height: 100%;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;

  display: flex;
  justify-content: center;
  align-items: center;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 50%;
  object-fit: cover;
}

body {
  background: #000;
  color: #000;
}

.mySwiper2 {
  height: 50vh;
  width: 100%;
}

.mySwiper2 .swiper-slide img {
  height: 100%;
  object-fit: cover;
}

.mySwiper {
  height: 15vh;
  width: 100%;
  box-sizing: border-box;
  padding: 10px 0;
}

.mySwiper .swiper-slide {
  width: 20%;
  height: 100%;
  opacity: 0.6;
}

.mySwiper .swiper-slide-thumb-active {
  opacity: 1;
}
</style>
