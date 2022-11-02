<template >
    <div class="book">
        <div class="thumb">
            <img :src="imageBook" alt="" />
        </div>
        <div class="more-infor">
            <div class="title">{{ demo }}</div>
            <div class="title">{{ nameBook }}</div>
            <div class="author">{{ nameAuthor }}</div>
            <div class="price">{{ price }} VNĐ</div>
            <div class="price">Bản quyền</div>
            <BaseButton @click="handleClick()">Mua ngay</BaseButton>
            <!-- Số lượng : <BaseInput></BaseInput> -->
        </div>
    </div>
</template>
<script lang="ts" setup>
import { Ref, ref } from 'vue';
import IBook from '../model/IBook';
import BaseInput from './base/BaseInput.vue';

let demo = ref("Linh JS");

// Định nghĩa emit
const emit = defineEmits(['add-to-cart'])

let quantity: Ref<string> = ref("");

interface IParamsProps {
    nameBook: string,
    nameAuthor: string,
    price: string,
    imageBook: string,

}

const changeText = function () {
    demo.value = "Quân JS";
}

// Định nghĩa Props
const props = withDefaults(defineProps<IParamsProps>(), {

    nameBook: "Không tên",
    nameAuthor: "Không tên",
    price: "0",
    imageBook: "https://cdn-icons-png.flaticon.com/512/5115/5115607.png"
})
/**
 * Xử lý sự click
 * @param event 
 */
const handleClick = function (book: IBook) {
    //đc r
    emit("add-to-cart", book);
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