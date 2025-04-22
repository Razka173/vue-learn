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
    <composition-component></composition-component>
</template>

<style scoped></style>
