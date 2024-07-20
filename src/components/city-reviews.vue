<template>
  <section class="reviews">
    <h2 class="title">Отзывы о Барселоне</h2>

    <swiper
      :slides-per-view="'auto'"
      :space-between="20"
      :pagination="{
        el: '.swiper-pagination',
        clickable: true
      }"
      :modules="[Pagination]"
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

    <div class="reviews-footer">
      <button class="all-reviews-btn">Все отзывы</button>
      <div class="swiper-pagination"></div>
    </div>
  </section>
</template>

<script setup lang="ts">
import ReviewCard from '@/components/review-card.vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css/pagination'
import { Pagination } from 'swiper/modules'
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

.all-reviews-btn {
  padding: 12px 24px;
  border-radius: 2px;
  background-color: transparent;
  border: 2px solid #ff4641;
  font-weight: 600;
  font-size: 15px;
  line-height: 15px;
}

.reviews-footer {
  position: relative;
  margin-top: 32px;
}

.swiper-pagination {
  position: absolute;
  bottom: 17px;
  right: 0;
  width: auto;
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

:deep(.swiper-pagination-bullet) {
  width: 4px;
  height: 4px;
  background: #212121;
  border-radius: 50%;
  transition: background 0.3s;
  margin: 0 4px;
}

:deep(.swiper-pagination-bullet-active) {
  width: 8px;
  height: 8px;
  background: #ff4641;
  opacity: 1;
}
</style>
