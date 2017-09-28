/**
 * Created by Kais NEFFATI on 17/09/2017.
 */
export default {
  sortItems (option, order) {
    return function (item1, item2) {
      if (order && option) {
        const itemA = (isNaN(item1[option])) ? item1[option].toUpperCase() : parseInt(item1[option])
        const itemB = (isNaN(item2[option])) ? item2[option].toUpperCase() : parseInt(item2[option])
        let comparison = 0
        if (itemA > itemB) {
          comparison = 1
        }
        else if (itemA < itemB) {
          comparison = -1
        }
        return ((order === 'asc') ? comparison : (comparison * -1))
      }
    }
  },
  searchItems (search) {
    return item => Object.keys(item).some(key => item[key].toString().includes(search))
  }
}
