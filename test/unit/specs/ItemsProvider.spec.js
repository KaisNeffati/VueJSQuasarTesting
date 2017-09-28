import ItemsProvider from '../../../src/components/ItemsProvider.vue'

describe('ItemsProvider', () => {
  // Evaluate the results of functions in
  // the raw component options
  it('has a created hook', () => {
    expect(typeof ItemsProvider.created).to.equal('function')
  })

  it('sets the correct default data', () => {
    expect(typeof ItemsProvider.data).to.equal('function')
    const defaultData = ItemsProvider.data()
    expect(defaultData.search).to.equal('')
    expect(defaultData.favorites).to.have.lengthOf(0)
    expect(defaultData.sortOptions).to.have.lengthOf(4)
  })
})
