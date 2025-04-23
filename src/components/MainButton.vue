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

const url = {
    attr: 'href',
    link: '/home',
}
</script>

<template>
    <a :[url.attr]="url.link">
        <button v-bind="buttonAttr" :id="`id-${buttonAttr.class}`">
            {{ renderIsLoading() }}
        </button>
    </a>
</template>

<style scoped></style>
