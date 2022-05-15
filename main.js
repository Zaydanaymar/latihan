Vue.createApp({
    data() {
      return {

        articles: [],
      };
    },
    methods: {
      getArticleData() {
        axios
          .get('https://raw.githubusercontent.com/Zaydanaymar/tekweb2022/main/sk1-latihan4/contents/articles.json')
          .then((res) => {
            console.log(res.data);
            this.articles = res.data;
          })
          .catch((error) => {
            console.log(error);
          });
      },
    },
    beforeMount() {
      this.getArticleData();
    },
  }).mount('#app');
  