<template>
  <v-container fluid>
    <v-row>
      <v-col>
        <markdown />
      </v-col>
      <v-col>
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
        this.articles = data
      })
    }
  }
}
</script>

<style scoped></style>
