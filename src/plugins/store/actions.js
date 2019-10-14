import axios from 'axios'

const api = axios.create({
  baseURL: process.env.VUE_APP_API_BASE
})

export default {
  async getTodos ({ commit }, search) {
    if (!search) search = ''

    let { data } = await api.get('/todos', { params: { search: search } })
    commit('updateTodos', data)
  },

  async createTodo ({ state, dispatch }, todo) {
    await api.post('/todos', todo)
    await dispatch('getTodos', state.searchText)
  },

  async updateTodo ({ state, dispatch }, { id, todo }) {
    await api.put(`/todos/${id}`, todo)
    await dispatch('getTodos', state.searchText)
  },

  async deleteTodo ({ state, dispatch }, id) {
    await api.delete(`/todos/${id}`)
    await dispatch('getTodos', state.searchText)
  }
}
