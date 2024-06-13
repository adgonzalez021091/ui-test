<template>
    <aside v-if="props.typeBanner == 'top'" class="banner banner-top">
        <div class="banner__left">
            <div class="banner__hairline">Speak out. Be heard. </div>
            <div class="banner__title">Be counted </div>

        </div>
        <div class="banner__right">
            <div class="banner__text">
                Rule of Thumb is a crowd sourced court of public opinion where anyone and everyone can speak out and speak freely. It’s easy: You share your opinion, we analyze and put the data in a public report.
            </div>    
        </div>
    </aside>
    <aside v-if="props.typeBanner == 'bottom'" class="banner banner-bottom"  >
        <div class="banner__layer"></div>
        <div class="banner__heading">
            Is there anyone else you would want us to add?
        </div>
        <div class="banner__right">
            <button class="banner__cta">
                Submit a name
            </button>
        </div>
    </aside>
</template>
<script setup lang="ts">
const props = defineProps({
    typeBanner:String
})
</script>
