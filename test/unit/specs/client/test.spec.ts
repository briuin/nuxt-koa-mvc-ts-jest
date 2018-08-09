import { shallow } from 'vue-test-utils'
import { Store } from "vuex"
import { createRenderer } from 'vue-server-renderer'
import Component from '~/client/pages/index.vue'

describe(`Component`, () => {
  let store:any;
  beforeEach(()=>{
    store = new Store({
      getters: {
        counter(){return 0}
      }
    })
  })
  it('renders to a snapshot', () => {
    const renderer = createRenderer()
    const wrapper = shallow(Component as any, {store})
    renderer.renderToString(wrapper.vm, (err:string, str) => {
      if (err) throw new Error(err)
      expect(str).toMatchSnapshot()
      expect(wrapper.find('.title').text()).toEqual('Universal Vue.js Application Framework');
    })
  })

})