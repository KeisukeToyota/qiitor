<template>
  <v-container fluid>
    <v-row>
      <v-col class="split">
        <markdown />
      </v-col>
      <v-col class="split">
        <preview />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
'use strict'
import qiita from '~/lib/qiita'

import Markdown from '~/components/editor/markdown'
import Preview from '~/components/editor/Preview'

export default {
  components: {
    Markdown,
    Preview
  },
  data() {
    return {
      articles: []
    }
  },
  created() {
    this.fetchArticles()
  },
  methods: {
    fetchArticles() {
      qiita.getArticles().then((data) => {
        console.log(data)
        this.articles = data
      })
    }
  }
}
</script>

<style scoped>
.split {
  width: 50%;
  max-width: 50%;
}
</style>
