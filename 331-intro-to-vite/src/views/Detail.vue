<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router';
import { useDataStore } from '@/stores/data'
import Detail from "@/components/Detail.vue"
import Ranking from "@/components/Ranking.vue"

const route = useRoute()
const store = useDataStore()
const countryObj = store.data[route.query.index] 
const text = ref("")

console.log("countryObj:",route.query.index, countryObj)

function handleSend() {
  store.addComment(store.data[route.query.index].name, text.value)
  text.value = ""
}

onMounted(() => {
})
</script>

<template>
  <h1>Country/Region Details</h1>
  <div class="page">
    <Detail class="detail" :country="countryObj"></Detail>
    <Ranking :country="countryObj"></Ranking>

    <div class="inputContainer">
      <input type="text" v-model="text" placeholder="Please enter a sentence to encourage athletes" />
      <div class="btn" @click="handleSend">Send</div>
    </div>

    <div class="commentList">
      <div class="comment" v-for="(comment, index) in countryObj.comment" :key="index">
        {{ comment }}
      </div>
    </div>
  </div>
</template>

<style scoped>
  .page {
    width: 400px;
    padding: 10px;
    border: 1px solid salmon;
    margin: 10px auto 0;
    border-radius: 8px;
  }
  .detail {
    margin-bottom: 20px;
  }
  .inputContainer {
    height: 40px;
    display: flex;
    margin-top: 20px;
    align-items: center;
    justify-content: space-between;
  }
  input {
    flex: 1;
    height: 40px;
    padding: 0 20px;
    border-radius: 8px;
    border: 1px solid #666;
  }
  .btn {
    flex: 0 0 80px;
    height: 40px;
    cursor: pointer;
    margin-left: 10px;
    text-align: center;
    line-height: 40px;
    border: 1px solid #666;
    border-radius: 8px;
  }

  .commentList {
    margin-top: 20px;
  }

  .comment {
    height: 30px;
    text-align: center;
    margin-block: 10px;
    line-height: 30px;
    border-radius: 8px;
    background-color: #eee;
  }
</style>