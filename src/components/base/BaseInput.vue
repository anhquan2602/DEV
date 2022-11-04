<template>
    <div>
       <input type="text" @input="getValue($event)">
    </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue';

const emit = defineEmits(['update:modelValue'])
const getValue = function (e: Event) {
    if(e && e.currentTarget) {
        const inputEvent = e.currentTarget as HTMLInputElement;
        emit("update:modelValue", inputEvent.value);
    }
}
</script>
<style lang="css">

</style>