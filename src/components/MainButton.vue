<script setup>
const { title, disabled } = defineProps({
    title: {
        type: String,
        default: 'Title',
    },
    disabled: {
        type: Boolean,
        default: false,
    },
})
</script>

<template>
    <button :disabled>{{ title }}</button>
</template>

<style scoped></style>
