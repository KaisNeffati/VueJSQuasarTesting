import Index from '../../../src/components/Index.vue'

describe('Index', () => {
  // Evaluate the results of functions in
  // the raw component options
  it('sets the correct default data', () => {
    expect(typeof Index.data).to.equal('function')
    const defaultData = Index.data()
    expect(defaultData.search).to.equal('')
  })
})
