<script setup lang="ts">
import { Ref, ref } from 'vue'


const count = ref(0)
const name = ref("")
const className = ref("")

const handleAddStudent = function() {
    console.log(name.value);
    console.log(className.value);

}

</script>

<template>
    <div class="filter-background"></div>
    <div class="pop-up">
        <div class="title-popup">Thêm sinh viên</div>    
        <div class="input">
            {{name}}
            ---
            {{className}}
            Name : <input type="text" v-model="name" class="input-name">
            Clas : <input type="text" v-model="className" class="input-class">
        </div>
        <div class="button">
            <button @click="handleAddStudent" type="button" class="btn btn-danger btn-sm" id="btn-delete">Thêm</button>
        </div>
    </div>
</template>

<style scoped>
input {
    width: 100%;
    border: 1px solid #ccc;
    box-shadow: inset 0 1px 3px #ddd;
    border-radius: 4px;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    padding-left: 20px;
    padding-right: 20px;
    padding-top: 12px;
    padding-bottom: 12px;
}

.pop-up {
    margin: 0 auto;
    background-color: antiquewhite;
    width: 300px;
    height: 300px;
    padding: 0 30px;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
    z-index: 9999;
    border-radius: 8px;
}

.button {
    margin-top: 10px;
    display: flex;
    justify-content: center;
}

.pop-up button {
    position: relative;
}
</style>
