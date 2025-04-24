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
    <button :disabled class="button" :class="{disabled: disabled}">{{ title }}</button>
</template>

<style scoped>
.button {
    background-color: salmon;
    border: none;
    color: white;
    padding: 2px 4px;
}

.disabled {
    /* opacity: 0.5; */
    background-color: grey;
}
</style>
