<template>
    <article class="card" :class="'card-'+typeCard">
        <div class="card__image-container" aria-label="poll image">
            <img class="card__image" :src="props.poll?.picture_url"></img>
        </div>
        <div class="card__content-container">
            <div aria-label="empty space"></div>
            <div class="card__content">
                <summary class="card__title" aria-label="poll title">{{ props.poll?.name }}</summary>
                <span class="card__description" aria-label="poll description">{{ (props.poll?.description.length > numberCharacters)?props.poll?.description.substring(0,numberCharacters)+"...":props.poll?.description }}</span>
            </div>
            <div class="card__actions">
                <div class="card__actions__timepassed" v-if="!voted" aria-label="poll time passed since published">
                    {{ timePassed }} in {{ props.poll?.category }}
                </div>
                <div class="card__actions__timepassed" v-else>
                    Thanks you for your vote!
                </div>
                <div class="card__actions__thumbs">
                    
                    <button class="icon-button" :class="{'selected':selected == 'positive'}" aria-label="thumbs up"  @click="select('positive')" v-show="voted == false">
                    <img src="../assets/img/thumbs-up.svg"/>
                </button>
                <button class="icon-button" :class="{'selected':selected == 'negative'}" aria-label="thumbs down"  @click="select('negative')" v-show="voted == false">
                    <img src="../assets/img/thumbs-down.svg"/>
                </button>
                <button class="card__cta" :disabled="!selected" @click="vote" v-if="!voted" aria-label="vote action">
                    Vote now
                </button>
                <button class="card__cta" @click="reset" v-else aria-label="vote again action">
                    Vote again
                </button>
            </div>
        </div>
    </div>
    <div class="card__poll-gauge">
        <div class="poll-gauge__left" :style="{width:votes.positive+'%'}" aria-label="percentage of positives votes for this poll">
            <div class="icon-button" aria-label="thumbs up">
                <img src="../assets/img/thumbs-up.svg"/>
            </div>
            {{ votes.positive }}% 
        </div>
        <div class="poll-gauge__right" :style="{width:votes.negative+'%'}" aria-label="percentage of negative votes for this poll">
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
</article>
</template>
<script setup lang="ts">
//IMPORTS
import { defineProps,ref,computed } from 'vue';
import {getTimePassed, getVotesPercentage} from '../domain/utils'

//DECLARATIONS
const props = defineProps({
    poll:Object,
    typeCard:String
});
const timePassed = ref(getTimePassed(props.poll?.lastUpdated))
const selected = ref<"positive"|"negative"|null>(null)
const voted = ref<boolean>(false)

const numberCharacters = computed(()=>(props.typeCard == "list")?110:80);
const votes = computed(()=> getVotesPercentage(props.poll?.votes))
const emit= defineEmits(["voteHandler"])

//METHODS
const select = (value)=> {
    console.log("selected...",value)
    selected.value = value
}
const vote = () => {
    voted.value = true;
    emit('voteHandler',{id:props.poll?.id, vote:selected.value})
}
const reset = ()=> {
    voted.value = false;
    selected.value = null;
}
</script>
<style scoped>
.card-list {
    height: 12rem ;
}
.card-grid {
    width: 21rem;
    height: 21rem;
}
.card{
    display:block;
    position: relative;
}
.card__image {
    
    width: 100%;
    height: 100%;
    object-fit: cover;
}
.card__title{
    color: var(--color-white);
    font-size: 2rem;
    font-weight: 300;
    display: flex;
    align-items: flex-end;
    
}
.card__description{
    color: var(--color-white);
    font-size: 1rem;
    font-weight: lighter;
    
}
.card__content{
    color: var(--color-white);
    padding: 20px;
    height: calc(100% - 40px);
    display: flex;
    flex-direction: column;
    gap: 10px;
}
.card-grid .card__content{
    color: var(--color-white);
    height: calc(100% - 40px);
    display: grid;
    flex-direction: column;
    grid-template-rows: 4rem 3rem;
    gap: 10px;
    padding: 0.75rem 2.5rem;
    height: 8rem;
}

.card__image-container{
    position: absolute;
    height: 100%;
}
.card-list .card__image-container{
    width: 20%;
    
}
.card-grid .card__image-container{
    width: 100%;
    height: 100%;
}
.card__content-container{
    display: grid;
    gap: 10px;
    width: 100%;
    height: 100%;
    position: relative;
}
.card-grid .card__content-container{
    grid-template-columns: 1fr;
    grid-template-rows: 18% auto 1fr;
    background: linear-gradient(180deg, rgba(0, 0, 0, 0.0001) 0%, rgba(0, 0, 0, 0.6) 100%);
    gap:0;
    
}   
.card-list  .card__content-container{
    
    
    grid-template-columns: 20% 53% 1fr;
    
    background: linear-gradient(90deg, rgba(0, 0, 0, 0.0001) 0%, #888888 19.79%, #666666 50%, rgba(51, 51, 51, 0.6) 71.88%);
}

.card__actions__timepassed{
    text-align: right;
}



.card .icon-button > img{
    width: 20px;
}
.card-grid .icon-button > img{
    width: 15px;
}
.card .icon-button {
    
    padding: 0.5rem;
    border:2px solid transparent;
}
.card-grid .icon-button{
    padding: 0.3rem;
    
}
.icon-button.selected{
    border:2px solid white;
}
.card__actions {
    display: grid;
    grid-template-rows: 2rem 1fr;
    color: var(--color-white);
    padding: 20px;
    padding-left:0px;
    width: calc(100% - 20px);
    height: calc(100% - 40px);
    align-items: start;
}
.card-grid .card__actions{
    padding: 0px 40px;
    height: unset;
    
    width: calc(100% - 60px);
}
.card__actions__thumbs{
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 10px;
}
.card__cta{
    position: relative;
    display: block;
    width: 100%;
    padding: 0.75rem 0;
    border: 1px solid var(--color-white);
    background: var(--color-darker-background);
    color: var(--color-white);
    font-size: 1rem;
    font-weight: normal;
    max-width: 125px;
    cursor: pointer;
}
.card__cta:hover{
    background:black;
}
.card__cta:disabled,
.card__cta[disabled]{
    background-color: #30303070;
    cursor: unset;
}
.card__poll-gauge {
    position: absolute;
    bottom: 0;
    display: flex;
    width: 100%;
    height: 3rem;
    background-color: var(--color-light-background);
}
.card-grid .card__poll-gauge{
    height: 2.5rem;
}
.poll-gauge__left {
    position: relative;
    display: flex;
    
    align-items: center;
    justify-content: flex-start;
    padding: 0 .25rem 0 0;
    background-color: rgba(var(--color-green-positive), 0.8);
    color: var(--color-white);
    font-weight: 300;
    text-transform: uppercase;
}
.poll-gauge__right {
    position: relative;
    display: flex;
    
    align-items: center;
    justify-content: flex-end;
    padding: 0 .25rem 0 0;
    background-color: rgba(var(--color-yellow-negative), 0.8);
    color: var(--color-white);
    font-weight: 300;
    text-transform: uppercase;
}

.fixed{
    position: absolute;
    top:0;
    left:0;
}
.card-grid .fixed{
    top: calc(50% - 15px);
}

@media all and (max-width: 768px) {
    .card-grid {
        width: 90vw;
        height: 90vw;
    }  
    .card-grid .card__content{
        padding: 1rem 4rem;
    }
    .card-grid .icon-button{
        padding: 0.9rem;
    }
    .card-grid .card__poll-gauge{
        height: 4rem;
    }
    .card__cta{
        padding: 1.5rem 0;
        font-size:1.25rem;
    }
    
    .card__description{
        
        font-size: 1.25rem;
    }
    .card-grid .card__content-container{
        
        grid-template-rows: 30% auto 1fr;
        width:inherit;
    }
    .card-grid .card__image-container{
        width: inherit;
    }
}
</style>