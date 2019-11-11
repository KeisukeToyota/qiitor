export default function({ $axios }) {
  // $axios.setToken('')
  // $axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest'
  $axios.onResponse((config) => {
    $axios.setHeader('Access-Control-Allow-Origin', '*')
  })
}
