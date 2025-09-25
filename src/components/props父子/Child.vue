<template>
    <div class="child">
        <div class="content">
            <div>Child</div>
            <h3>儿子拿到父亲的车：{{ che }}</h3>
            <h3>儿子的玩具:{{ toy }}</h3>
            <button @click="sendToy(toy)">把玩具送给父亲</button>
        </div>
    </div>
</template>

<script lang="ts" setup name="Child">
import { ref } from 'vue';

defineProps(["che","sendToy"]);
let toy = ref('奥特曼');

</script>

<style scoped>

.child { 
    background-color: lightskyblue;
    height: 200px;
    margin-top: 10px;
    border-radius: 20px;
    width: calc(100% - 100px);
    display: flex;
    justify-content: center;
    align-items: center;
}

.content {
    text-align: center;
}
</style>