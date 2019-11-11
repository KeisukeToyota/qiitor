import axios from 'axios'

class Qiita {
  constructor() {
    this.options = {
      get(apiToken = null) {
        const options = {
          headers: {
            'X-Requested-With': 'XMLHttpRequest',
            Accept: 'application/json'
          }
        }

        if (apiToken) {
          options.headers.Authorization = `Bearer ${apiToken}`
        }

        return options
      }
    }
  }

  // TODO auth get user items...
  getArticles() {
    return axios
      .get('https://qiita.com/api/v2/users/KeisukeToyota/items')
      .then(({ data }) => {
        return data
      })
  }

  // TODO
  postArticle(title, body) {
    return null
  }

  // TODO
  postDraftArticle(title, body) {
    return null
  }

  // TODO
  updateArticle(id, title, body) {
    return null
  }

  // TODO
  updateDraftArticle(id, title, body) {
    return null
  }

  // TODO
  deleteArticle(id) {
    return null
  }
}

const qiita = new Qiita()

export default qiita
