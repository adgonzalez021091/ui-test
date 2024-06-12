<template>
    <div class="card card-list">
        <div class="card__image-container">
            <img class="card__image" :src="props.poll?.picture_url"></img>
        </div>
        <div class="card__content-container">
            <div></div>
            <div class="card__content">
                <div class="card__title">{{ props.poll?.name }}</div>
                <div class="card__description">{{ (props.poll?.description.length > numberCharacters)?props.poll?.description.substring(0,numberCharacters)+"...":props.poll?.description }}</div>
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
        <div class="card__poll-gauge">
            <div class="poll-gauge__left" :style="{width:votes.positive+'%'}">
                <div class="icon-button" aria-label="thumbs up">
                    <img src="../assets/img/thumbs-up.svg"/>
                </div>
                {{ votes.positive }}% 
            </div>
            <div class="poll-gauge__right" :style="{width:votes.negative+'%'}">
                {{ votes.negative }}% 
                <div class="icon-button" aria-label="thumbs down">
                    <img src="../assets/img/thumbs-down.svg"/>
                </div>
                
            </div>
        </div>
        <div class="fixed icon-button" aria-label="thumbs down" v-if="votes.negative > votes.positive">
            <img src="../assets/img/thumbs-down.svg"/>
        </div>
        <div class="fixed icon-button" aria-label="thumbs up" v-else>
            <img src="../assets/img/thumbs-up.svg"/>
        </div>
    </div>
</template>
<script setup lang="ts">
import { defineProps,ref } from 'vue';
import {getTimePassed, getVotesPercentage} from '../domain/utils'
const props = defineProps({
    poll:Object
});
const timePassed = ref(getTimePassed(props.poll?.lastUpdated))
const numberCharacters = 110;
const votes = ref(getVotesPercentage(props.poll?.votes))
</script>