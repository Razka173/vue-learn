<script setup>
import { computed, reactive, ref } from 'vue'

const showAuthor = ref(false)

const author = reactive({
    name: 'JK Rowling',
    books: ['Harry Potter 1', 'Harry Potter 2'],
})

const count = ref(0)

const increment = () => {
    count.value++
}

const isPublished = computed(() => {
    console.log(author.books)
    return author.books.length > 0 ? 'Published yes' : 'Publised no'
})

const addBook = () => {
    author.books.push('Harry Potter 3')
}
</script>

<template>
    <div>
        {{ isPublished }}
    </div>
    <button @click="addBook">{{ count }}</button>
    <h1>
        {{ author.name }}
        <span v-if="author.books.length > 1">Have more than one Book</span>
        <span v-else-if="author.books.length === 1">Have a Book</span>
        <span v-else>Don't have a Book</span>
    </h1>
</template>

<style scoped></style>
