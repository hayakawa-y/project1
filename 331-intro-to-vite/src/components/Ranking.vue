<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div class="ranking">
        <div class="item" v-for="(country, index) in props.country.list" :key="index">
            <div class="name">{{ country.name }}</div>
            <div class="num">{{ country.ranking }}</div>
        </div>
    </div>
</template>


<script setup lang="ts">
import { ref, onMounted, defineProps } from 'vue'

const props = defineProps({
    country: {
        type: Object
    }
})

onMounted(() => {
})
</script>



<style scoped>
    .ranking {
        display: flex;
        flex-direction: column;
    }
    .item {
        display: flex;
        height: 50px;
        padding: 0 10px;
        line-height: 50px;
        align-items: center;
        justify-content: space-between;
        
    }
    .item:not(:last-child) {
        border-bottom: 1px solid #bbb;
    }
    .name, .ranking {
        flex: 1;
    }
    .name {
        text-align: left;
        margin-right: 20px;
    }
    .ranking {
        text-align: right;
    }
</style>