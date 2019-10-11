<template>
  <v-snackbar v-model="isOpened" bottom="bottom" color="error" :timeout="5000">
    {{ errorText }}
    <v-btn dark text @click="closeSnackbar">Close</v-btn>
  </v-snackbar>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

export default {
  name: 'InfoSnack',

  computed: {
    ...mapState([ 'snackbarState', 'errorText' ]),

    isOpened: {
      get () {
        return this.snackbarState
      },
      set () {
        this.closeSnackbar()
      }
    }
  },

  methods: {
    ...mapMutations([ 'closeSnackbar' ])
  }
}
</script>
