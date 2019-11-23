<template>
  <v-container>
    <v-text-field outlined v-model="title" label="Title" />
    <v-textarea
      no-resize
      outlined
      label="Body"
      rows="30"
      v-model="body"
    ></v-textarea>
    <v-flex right>
      <v-btn color="success">
        <v-icon left>mdi-content-save</v-icon>
        SAVE
      </v-btn>
      <v-btn color="primary">
        <v-icon left>mdi-file-download</v-icon>
        EXPORT
      </v-btn>
      <v-btn color="warning">
        <v-icon left>mdi-file-upload</v-icon>
        POST
      </v-btn>
      <v-btn color="error">
        <v-icon left>mdi-delete</v-icon>
        DELETE
      </v-btn>
    </v-flex>
  </v-container>
</template>

<script>
export default {
  name: 'Markdown',
  computed: {
    title: {
      get() {
        return this.$route.query.title || this.$store.state.editor.title
      },
      set(val) {
        this.$store.commit('editor/setTitle', val)
      }
    },
    body: {
      get() {
        return this.$route.query.body || this.$store.state.editor.body
      },
      set(val) {
        this.$store.commit('editor/setBody', val)
      }
    }
  },
  created() {
    this.$store.commit('editor/setTitle', this.title)
    this.$store.commit('editor/setBody', this.body)
  }
}
</script>

<style scoped></style>
