<template>
  <div class="card">
    <div class="author">
      <div class="image-wrapper">
        <img class="reviwer-img" :src="reviewPhoto" alt="reviewer" />
      </div>
      <span>Наталия Полянская</span>
    </div>

    <h5 class="card-title"><span class="city-name">БАРСЕЛОНА</span> — О городе:</h5>
    <p class="card-content">
      Барселона – моя третья большая любовь, после Вены и Крита. Это город, в который я каждый раз
      возвращаюсь с огромным удовольствием, всем рекомендую хоть раз там побывать и осмотреть ...
    </p>

    <div class="card-gallery">
      <div v-for="(photo, idx) in gallery" :key="idx">
        <img :src="photo" alt="gallary-photo" />
      </div>
    </div>

    <div class="card-footer">
      <p>
        <span>около 1 года назад</span>
        <span>9 комментариев</span>
        <span class="like-section">
          <img :src="ICONS.likeIcon" alt="like" />
          <span>9</span>
        </span>
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import reviewPhoto from '@/assets/images/reviewer-photo.svg'
import galleryFirst from '@/assets/images/gallery-1.jpg'
import gallerySecond from '@/assets/images/gallery-2.jpg'
import galleryThird from '@/assets/images/gallery-3.jpg'
import { ICONS } from '@/composable/icons'

const gallery: string[] = [galleryFirst, gallerySecond, galleryThird, galleryThird]
</script>

<style scoped>
.card {
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
  justify-content: space-between;
  flex-wrap: wrap;
}

.card-footer p span:first-child::after {
  content: '•';
  margin: 0 10px;
}

.like-section {
  flex: 1;
  text-align: right;
}

.like-section img {
  margin-right: 4px;
}
</style>
