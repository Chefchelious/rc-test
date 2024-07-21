<template>
  <section class="city-intro">
    <div class="left-col">
      <img :src="barcelonaImg" alt="city-img" />
    </div>
    <div class="right-col">
      <h4 class="title">{{ city.title }}</h4>

      <p class="description">{{ city.description }}</p>

      <RouterLink class="link" to="/">Читать дальше</RouterLink>
    </div>
  </section>
</template>

<script setup lang="ts">
import barcelonaImg from '@/assets/images/barcelona_spain.jpg'
import type { ICityData } from '@/types'

defineProps<{
  city: ICityData
}>()
</script>

<style scoped>
.city-intro {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  background-color: white;
}

.title {
  font-weight: bold;
  letter-spacing: 3%;
  font-size: 29px;
  margin-bottom: 18px;
}

.description {
  font-weight: 300;
  font-size: 16px;
  display: -webkit-box;
  -webkit-line-clamp: 6;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-bottom: 6px;
}

.right-col {
  padding: 0 29px;
}

.link {
  position: relative;
  font-size: 16px;
}

.link:after {
  position: absolute;
  left: 0;
  bottom: -2px;
  content: '';
  display: block;
  width: 100%;
  height: 2px;
  background-color: #ff4641;
}

@media screen and (max-width: 768px) {
  .city-intro {
    flex-direction: column;
  }

  .left-col img {
    width: 100%;
    height: auto;
  }

  .right-col {
    margin-bottom: 26px;
  }
}

@media screen and (max-width: 450px) {
  .title {
    font-size: 20px;
    margin-bottom: 0;
  }
}
</style>
