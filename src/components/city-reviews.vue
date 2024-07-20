<template>
  <section class="reviews">
    <h2 class="title">Отзывы о Барселоне</h2>

    <swiper
      ref="mySwiper"
      :slides-per-view="'auto'"
      :space-between="20"
      :pagination="{
        el: '.swiper-pagination',
        clickable: true
      }"
      :modules="[Pagination]"
      class="mySwiper"
    >
      <swiper-slide v-for="review in BARCELONAREVIEWS" :key="review.id">
        <review-card :review="review" @open-thumbs-modal="openThumbsModal" />
      </swiper-slide>
    </swiper>

    <div class="reviews-footer">
      <button class="all-reviews-btn">Все отзывы</button>
      <div class="swiper-pagination"></div>
    </div>
  </section>
  <thumbs-gallery-modal
    :is-open="isOpentThumbsModal"
    @close-thumbs-modal="closeThumbsModal"
    :current-images="currentImages"
    :review-images="currentImages"
  />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import ReviewCard from '@/components/review-card.vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css/pagination'
import { Pagination } from 'swiper/modules'
import 'swiper/swiper-bundle.css'
import { BARCELONAREVIEWS } from '@/mokData'
import ThumbsGalleryModal from '@/components/thumbs-gallery-modal.vue'

const isOpentThumbsModal = ref(false)
const currentImages = ref<string[]>([])

const openThumbsModal = (images: string[]) => {
  currentImages.value = images
  isOpentThumbsModal.value = true
}

const closeThumbsModal = () => {
  isOpentThumbsModal.value = false
}
</script>

<style scoped>
.reviews {
  background-color: white;
  padding: 35px 31px;
  margin-bottom: 50px;
}

.title {
  margin-bottom: 20px;
  font-size: 29px;
  font-weight: bold;
  letter-spacing: 3%;
}

.swiper-slide {
  width: 300px;
  height: auto;
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
