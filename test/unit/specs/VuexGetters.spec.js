import ItemsStore from '../../../src/store/modules/items'

// destructure assign mutations
const {allItems} = ItemsStore.getters

// destructure assign mutations
const {nbrItems} = ItemsStore.getters

describe('getters', () => {
  it('allItems', () => {
    // mock state
    const state = {
      all: [{
        id: '1',
        title: 'TestItem',
        email: 'item@item.com',
        description: 'testing description',
        price: '500'
      }]
    }

    // apply mutation
    const result = allItems(state)

    // assert result
    expect(result).to.deep.equal([{
      id: '1',
      title: 'TestItem',
      email: 'item@item.com',
      description: 'testing description',
      price: '500'
    }])
  })
  it('nbrItems', () => {
    // mock state
    const state = {
      nbr: 1
    }

    // apply mutation
    const result = nbrItems(state)

    // assert result
    expect(result).to.equal(1)
  })
})
