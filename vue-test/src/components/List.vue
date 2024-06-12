<template>
    <div>
        <h1>Previous Rulings</h1>
        <select>
            <option value="list">List</option>
            <option value="grid">Grid</option>
        </select>
    </div>
    <Card v-for="poll in pollsList" :key="poll.name" :poll="poll"></Card>
</template>
<script setup>
import Card from './Card.vue'
import { reactive } from 'vue'
import Polls from '../domain/Polls';
const polls = new Polls()
const pollsList = reactive(polls.getPolls())
</script>