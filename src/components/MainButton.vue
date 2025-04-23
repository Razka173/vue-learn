<script setup>
const isLoading = false
const buttonAttr = {
    type: 'button',
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

const url = '/home'
</script>

<template>
    <a :href="url">
        <button v-bind="buttonAttr" :id="`id-${buttonAttr.class}`">
            {{ renderIsLoading() }}
        </button>
    </a>
</template>

<style scoped></style>
