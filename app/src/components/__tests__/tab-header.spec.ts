import { mount } from '@vue/test-utils'
import TabHeader from '../TabHeader.vue'

describe('TabHeader.vue', () => {
  it('render tab-header active component', () => {
    const wrapper = mount(TabHeader, {
      propsData: {
        text: 'My tab',
        active: true
      }
    })
    expect(wrapper.props().text).toBe('My tab')
    expect(wrapper.props().active).toBe(true)
    expect(wrapper.find('.g-tab').attributes().class).toBe('g-tab g-tab--active')
  })
  it('render tab-header non active component', () => {
    const wrapper = mount(TabHeader, {
      propsData: {
        text: 'My tab',
        active: false
      }
    })
    expect(wrapper.contains('.g-tab')).toBe(true)
    expect(wrapper.classes('g-tab--active')).toBe(false)
  })
})
