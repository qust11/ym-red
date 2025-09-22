<template>
  <div class="person">
    姓：<input v-model="firstname" value="zhang" /> <br/>
    名：<input v-model="lastname" value="san"/> <br/>
    <h3>姓名：{{ fullname}}</h3>
    <h3>姓名：{{ fullname}}</h3>
    <h3>姓名：{{ fullname}}</h3>
    <h3>姓名：{{ fullname}}</h3>
    <h3>姓名：{{ fullname}}</h3>
    <button @click="changeName">修改名称</button>
  </div>
</template>

<script setup name="Person" lang="ts">
import { get } from 'http';
import { ref,computed, Text } from 'vue'

let firstname = ref('zhang');
let lastname = ref('san');

let fullname = computed( {
  get() {
      // 无论上边使用多少次，只会调用一次计算属性，计算属性是有缓存的
    console.log('1');
    return firstname.value.slice(0,1).toUpperCase() + firstname.value.slice(1) + ' - ' + lastname.value;
  },
  set(val) {
    console.log('2');
    const [str1,str2] = val.split('-');
    firstname.value =str1 || '';
    lastname.value = str2 || '';
  }
});


function changeName() {
  fullname.value = 'li-si';
}

</script>

<style scoped>
.person {
  background-color: azure;
  padding: 10px;
}

button{
  margin: 10px;
}
</style>
