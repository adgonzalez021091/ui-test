<template>
    
    <main class="hero">
        
        
        <div>
            <img :src="heroPoll.picture_url" alt="Hero image" class="hero__background"/>
            
            <div class="hero__featured-card">
                
                
                <div class="featured-card__glass-background"></div>    
                <div class="featured-card__content">
                    
                    <div class="featured-card__hairline">What's your opinion on</div>
                    <div class="featured-card__title">{{ heroPoll.name }}</div>
                    <div class="featured-card__desc">{{ heroPoll.description }}</div>
                    <div class="featured-card__hairline">
                        <img src="../assets/img/wikipedia.svg"/>
                        More information
                    </div>
                    <div class="featured-card__cta">What's Your Veredict?</div>
                    <div class="featured-card__buttons" >
                        <div class="icon-button" aria-label="thumbs up">
                            <img src="../assets/img/thumbs-up.svg"/>
                        </div>
                        <div class="icon-button" aria-label="thumbs down">
                            <img src="../assets/img/thumbs-down.svg"/>
                        </div>
                    </div>
                </div>  
                
                
                
            </div>
            <div class="hero__closing-gauge">
                <div class="closing-gauge__left">
                    Closing in
                </div>
                <div class="closing-gauge__right">
                    <p class="closing-gauge__number">22</p> 
                    <p class="closing-gauge__desc">days</p>
                </div>
            </div>
        </div>
        
        
        
        
    </main>
</template>
<script setup>  
import Navigation from './Navigation.vue'
import Polls from '../domain/Polls'
import {reactive,computed} from 'vue'
const polls = new Polls()
const heroPoll = reactive(polls.getHeroPoll())
const heroImage = computed(() => new URL('../assets/img/'+heroPoll.picture, import.meta.url))

</script>