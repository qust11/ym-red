<template>
    <div class="father">
        Father
        <h3>父亲有量车：{{ car }}</h3>
        <h3 v-if="toy">儿子的玩具：{{ toy }}</h3>
        <Child  :che = "car"  :sendToy="getToy"/>
    </div>

</template>

<script lang="ts" setup name="Father">
import Child from '@/components/props父子/Child.vue';
import { ref } from 'vue';

let car = ref('奔驰');


let toy = ref('');

function getToy(value:string){
    console.log('父亲收到儿子的玩具',value);
    toy.value = value;
}
</script>

<style scoped>
.father {
    background-color: rgb(98, 93, 93);
    height: 300px;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 5px;
    text-align: center;
}

</style>