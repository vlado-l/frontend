<template>
  <v-data-table :headers="headers" :items="todos" :loading="isLoading" class="elevation-1">
    <template #top>
      <v-toolbar flat color="white" extended>
        <v-toolbar-title>TODOS</v-toolbar-title>
        <v-divider class="mx-4" inset vertical />
        <v-spacer />
        <edit-dialog />

        <template #extension>
          <v-text-field clearable prepend-icon="fas fa-search fa-xs fa-fw" clear-icon="fas fa-times fa-xs" label="Search..." class="mt-4" :value="searchText" @input="setSearchText" />
        </template>
      </v-toolbar>
    </template>

    <template #item.action="{ item }">
      <v-icon small class="mr-2" @click="editItem(item)">fas fa-edit fa-fw</v-icon>
      <v-icon small @click="deleteItem(item)">fas fa-trash-alt fa-fw</v-icon>
    </template>
  </v-data-table>
</template>

<script>
import debounce from 'lodash/debounce'
import { mapState, mapActions, mapMutations } from 'vuex'
import EditDialog from './EditDialog'

export default {
  name: 'TodoTable',

  components: {
    EditDialog
  },

  data () {
    return {
      isLoading: false,

      headers: [
        { text: 'ID', value: 'id', sortable: true },
        { text: 'Title', value: 'title', sortable: true },
        { text: 'Description', value: 'description', sortable: true },
        { text: 'Actions', value: 'action', sortable: false, align: 'right' }
      ]
    }
  },

  computed: {
    ...mapState([ 'todos', 'editedItem', 'searchText' ])
  },

  watch: {
    searchText () {
      this.updateData()
    }
  },

  methods: {
    ...mapActions([ 'getTodos', 'deleteTodo' ]),
    ...mapMutations([ 'setSearchText', 'setDialogState', 'setEditedIndex', 'setEditedItem' ]),

    editItem (item) {
      this.setEditedIndex(this.todos.indexOf(item))
      this.setEditedItem({ ...this.editedItem, ...item })
      this.setDialogState(true)
    },

    async deleteItem (item) {
      const id = this.todos[this.todos.indexOf(item)].id

      if (confirm('Are you sure you want to delete this item?')) {
        this.isLoading = true
        await this.deleteTodo(id)
        this.isLoading = false
      }
    },

    updateData: debounce(function () {
      this.getTodos(this.searchText)
    }, 300)
  },

  async created () {
    this.isLoading = true
    await this.getTodos('')
    this.isLoading = false
  }
}
</script>
