<template>
  <div class="card">
    <div class="author">
      <div class="image-wrapper">
        <img class="reviwer-img" :src="review.author.profileImage" alt="reviewer" />
      </div>
      <span>{{ review.author.name }}</span>
    </div>

    <h5 class="card-title"><span class="city-name">БАРСЕЛОНА</span> — О городе:</h5>
    <p class="card-content">
      {{ review.review }}
    </p>

    <div class="card-gallery">
      <div
        v-for="(photo, idx) in review.reviewImages.slice(0, 4)"
        :key="idx"
        class="gallery-photo"
        @click="emit('open-thumbs-modal', review.reviewImages)"
      >
        <img :src="photo" alt="gallery-photo" />
        <div v-if="idx === 3" class="backdrop-mini">
          <span class="extra-count">+{{ extraCounter }}</span>
        </div>
      </div>
    </div>

    <div class="card-footer">
      <p>
        <span>около 1 года назад</span>
        <span style="margin-right: 6px">{{ review.comments }} комментариев</span>
        <span class="like-section">
          <img :src="ICONS.likeIcon" alt="like" />
          <span>{{ review.likes }}</span>
        </span>
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ICONS } from '@/composable/icons'
import type { IReviewItem } from '@/types'
import { computed } from 'vue'

const props = defineProps<{ review: IReviewItem }>()
const emit = defineEmits(['open-thumbs-modal'])

const extraCounter = computed(() => {
  return props.review.reviewImages.length - props.review.reviewImages.slice(0, 4).length
})
</script>

<style scoped>
.card {
  height: 100%;
  width: 300px;
  background-color: #f9f7f2;
  padding: 26px 23px 26px 19px;
  user-select: none;
  cursor: pointer;
}

.author {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 28px;
}

.image-wrapper {
  width: 30px;
  height: 30px;
  overflow: hidden;
}

.reviewer-img {
  width: 100%;
  height: auto;
  object-fit: cover;
}

.card-title,
.city-name {
  font-weight: 500;
}

.card-title {
  text-transform: uppercase;
  line-height: 17px;
  font-size: 16px;
  margin-bottom: 12px;
}

.city-name {
  color: #fc4f1e;
}

.card-content {
  font-size: 15px;
  line-height: 25px;
  margin-bottom: 8px;
  padding-right: 14px;
}

.card-gallery {
  display: flex;
  gap: 5px;
  margin-bottom: 26px;
}

.card-footer p {
  display: flex;
  align-items: center;
  font-size: 11px;
  color: #9d9d9d;
  justify-content: space-around;
  flex-wrap: wrap;
}

.card-footer p span:first-child::after {
  content: '•';
  margin: 0 10px;
}

.card-footer p span:nth-child(2) {
  margin-right: auto;
}

.like-section {
  text-align: right;
  white-space: nowrap;
}

.like-section img {
  margin-right: 4px;
}

.gallery-photo {
  position: relative;
  width: 50px;
  height: 50px;
  overflow: hidden;
}

.gallery-photo img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}

.backdrop-mini {
  position: absolute;
  background-color: rgba(0, 0, 0, 0.201);
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
}

.extra-count {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  font-weight: 600;
}
</style>
