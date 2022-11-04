<template >
    <div class="book">
        <div class="thumb">
            <img :src="book.image" alt="" />
        </div>
        <div class="more-infor">
            <!-- <div class="title">{{ demo }}</div> -->
            <div class="title">{{ book.name }}</div>
            <div class="author">{{ book.author }}</div>
            <div class="price">{{ book.price }} VNĐ</div>
            <div class="price">Bản quyền</div>
            Số lượng : <BaseInput v-model="textQuan"></BaseInput>
            <br>
            <BaseButton @click="handleClick(book)">Mua ngay</BaseButton>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { Ref, ref } from 'vue';
import IBook from '../model/IBook';
import BaseInput from './base/BaseInput.vue';

let textQuan = ref("");
let age = ref("");

// Định nghĩa emit
const emit = defineEmits(['add-to-cart'])

let quantity: Ref<string> = ref("");

interface IParamsProps {
   book:IBook;
}

// Định nghĩa Props
const props = defineProps<IParamsProps>();
/**
 * Xử lý sự click
 * @param event 
 */
const handleClick = function (book: IBook) {
    //đc r
    emit("add-to-cart", book);
}
const getValue = function(quan: string){
    console.log(quan);
}



</script>
<style lang="css">
.book {
    width: 200px;
    border: 1px solid gray;
    margin-bottom: 50px;
}

.book .thumb img {
    width: 100%;
    height: 286px;
    object-fit: cover;
    object-position: center center;
}
</style>