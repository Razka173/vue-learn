<script setup>
import { computed, reactive, ref } from 'vue'
import MainButton from './components/MainButton.vue'

const showAuthor = ref(false)

const author = reactive({
    name: 'JK Rowling',
    books: [
        {
            title: 'Harry Potter 1',
            releasedDate: '1997',
            reviews: [5, 5, 5],
            avgReview: 5,
        },
        {
            title: 'Harry Potter 2',
            releasedDate: '1999',
            reviews: [1, 2, 3],
            avgReview: 2,
        },
    ],
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
    <h2>Books:</h2>
    <ul>
        <li
            v-for="({ title, releasedDate, reviews }, index) in author.books"
            :key="`book-${index}`"
        >
            {{ title }} - {{ releasedDate }}
            <span v-for="(review, reviewIndex) in reviews" :key="`review-${reviewIndex}`">
                {{ review }}
            </span>
        </li>
    </ul>

    <ul>
        <li v-for="(data, key, index) in author" :key="key">{{ index }}. {{ key }}, {{ data }}</li>
    </ul>

    <ol>
        <li v-for="(item, index) in 10" :key="index">Razka Agniatara</li>
    </ol>

    <ul>
        <template v-for="(item, index) in author.books" :key="index">
            <MainButton :title="item.title" />
        </template>
    </ul>
</template>

<style scoped></style>
