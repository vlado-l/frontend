<template>
  <v-dialog v-model="isOpened" max-width="500px" persistent>
    <template #activator="{ on }">
      <v-btn color="primary" dark class="mb-2" v-on="on">
        <v-icon small>fas fa-plus fa-fw</v-icon> Add todo
      </v-btn>
    </template>

    <v-card>
      <v-card-title>
        <span class="headline">{{ formTitle }}</span>
      </v-card-title>

      <v-card-text>
        <edit-form />
      </v-card-text>

      <v-card-actions>
        <v-spacer />
        <v-btn color="primary" @click="close" :disabled="isDisabled">Cancel</v-btn>
        <v-btn color="primary" @click="save" :loading="isLoading">Save</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import { mapState, mapActions, mapMutations } from 'vuex'
import EditForm from './EditForm'

export default {
  name: 'EditDialog',

  components: {
    EditForm
  },

  data () {
    return {
      isDisabled: false,
      isLoading: false,

      defaultItem: {
        title: '',
        description: ''
      }
    }
  },

  computed: {
    ...mapState([ 'todos', 'dialogState', 'editedIndex', 'editedItem' ]),

    isOpened: {
      get () {
        return this.dialogState
      },
      set (val) {
        this.setDialogState(val)
      }
    },

    formTitle () {
      return this.editedIndex === -1
        ? 'New Item'
        : 'Edit Item'
    }
  },

  watch: {
    isOpened (val) {
      val || this.close()
    }
  },

  methods: {
    ...mapActions([ 'createTodo', 'updateTodo' ]),
    ...mapMutations([ 'setDialogState', 'setEditedIndex', 'setEditedItem' ]),

    close () {
      this.setDialogState(false)

      setTimeout(() => {
        this.setEditedIndex(-1)
        this.setEditedItem({ ...this.editedItem, ...this.defaultItem })
      }, 300)
    },

    async save () {
      this.isDisabled = true
      this.isLoading = true

      if (this.editedIndex > -1) {
        await this.updateTodo({
          id: this.todos[this.editedIndex].id,
          todo: this.editedItem
        })
      } else {
        await this.createTodo(this.editedItem)
      }

      this.isDisabled = false
      this.isLoading = false
      this.close()
    }
  }
}
</script>
