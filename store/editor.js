export const state = () => ({
  title: '',
  body: ''
})

export const mutations = {
  setTitle(state, title) {
    state.title = title
  },

  setBody(state, body) {
    state.body = body
  }
}
