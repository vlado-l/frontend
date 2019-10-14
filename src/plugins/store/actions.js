import axios from 'axios'

const api = axios.create({
  baseURL: process.env.VUE_APP_API_BASE
})

export default {
  async getTodos ({ commit }, search) {
    if (!search) search = ''

    let { data } = await api.get('/todos', { params: { search: search } })

    if (data.code) {
      commit('showError', data)
    } else {
      commit('updateTodos', data)
    }
  },

  async createTodo ({ state, commit, dispatch }, todo) {
    let { data } = await api.post('/todos', todo)

    if (data.code) commit('showError', data)
    await dispatch('getTodos', state.searchText)
  },

  async updateTodo ({ state, commit, dispatch }, { id, todo }) {
    let { data } = await api.put(`/todos/${id}`, todo)

    if (data.code) commit('showError', data)
    await dispatch('getTodos', state.searchText)
  },

  async deleteTodo ({ state, commit, dispatch }, id) {
    let { data } = await api.delete(`/todos/${id}`)

    if (data.code) commit('showError', data)
    await dispatch('getTodos', state.searchText)
  }
}
