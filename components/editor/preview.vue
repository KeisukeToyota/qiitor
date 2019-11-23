<template>
  <v-container>
    <h1 class="preview-title" v-if="title">{{ title }}</h1>
    <div class="preview-body" v-html="$md.render(body)"></div>
  </v-container>
</template>

<script>
export default {
  name: 'Preview',
  computed: {
    title: {
      get() {
        return this.$store.state.editor.title
      }
    },
    body: {
      get() {
        return this.$store.state.editor.body
      }
    }
  }
}
</script>

<style scoped>
.preview-title {
  border-bottom: 3px solid #fff;
  padding-bottom: 5px;
  margin-bottom: 20px;
}
.preview-body {
  word-wrap: break-word;
}
</style>
