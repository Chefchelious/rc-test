<template>
  <main>
    <city-intro :city="CITY" />
    <city-reviews />
  </main>
</template>

<script setup lang="ts">
import CityIntro from '@/components/city-intro.vue'
import CityReviews from '@/components/city-reviews.vue'
import { CITY } from '@/mokData'
</script>
