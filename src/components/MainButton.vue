<script setup>
const isLoading = false
const buttonAttr = {
    disabled: isLoading,
    class: 'text-3xl bg-black text-white',
}

const renderIsLoading = () => {
    if (isLoading) {
        return 'Loading'
    } else {
        return 'Submit'
    }
}
</script>

<template>
    <button v-bind="buttonAttr" :id="`id-${buttonAttr.class}`">
        {{ renderIsLoading() }}
    </button>
</template>

<style scoped></style>
