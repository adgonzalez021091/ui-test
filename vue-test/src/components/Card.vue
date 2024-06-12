<template>
    <div class="featured-card__content">
        <img class="featured-card__glass-background" :src="pollPicture"></img>
        <div class="featured-card__title">{{ props.poll.name }}</div>
        <div class="featured-card__desc">{{ props.poll.description }}</div>
    </div>
</template>
<script setup lang="ts">
import { defineProps,computed } from 'vue';
const props = defineProps({
    poll:Object
});
const pollPicture = computed(() => new URL('../assets/img/'+props.poll.picture, import.meta.url))

</script>