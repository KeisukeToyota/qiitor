<template>
  <v-container fluid>
    <v-row>
      <v-col>
        <v-text-field label="Title" />
        <vue-editor v-model="body" />
      </v-col>
      <v-col>
        <div class="markdown-body" v-html="$md.render(body)"></div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      title: '',
      body: ''
    }
  }
}
</script>
