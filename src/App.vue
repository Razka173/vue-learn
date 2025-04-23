<script setup>
import { reactive, ref } from 'vue'
import MainButton from './components/MainButton.vue'
const greeting = 'Hello World'
const blogPost = '<p style="color: red;">Ini adalah BlogPost</p>'
const id = '1'
const blogClass = 'text-2xl flex flex-col'
const submitButton = {
    title: 'Submit',
    disabled: true,
}
const count = ref(1)

const increment = () => {
    count.value++
}

const user = reactive({ name: 'Razka', age: 27 })
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
    <button @click="increment">{{ count }}</button>
    <div>
        <h1>{{ user.name }}</h1>
        <button @click="user.age++">{{ user.age }}</button>
    </div>
</template>

<style scoped></style>
