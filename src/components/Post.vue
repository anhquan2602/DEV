<template >
    <div class="detail-post">
        <div class="title-post">{{titlePost}}</div>
        <div class="post-description">
            {{description}}
        </div>
    </div>
</template>
<script lang="ts" setup>
import { Ref, ref } from 'vue';

// Khai báo Interface
interface IParamsProps {
  titlePost: string,
  description?: string,
}

// Định nghĩa Props
const props = defineProps<IParamsProps>();

console.log(props.titlePost);

</script>
<style lang="css">

</style>