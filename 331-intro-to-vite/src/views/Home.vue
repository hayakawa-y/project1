<template>
  <div class="home">
    <h1 class="title">Ranking List</h1>
    <div class="list">
      <div class="item" v-for="(country, index) in store.data" :key="index" @click="handleNavigateTo(index)">
        <div class="top">
          <div class="name">{{ country.name }}</div>
          <div class="ranking">
            <div class="text" style="color: #ff00ff;">Gold medal: {{ country.list.filter(item => item.ranking === 1).length }}</div>
            <div class="text" style="color: #aa00aa;">Silver medal: {{ country.list.filter(item => item.ranking === 2).length }}</div>
            <div class="text" style="color: #770077;">Bronze medal: {{ country.list.filter(item => item.ranking === 3).length }}</div>
          </div>
        </div>
        <div class="info">{{ country.info }}</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router';
import { useDataStore } from '@/stores/data'

const router = useRouter()
const store = useDataStore()

function handleNavigateTo(index) {
  router.push({ name: 'Detail', query: { index } })
}
</script>

<style scoped>
  * {
    box-sizing: border-box;
  }
  .title {

  }
  .list {
    width: 400px;
    padding: 10px;
    margin: 20px auto;
    border-radius: 8px;
    border: 1px solid #aaa;
  }
  .item {
    height: 80px;
    border-radius: 4px;
    padding: 5px;
    border: 1px solid #f3f3f3;
    margin-bottom: 10px;
  }
  .top {
    display: flex;
    margin-bottom: 5px;
    align-items: center;
    justify-content: flex-start;
  }
  .name {
    color: #333;
    font-size: 22px;
    font-weight: 700;
    margin-right: 5px;
  }
  .ranking {
    display: flex;
    color: #888;
    align-items: center;
    justify-content: flex-start;

  }
  .ranking .text {
    color: #666;
    font-size: 12px;
    margin-right: 10px;
  } 
  .info {
    color: #666;
    text-align: left;
    overflow: hidden;
    word-break:break-all;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
</style>


