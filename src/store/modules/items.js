import itemApi from '../../api/itemsApi'
import utils from './utils'
// initial state
const state = {
  all: [],
  nbr: 0
}

// getters
const getters = {
  allItems: state => state.all,
  nbrItems: state => state.nbr
}

// actions
const actions = {
  setAdditionalProperties () {
    itemApi.setAdditionalProperties()
  },
  getItemsAction ({commit}, body) {
    itemApi.getAllItems(items => {
      let FiltredItems = items.filter(utils.searchItems(body.search))
      let SortedItems = !(!body.sortBy.order || !body.sortBy.option) ? FiltredItems.sort(utils.sortItems(body.sortBy.option, body.sortBy.order)) : FiltredItems
      let offset = (body.offset - 1) * body.limit
      let limit = body.limit + offset
      let PaginatedFiltredItems = SortedItems.slice(offset, limit)
      commit('ReceivedItems', {items: PaginatedFiltredItems})
    })
  },
  countItemsAction ({commit}, body) {
    itemApi.countItems(items => {
      let FiltredItems = items.filter(utils.searchItems(body.search))
      let nbr = Math.ceil(FiltredItems.length / body.limit)
      commit('setCountItems', {nbr})
    })
  }
}

// mutations
const mutations = {
  ReceivedItems (state, {items}) {
    state.all = items
  },
  setCountItems (state, {nbr}) {
    state.nbr = nbr
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
