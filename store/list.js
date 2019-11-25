export const state = () => ({
  articles: []
})

export const mutations = {
  setAticles(state, articles) {
    state.articles = articles
  }
}
