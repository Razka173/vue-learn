<script setup>
import { ref } from 'vue';
import MainButton from './components/MainButton.vue'

const count = ref(0);

const increment = (counter) => {
    count.value = count.value + counter
}


</script>

<template>
    <button  @click="(event) => console.log(event)" @mouseover="increment(10)">{{ count }}</button>
</template>

<style scoped></style>
