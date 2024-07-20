<template>
  <main>
    <city-intro :city="CITY" />
  </main>
</template>

<script setup lang="ts">
import CityIntro from '@/components/city-intro.vue'
import { CITY } from '@/mokData'
</script>
