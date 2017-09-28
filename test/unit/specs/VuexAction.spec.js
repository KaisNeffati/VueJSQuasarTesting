/*
const actionsInjector = require('inject-loader!../../../src/store/modules/items')

// create the module with our mocks
const actions = actionsInjector({
  '../../api/itemsApi': {
    setAdditionalProperties () {
      [{
        title: 'TestItem',
        email: 'item@item.com',
        description: 'testing description',
        price: '500'
      }].items.forEach(item => {
        item['id'] = 1
        item['favorite'] = false
      })
    },
    getAllItems (cb) {
      cb([{
        id: 1,
        favorite: false,
        title: 'TestItem',
        email: 'item@item.com',
        description: 'testing description',
        price: '500'
      }])
    },
    // get element from API
    countItems (cb) {
      cb([{
        id: 1,
        favorite: false,
        title: 'TestItem',
        email: 'item@item.com',
        description: 'testing description',
        price: '500'
      }])
    }
  }
})

// helper for testing action with expected mutations
const testAction = (action, payload, state, expectedMutations, done) => {
  let count = 0

  // mock commit
  const commit = (type, payload) => {
    const mutation = expectedMutations[count]

    try {
      expect(mutation.type).to.equal(type)
      if (payload) {
        expect(mutation.payload).to.deep.equal(payload)
      }
    }
    catch (error) {
      done(error)
    }

    count++
    if (count >= expectedMutations.length) {
      done()
    }
  }

  // call the action with mocked store and arguments
  action({commit, state}, payload)

  // check if no mutations should have been dispatched
  if (expectedMutations.length === 0) {
    expect(count).to.equal(0)
    done()
  }
}

describe('actions', () => {
  it('setAdditionalProperties', done => {
    testAction(actions.setAdditionalProperties, null, {}, [
      {
        type: 'RECEIVE_PRODUCTS',
        payload: [{
          id: 1,
          favorite: false,
          title: 'TestItem',
          email: 'item@item.com',
          description: 'testing description',
          price: '500'
        }]
      }
    ], done)
  })

  it('countItemsAction', done => {
    testAction(actions.countItemsAction, null, {}, [
      {
        type: 'RECEIVE_PRODUCTS', payload: 1
      }
    ], done)
  })

  it('getItemsAction', done => {
    testAction(actions.getItemsAction, null, {}, [
      {
        type: 'RECEIVE_PRODUCTS',
        payload: [{
          id: 1,
          favorite: false,
          title: 'TestItem',
          email: 'item@item.com',
          description: 'testing description',
          price: '500'
        }]
      }
    ], done)
  })
})
*/
