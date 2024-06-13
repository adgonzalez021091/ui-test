<template>
    <div class="picker-option selected" @click="open = !open">
        {{ (selected == 'list')? 'List': 'Grid' }}
        <svg width="10" height="7" viewBox="0 0 10 7" xmlns="http://www.w3.org/2000/svg">
  <path d="M5 7 L0 0 H10 Z" fill="black"/>
</svg>
    </div>
    <div class="picker-options" v-show="open">
        <div class="picker-option" @click="selection('list')">List</div>
        <div class="picker-option" @click="selection('grid')">Grid</div>
    </div>
</template>
<script setup lang="ts">
import {ref} from 'vue'
const emit= defineEmits(["viewPicked"])
const selected = ref<"list"|"grid">("list")
const open = ref(false)
const selection = (value) =>{
    selected.value = value;
    open.value = false;
    emit("viewPicked",selected.value)
}

</script>
<style scoped>  
.picker-options{
    position: absolute;
    top: 2rem;
    left: 0;
    z-index:2;
    
}
.picker-option{
    align-items: center;
    gap: 20px;
    background-color: white;
    cursor: pointer;
    width: 7rem;
    border: 1px solid black;
    padding: 0.5rem;
    display: flex;
    flex-direction: row;
    justify-content: center;
    
}
</style>