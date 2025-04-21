<script setup>
import MainButton from './components/MainButton.vue'
import OptionsComponent from './components/OptionsComponent.vue'
import CompositionComponent from './components/CompositionComponent.vue'
const name = 'Hello World'
</script>

<template>
    <MainButton />
    <MainButton />
    <MainButton />
    <p>{{ name }}</p>
    <OptionsComponent></OptionsComponent>
    <CompositionComponent></CompositionComponent>
</template>

<style scoped></style>
