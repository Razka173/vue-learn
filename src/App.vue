<script setup>
import MainButton from './components/MainButton.vue'
const greeting = 'Hello World'
const blogPost = '<p style="color: red;">Ini adalah BlogPost</p>'
const id = '1'
const blogClass = 'text-2xl flex flex-col'
const submitButton = {
    title: 'Submit',
    disabled: true,
}
</script>

<template>
    <MainButton :title="`test`" disabled />
    <MainButton v-bind="submitButton" />
    <MainButton />
    <p>{{ greeting }}</p>
    <OptionsComponent></OptionsComponent>
    <composition-component></composition-component>

    <div :id :class="blogClass">
        {{ blogPost }}
    </div>
    <div v-html="blogPost"></div>
</template>

<style scoped></style>
