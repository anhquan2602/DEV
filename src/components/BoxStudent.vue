<script setup lang="ts">
import { Ref, ref } from 'vue'
import axios from 'axios'
import CONSTANT from '../const/constant'
import Util from '../common/Util'
import { HttpStatusResult } from '../const/enum'
import IStudent from '../model/Student';
import StudentPopup from './StudentPopup.vue';

// Khai báo Interface
interface IParamsProps {
  nameStudent: string,
  description: string
}

// Định nghĩa Props
const props = withDefaults(defineProps<IParamsProps>(), {
  nameStudent : "Ánh",
  description: "Sinh viên đại học Công Đoàn"
})

console.log(props.nameStudent);

const count = ref(0)

</script>

<template>
  <div class="box">
    <h1>{{nameStudent}}</h1>
    <p>{{description}}</p>
  </div>
  <!-- <StudentPopup /> -->
</template>

<style scoped>
table,
th,
td {
  border: 1px solid;
}

.list {
  flex: 1;
  padding: 20px;
}

table {
  width: 900px;
  margin: 0 auto;
  border-collapse: collapse;
}

.box {
  width: 200px;
  height: 200px;
  display: inline-block;
  justify-content: center;
  align-items: center;
  border: 1px solid gray;
  margin: 10px;
}
</style>
