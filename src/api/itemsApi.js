import data from '../data/items.json'
import uuidV4 from 'uuid/V4'

export default {
  // get element from API
  // cb : the function passed in parameter could be a request to an External API
  // Vue.http.post(url,body,params)
  // .then(doSomthing)
  // .error(errorHundler)
  setAdditionalProperties () {
    data.items.forEach(item => {
      item['id'] = uuidV4()
      item['favorite'] = false
    })
  },
  getAllItems (cb) {
    cb(data.items)
  },
  // get element from API
  countItems (cb) {
    cb(data.items)
  }
}
