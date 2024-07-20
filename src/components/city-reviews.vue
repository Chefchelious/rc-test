<template>
  <section class="reviews">
    <h2 class="title">Отзывы о Барселоне</h2>

    <swiper
      :slides-per-view="'auto'"
      :space-between="20"
      :pagination="{
        clickable: true
      }"
      class="mySwiper"
    >
      <swiper-slide>
        <review-card />
      </swiper-slide>

      <swiper-slide>
        <review-card />
      </swiper-slide>

      <swiper-slide>
        <review-card />
      </swiper-slide>

      <swiper-slide>
        <review-card />
      </swiper-slide>

      <swiper-slide>
        <review-card />
      </swiper-slide>

      <swiper-slide>
        <review-card />
      </swiper-slide>
    </swiper>
  </section>
</template>

<script setup lang="ts">
import ReviewCard from '@/components/review-card.vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css/pagination'
import 'swiper/swiper-bundle.css'
</script>

<style scoped>
.reviews {
  background-color: white;
  padding: 35px 31px;
}

.title {
  margin-bottom: 20px;
  font-size: 29px;
  font-weight: bold;
  letter-spacing: 3%;
}

.swiper-slide {
  width: 300px;
}
</style>
