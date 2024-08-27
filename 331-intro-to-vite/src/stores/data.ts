import { ref } from 'vue'
import { defineStore } from 'pinia'

// 定义数据存储
export const useDataStore = defineStore('data', () => {
  // 初始化数据
  const data = ref([
    {
      name: "China",
      info: "China,[i] officially the People's Republic of China (PRC),[j] is a country in East Asia.",
      list: [
        { name: "Run", ranking: 1 },
        { name: "High jump", ranking: 3 },
        { name: "Swimming", ranking: 1 },
        { name: "Long jump", ranking: 23 },
        { name: "Shooting", ranking: 8 }
      ],
      comment: ["Come on.", "666", "Good!"]
    },
    {
      name: "Japan",
      info: "Japan[a] is an island country in East Asia, located in the Pacific Ocean off the northeast coast of the Asian mainland.",
      list: [
        { name: "Run", ranking: 3 },
        { name: "High jump", ranking: 1 },
        { name: "Swimming", ranking: 2 },
        { name: "Long jump", ranking: 12 },
        { name: "Shooting", ranking: 9 }
      ],
      comment: ["Good!!!"]
    },
    {
      name: "America",
      info: "The United States of America (USA or U.S.A.), commonly known as the United States (US or U.S.) or America, is a country primarily located in North America.",
      list: [
        { name: "Run", ranking: 3 },
        { name: "High jump", ranking: 4 },
        { name: "Swimming", ranking: 2 },
        { name: "Long jump", ranking: 31 },
        { name: "Shooting", ranking: 15 }
      ],
      comment: ["Fierce!"]
    }
  ]);

  // 添加评论的函数
  function addComment(Country: string, text: string) {
    const countryObj = data.value.find(item => item.name === Country);

    // 检查 countryObj 是否为 undefined
    if (countryObj) {
      if (!countryObj.comment) {
        countryObj.comment = [];
      }
      countryObj.comment.push(text);
    } else {
      console.error(`Country ${Country} not found.`);
    }
  }

  // 添加国家的函数
  function addCountry(obj: { name: string; info: string; list: { name: string; ranking: number }[]; comment?: string[] }) {
    data.value.push(obj);
  }

  return { data, addComment, addCountry };
});
