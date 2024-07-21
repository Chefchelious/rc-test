<template>
  <div class="img-wrapper">
    <img class="img" :src="imagePath" alt="profile-img" />
  </div>
</template>

<script setup lang="ts">
defineProps<{
  imagePath: string
}>()
</script>

<style scopped>
.img-wrapper {
  width: 44px;
  height: 44px;
  border-radius: 50%;
  overflow: hidden;
}

.img {
  width: 100%;
  height: auto;
}
</style>
