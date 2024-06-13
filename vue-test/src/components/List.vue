<template>
    <div class="list__header">
        <h2>Previous Rulings</h2>
        <div class="list__custom-select" style="width:200px;" v-show="!isMobile">
            <ViewPicker :default="typeCard" @viewPicked="handleViewPicked"></ViewPicker>
        </div>
    </div>
    <div class="cards-container" :class="typeCard">
        <Card v-for="poll in pollsList.data" :key="poll.id" :poll="poll" @voteHandler="voteHandler" :typeCard="typeCard" ></Card>
    </div>
</template>
<script setup>
//IMPORTS
import Card from './Card.vue'
import ViewPicker from './ViewPicker.vue';
import { reactive,ref } from 'vue'
import Polls from '../domain/Polls';

//DECLARATIONS
const polls = new Polls()
const pollsList = reactive({"data":polls.getPolls()})
const isMobile = window.innerWidth < 768;
const typeCard = ref((isMobile)?"grid":"list")

//METHODS
const voteHandler = ({id,vote}) => {
    const index = pollsList.data.findIndex((poll) => poll.id === id); 
    const prev = pollsList.data[index]
    pollsList.data[index].votes = polls.updateVotes(id,vote)
}
const handleViewPicked = (value) => {
    typeCard.value = value
}   
</script>
<style scoped> 
.cards-container.grid{
    display: flex;
    flex-direction: row;
    gap: 20px;
    flex-wrap: wrap;
}
.cards-container.list{
    display:flex;
    flex-direction: column;
    gap: 20px;
}
.list__header{
    display: flex;
    justify-content: space-between;
    align-items: center;
    
}
.list__custom-select {
    position: relative;
    
}
@media all and (max-width: 768px) {
    .cards-container.grid{
        display: flex;
        flex-direction: row;
        gap: 20px;
        flex-wrap: nowrap;
        overflow: scroll;
}
}


</style>