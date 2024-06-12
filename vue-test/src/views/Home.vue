<template>
<Hero></Hero>
<main class="main-container">
<Banner typeBanner="top"></Banner>
<List></List>
<Banner typeBanner="bottom"></Banner>
</main>
</template>
<script setup lang="ts">
import Hero from "../components/Hero.vue";
import Banner from "../components/Banner.vue";
import List from "../components/List.vue";
</script>