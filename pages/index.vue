<template>
  <v-container fluid>
    <v-text-field v-model="title" label="Title" />
    <tui-editor
      mode="markdown"
      preview-style="vertical"
      :options="options"
      height="400px"
      class="white"
    />
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
  components: {},
  data() {
    return {
      title: '',
      body: '# Hello world',
      options: {
        minHeight: '200px',
        language: 'en_US',
        useCommandShortcut: true,
        useDefaultHTMLSanitizer: true,
        usageStatistics: true,
        hideModeSwitch: true,
        toolbarItems: [
          'heading',
          'bold',
          'italic',
          'strike',
          'divider',
          'hr',
          'quote',
          'divider',
          'ul',
          'ol',
          'task',
          'indent',
          'outdent',
          'divider',
          'table',
          'image',
          'link',
          'divider',
          'code',
          'codeblock'
        ]
      }
    }
  }
}
</script>
