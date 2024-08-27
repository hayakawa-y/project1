import { ref } from 'vue';
import { defineStore } from 'pinia';

interface ListItem {
  name: string;
  ranking: number;
}

interface Country {
  name: string;
  info: string;
  list: ListItem[];
  comment?: string[];
}

export const useDataStore = defineStore('data', () => {
  const data = ref<Country[]>([
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
    },
  ]);

  function addComment(Country: string, text: string): void {
    const countryObj = data.value.find(item => item.name === Country);
    if (countryObj) {
      if (!countryObj.comment) {
        countryObj.comment = [];
      }
      countryObj.comment.push(text);
    } else {
      console.error(`Country ${Country} not found.`);
    }
  }

  function addCountry(obj: Country): void {
    data.value.push(obj);
  }

  return { data, addComment, addCountry };
});
