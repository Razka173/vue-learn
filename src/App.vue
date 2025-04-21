<script setup>
import MainButton from './components/MainButton.vue'
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
