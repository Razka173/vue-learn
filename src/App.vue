<script setup>
import MainButton from './components/MainButton.vue'
const greeting = 'Hello World'
const blogPost = '<p style="color: red;">Ini adalah BlogPost</p>'
const idBlog = 'blog-1'
</script>

<template>
    <MainButton />
    <MainButton />
    <MainButton />
    <p>{{ greeting }}</p>
    <OptionsComponent></OptionsComponent>
    <composition-component></composition-component>

    <div v-bind:id="idBlog">
        {{ blogPost }}
    </div>
    <div v-html="blogPost"></div>
</template>

<style scoped></style>
