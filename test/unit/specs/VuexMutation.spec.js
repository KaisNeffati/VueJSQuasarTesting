import ItemsStore from '../../../src/store/modules/items'

// destructure assign mutations
const {ReceivedItems} = ItemsStore.mutations

// destructure assign mutations
const {setCountItems} = ItemsStore.mutations

describe('mutations', () => {
  it('ReceivedItems', () => {
    // mock state
    const state = {all: []}
    const items = [{
      id: '1',
      title: 'TestItem',
      email: 'item@item.com',
      description: 'testing description',
      price: '500'
    }]
    // apply mutation
    ReceivedItems(state, {items})
    // assert result
    expect(state.all).to.equal(items)
  })
  it('setCountItems', () => {
    // mock state
    const state = {nbr: 0}
    const nbr = 2
    // apply mutation
    setCountItems(state, {nbr})
    // assert result
    expect(state.nbr).to.equal(nbr)
  })
})
