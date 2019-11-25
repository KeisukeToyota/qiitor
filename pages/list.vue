<template>
  <v-layout>
    <v-flex class="text-center">
      <v-data-table
        :headers="headers"
        :items="articles"
        class="elevation-1"
        @click:row="selectedArticle"
      ></v-data-table>
    </v-flex>
  </v-layout>
</template>

<script>
'use strict'
import qiita from '~/lib/qiita'

export default {
  components: {},
  data() {
    return {
      articles: [],
      headers: [
        { text: 'ID', value: 'id' },
        { text: 'TITLE', value: 'title' },
        { text: 'LIKES', value: 'likes_count' },
        { text: 'URL', value: 'url' }
      ]
    }
  },
  created() {
    this.fetchArticles()
  },
  methods: {
    fetchArticles() {
      const articles = this.$store.state.list.articles

      if (articles.length > 0) {
        this.articles = articles
      } else {
        qiita.getArticles().then((data) => {
          console.log(data)
          this.articles = data
        })
      }
    },
    selectedArticle(article) {
      this.$router.push({
        path: '/',
        query: { title: article.title, body: article.body }
      })
    }
  }
}
</script>

<style scoped></style>
