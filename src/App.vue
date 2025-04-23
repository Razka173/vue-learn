<script setup>
import { computed, reactive, ref } from 'vue'

const author = reactive({
    name: 'JK Rowling',
    books: ['Harry Potter 1', 'Harry Potter 2'],
})

const count = ref(0)

const increment = () => {
    count.value++
}

const isPublished = computed(() => {
    console.log('test')
    return author.books.length > 0 ? 'Published yes' : 'Publised no'
})
</script>

<template>
    <div>
        {{ isPublished }}
    </div>
    <button @click="increment">{{ count }}</button>
</template>

<style scoped></style>
