<script setup>
const name = 'Razka Agniatara'

const showName = () => console.log(name)
</script>

<template>
    <h1>{{ name }}</h1>
    <button @click="showName">Show Name</button>
</template>
