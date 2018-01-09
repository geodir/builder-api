import Vue from 'vue'


import VueResource from 'vue-resource'
Vue.use(VueResource)

import GeodirBuilderApi from '@/GeodirBuilderApi' //'@/GeodirBuilderApi'
Vue.use(GeodirBuilderApi, { token: 'c0031490-4a63-4023-867d-385af385e569'})


import HelloWorld from '@/components/HelloWorld'

describe('HelloWorld.vue', () => {

  it('has a monted hook', () => {
    expect(typeof HelloWorld.created).to.equal('function')
  })

  it('should render correct contents', ()   => {
    const vm = new Vue({
      el: document.createElement('div'),
      render: (h) => h(HelloWorld)
    })

    expect(vm.$el.querySelector('.hello p strong').textContent)
      .to.equal('Teams:')
  })
})
