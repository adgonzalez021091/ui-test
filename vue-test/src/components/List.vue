<template>
    <div class="list__header">
        <h2>Previous Rulings</h2>
        <div class="list__custom-select" style="width:200px;" v-show="!isMobile">
            <select v-model="typeCard">
                <option value="list">List</option>
                <option value="grid">Grid</option>
            </select>
        </div>
    </div>
    <div class="cards-container" :class="typeCard">
        <Card v-for="poll in pollsList.data" :key="poll.id" :poll="poll" @voteHandler="voteHandler" :typeCard="typeCard" ></Card>
    </div>
</template>
<script setup>
import Card from './Card.vue'
import { reactive,ref } from 'vue'
import Polls from '../domain/Polls';
const polls = new Polls()
const pollsList = reactive({"data":polls.getPolls()})
const isMobile = ref(window.innerWidth < 768)

const voteHandler = ({id,vote}) => {
    const index = pollsList.data.findIndex((poll) => poll.id === id); 
    const prev = pollsList.data[index]
    const votes = prev.votes[vote]
    //pollsList.data[index].votes[vote] = votes+1
    pollsList.data[index].votes = polls.updateVotes(id,vote)
}
const typeCard = ref((isMobile)?"grid":"list")
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