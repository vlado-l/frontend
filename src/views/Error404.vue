<template>
  <v-container class="fill-height">
    <v-row align="center" justify="center">
      <v-col cols="12" md="10">
        <error-msg />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import ErrorMsg from '@/components/Error404/ErrorMsg'

export default {
  name: 'Error404',

  components: {
    ErrorMsg
  }
}
</script>
