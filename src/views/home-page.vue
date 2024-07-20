<template>
  <main>
    <city-intro :city="CITY" />
    <city-reviews />
    <chat-section />
  </main>
</template>

<script setup lang="ts">
import CityIntro from '@/components/city-intro.vue'
import CityReviews from '@/components/city-reviews.vue'
import chatSection from '@/components/chat-section.vue'
import { CITY } from '@/mokData'
</script>
