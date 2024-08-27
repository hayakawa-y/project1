<script setup lang="ts">
import { ref, onMounted, watchEffect, computed } from 'vue'
import { useDataStore } from '@/stores/data'


const store = useDataStore()

const list = ref([{
  name: "",
  ranking: "",
}])
const country = ref("")

function add() {
  list.value.push({
      name: "",
      ranking: "",
  })
}

function save() {
 const obj =  {
    name: country.value,
    info: "",
    list: list.value,
    comment: [],
  }
  store.addCountry(obj)
}

</script>

<template>
  <div class="page">
    <h1>Add country/region information</h1>
    <input class="countryInput" v-model="country" placeholder="Please enter the country/region name" />
    <div class="project" v-for="(project, index) in list" :key="index">
      <input class="name" v-model="project.name" placeholder="Please enter a project!" />
      <input class="ranking" v-model="project.ranking" placeholder="Please enter the ranking" />
    </div>

    <div class="add" @click="add">Add a project</div>

    <div class="save" @click="save">save</div>
  </div>
</template>

<style scoped>
* {
  box-sizing: border-box;
}
.page {
  width: 600px;
  margin: 20px auto;
  border-radius: 8px;
  border: 1px solid rgb(170, 127, 170);
}
h1 {
  margin-bottom: 15px;
}
.countryInput {
  width: 400px;
  padding: 0 10px;
  height: 40px;
  line-height: 40px;
  margin-bottom: 10px;
}
.project {
  display: flex;
  width: 400px;
  margin: 0 auto 10px;
  justify-content: space-between;
}
.name, .ranking {
  flex: 1;
  padding: 0 10px;
  height: 40px;
  line-height: 40px;
}
.name {
  margin-right: 10px;
}
.ranking {}
.add, .save {
  cursor: pointer;
  height: 30px;
  line-height: 30px;
  width: 120px;
  border-radius: 8px;
  margin: 0 auto;
  border: 1px solid #999;
  margin-bottom: 10px;
}
.save {
}
</style>
