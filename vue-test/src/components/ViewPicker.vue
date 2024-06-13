<template>
    <div class="picker-option selected" @click="open = !open">
        {{ (selected == 'list')? 'List': 'Grid' }}
        
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