export default {
  updateTodos (state, todos) {
    state.todos = todos
  },

  setSearchText (state, text) {
    state.searchText = text
  },

  showError (state, error) {
    state.errorText = `Error no. ${error.errno} (${error.code})`
    state.snackbarState = true
  },

  closeSnackbar (state) {
    state.snackbarState = false
  },

  setDialogState (state, payload) {
    state.dialogState = payload
  },

  setEditedIndex (state, index) {
    state.editedIndex = index
  },

  setEditedItem (state, object) {
    state.editedItem = object
  },

  setEditedItemTitle (state, title) {
    state.editedItem.title = title
  },

  setEditedItemDescription (state, description) {
    state.editedItem.description = description
  }
}
