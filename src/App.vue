<template>
  <div class="shop">
    <div class="list-book">
      <Book @add-to-cart="addBook" v-for="book in arrBook" :book="book" />
    </div>

    <!-- <div class="list-post">
      <Post v-for="post in arrPost" :titlePost="post.title" :description="post.description" />
    </div> -->
    <div class="cart">
      <table class="list-bought">
        <tr>
          <td>Mã sản phẩm</td>
          <td>STT</td>
          <td>Sản phẩm</td>
          <td>Màu sắc</td>
          <td>Số lượng</td>
          <td>Đơn giá</td>
          <td>Thành tiền</td>
          <td>Chức năng</td>
        </tr>
        <tr v-for="(book, index) in bookBought">
          <td>{{ book.id }}</td>
          <td>{{ index + 1 }}</td>
          <td>{{ book.name }}</td>
          <td v-if="book.color == 1">Đỏ</td>
          <td v-if="book.color == 2">Vàng</td>
          <td v-if="book.color == 3">Xanh</td>
          <td>{{ book.quantity }}</td>
          <td>{{ book.price }}</td>
          <td>{{ ((book.quantity || 0) * (book.price)) }}</td>
          <td><button @click="clearData(book)">Xóa</button></td>
        </tr>
        <tr>
          <td>Tổng tiền</td>
          <td colspan="4">{{ sum() }}</td>
        </tr>
      </table>

    </div>
  </div>
</template>
<script setup lang="ts">

import { ref, Ref } from 'vue';
import Book from './components/Book.vue'
import IBook from './model/IBook';
import IPost from './model/IPost';
import axios from 'axios';

const bookBought: Ref<IBook[]> = ref([]);

const initData = function () {
  bindingDataBoughtBook();

}

// Xử phần nút mua
const addBook = function (book: IBook) {
  if (book) {
    const bookFind = bookBought.value.find((item) => {
      return item.id == book.id && item.color == book.color;
    })
    // Nếu tìm thấy thì cập nhật
    if (bookFind) {
      bookFind.quantity = Number(bookFind.quantity || 0) + Number(book.quantity || 0);
      axios.put(`http://localhost:3000/books/${bookFind.id}`, bookFind)
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
    }
    else {
      axios.post(`http://localhost:3000/books/`, book)
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  }
  bindingDataBoughtBook();
  // Lưu lại vào trong Local Storage
}

// xử lý nút xóa
const clearData = function (book: IBook) {
  if (book) {
    axios.delete(`http://localhost:3000/books/${book.id}`, {
    })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });;
  }
  bindingDataBoughtBook();
}
/**
/**
 * Xử lý binding dữ liệu
 */
const bindingDataBoughtBook = function () {
  axios.get('http://localhost:3000/books')
    .then(function (response) {
      // handle success
      if (response && response.data && response.data.length) {
        bookBought.value = response.data;
      }
    });
}

const sum = function () {
  let total = 0;
  bookBought.value.forEach(item => {
    total += (item.quantity || 0) * item.price;
  })
  return total;
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
}, {
  title: "Sách 4",
  description: "Mô tả 4"
}];


const arrBook: IBook[] = [{
  id: 1,
  image: "https://images.thuvienpdf.com/w0iwZHo1xx.webp",
  name: "Sách quý 1",
  author: "Nguyễn Anh Quân",
  price: 200000
}, {
  id: 2,
  image: "https://pi.edu.vn/upload/file_manager/T%E1%BA%A1p%20ch%C3%AD%20pi%20s%E1%BB%91%2012/12/0001%20(2).jpg",
  name: "Sách quý 2",
  author: "Nguyễn Anh Thắng",
  price: 200000
}, {
  id: 3,
  image: "https://bizweb.dktcdn.net/100/112/377/products/c057-tc-pi.jpg?v=1586407303857",
  name: "Sách quý 3",
  author: "Nguyễn Anh Hảo",
  price: 200000
}];


initData();

</script>

<style scoped>
.shop {
  display: flex;
}

.cart {
  width: 500px;
  border-left: 1px solid white;
  padding: 0 20px;
}

table.list-bought {
  width: 100%;
  border: 1px solid gray;
  border-collapse: collapse;
}

table.list-bought,
table.list-bought tr,
table.list-bought td {
  border: 1px solid gray;
}

.list-book {
  width: 70%;
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
