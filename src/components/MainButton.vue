<script setup>
const props = defineProps(['title'])
</script>

<template>
    <button>{{ props.title }}</button>
</template>

<style scoped></style>
