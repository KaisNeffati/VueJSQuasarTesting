/*
import Vue from 'vue'
import Items from '../../../src/components/Items.vue'

describe('Items', () => {
  // Evaluate the results of functions in
  // the raw component options
  function getRenderedText (Component, propsData) {
    const Ctor = Vue.extend(Component)
    const vm = new Ctor({ propsData: propsData }).$mount()
    return vm.$el.textContent
  }

  describe('Items', () => {
    it('renders correctly with different props', () => {
      expect(getRenderedText(Items, {
        items: [{id:'1', title:'TestItem',email:'item@item.com',description:'testing description',price:'500'}]
      })).to.equal(' TestItem item@item.com \n        testing description\n       500 euro  ')
    })
  })

})
*/
