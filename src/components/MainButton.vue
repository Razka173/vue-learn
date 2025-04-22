<script setup>
const isLoading = true
const buttonAttr = {
    disabled: isLoading,
    class: 'text-3xl bg-black text-white',
}
</script>

<template>
    <button v-bind="buttonAttr">{{ isLoading ? 'Loading' : 'Submit' }}</button>
</template>

<style scoped></style>
