<template>
  <v-container class="fill-height">
    <v-row align="center" justify="center">
      <v-col cols="12" md="10">
        <welcome-msg />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import WelcomeMsg from '@/components/Home/WelcomeMsg'

export default {
  name: 'Home',

  components: {
    WelcomeMsg
  }
}
</script>
