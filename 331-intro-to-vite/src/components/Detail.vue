<template>
    <div class="box">
        <div class="country">{{ props.country.name }}</div>
        <div class="text">{{ props.country.info }}</div>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted, defineProps } from 'vue'
import { useRouter } from 'vue-router';
import { useDataStore } from '@/stores/data'

const props = defineProps({
    country: {
        type: Object
    }
})

const router = useRouter()
const store = useDataStore()

onMounted(() => {
})
</script>
<style scoped>
.box {
}
.country {
    color: #333;
    font-size: 22px;
    font-weight: 700;
    margin-bottom: 10px;
}
.text {
    color: #666;
    text-align: left;
    overflow: hidden;
    word-break:break-all;
    display: -webkit-box;
    -webkit-line-clamp: 5;
    -webkit-box-orient: vertical;
}
</style>
