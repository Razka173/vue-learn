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

const disabledColor = "#000"
const availableColor = "#fff"
</script>

<template>
    <button :disabled class="button" :class="{disabled: disabled}" :style="{color: disabled ? '#000' : '#fff'}">{{ title }}</button>
</template>

<style scoped>
.button {
    background-color: salmon;
    border: none;
    padding: 2px 4px;
}

.disabled {
    /* opacity: 0.5; */
    background-color: grey;
}
</style>
