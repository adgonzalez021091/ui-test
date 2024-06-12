<template>
    <div class="card card-list">
        <div class="card__image-container">
            <img class="card__image" :src="props.poll?.picture_url"></img>
        </div>
        <div class="card__content-container">
            <div></div>
            <div class="card__content">
                <div class="card__title">{{ props.poll?.name }}</div>
                <div class="card__description">{{ (props.poll?.description.length > 170)?props.poll?.description.substring(0,170)+"...":props.poll?.description }}</div>
            </div>
            <div class="card__actions">
                <div class="card__actions__timepassed">
                    {{ timePassed }}
                </div>
                <div class="card__actions__thumbs">
                    <button class="icon-button" aria-label="thumbs up">
                        <img src="../assets/img/thumbs-up.svg"/>
                    </button>
                    <button class="icon-button" aria-label="thumbs down">
                        <img src="../assets/img/thumbs-down.svg"/>
                    </button>
                    <button class="card__cta">
                        Vote now
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import { defineProps,ref } from 'vue';
import {getTimePassed} from '../domain/utils'
const props = defineProps({
    poll:Object
});
const timePassed = ref(getTimePassed(props.poll?.lastUpdated))
</script>