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

import Markdown from '~/components/editor/markdown'
import Preview from '~/components/editor/Preview'

export default {
  components: {
    Markdown,
    Preview
  }
}
</script>

<style scoped>
.split {
  width: 50%;
  max-width: 50%;
}
</style>
