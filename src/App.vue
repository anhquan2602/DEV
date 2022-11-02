<template>
  <div class="shop">
    <div class="list-book">
      <Book @add-to-cart="addBook"   v-for="book in arrBook"  :imageBook="book.image" :nameBook="book.name" :nameAuthor="book.author"
        :price="book.price"  />
    </div>

    <!-- <div class="list-post">
      <Post v-for="post in arrPost" :titlePost="post.title" :description="post.description" />
    </div> -->

    <div class="cart">
      <div v-for="book in bookBought" class="name">{{ book.name }}</div>
    </div>
  </div>
</template>


<script setup lang="ts">

import { ref, Ref } from 'vue';
import Book from './components/Book.vue'
import Post from './components/Post.vue'
import IBook from './model/IBook';
import IPost from './model/IPost';

const bookBought: Ref<IBook[]> = ref([]);
const addBook = function (book: IBook) {
  bookBought.value.push(book)
  console.log(bookBought.value);
}

const arrPost: IPost[] = [{
  title: "Sách 1",
  description: "Mô tả 1",
},
{
  title: "Sách 2",
  description: "Mô tả 2"
}, {
  title: "Sách 3",
  description: "Mô tả 3"
},{
  title: "Sách 4",
  description: "Mô tả 4"
}];


const arrBook: IBook[] = [{
  image: "https://images.thuvienpdf.com/w0iwZHo1xx.webp",
  name: "Sách quý 1",
  author: "Nguyễn Anh Quân",
  price: "200.000"
}, {
  image: "https://pi.edu.vn/upload/file_manager/T%E1%BA%A1p%20ch%C3%AD%20pi%20s%E1%BB%91%2012/12/0001%20(2).jpg",
  name: "Sách quý 2",
  author: "Nguyễn Anh Thắng",
  price: "300.000"
}, {
  image: "https://bizweb.dktcdn.net/100/112/377/products/c057-tc-pi.jpg?v=1586407303857",
  name: "Sách quý 3",
  author: "Nguyễn Anh Hảo",
  price: "600.000"
}];


</script>

<style scoped>
.shop {
  display: flex;
}

.cart {
  width: 100px;
  border-left: 1px solid white;
}

.list-book {
  width: 80%;
  padding: 30px;
}

.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}

.list-book {
  width: 800px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.list-post {
  width: 750px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.list-post .detail-post {
  width: 200px;
  border: 1px solid gray;
  margin-bottom: 40px;
}
</style>
