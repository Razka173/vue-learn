<script setup>
import MainButton from './components/MainButton.vue'
const greeting = 'Hello World'
const blogPost = '<p style="color: red;">Ini adalah BlogPost</p>'
</script>

<template>
    <MainButton />
    <MainButton />
    <MainButton />
    <p>{{ greeting }}</p>
    <OptionsComponent></OptionsComponent>
    <composition-component></composition-component>

    <div>
        {{ blogPost }}
    </div>
    <div v-html="blogPost"></div>
</template>

<style scoped></style>
