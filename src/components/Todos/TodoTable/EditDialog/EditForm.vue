<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-text-field
          label="Todo title"
          :value="editedItem.title"
          @input="setEditedItemTitle"
        />
      </v-col>

      <v-col cols="12">
        <v-textarea
          label="Todo description"
          hint="Describe this todo"
          :value="editedItem.description"
          @input="setEditedItemDescription"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

export default {
  name: 'EditForm',
  computed: mapState([ 'editedItem' ]),
  methods: mapMutations([ 'setEditedItemTitle', 'setEditedItemDescription' ])
}
</script>
