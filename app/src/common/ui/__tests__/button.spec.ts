import { mount } from '@vue/test-utils'
import Button from '../Button.vue'

describe('InputField.vue', () => {
  it('render button', () => {
    const wrapper = mount(Button, {
      propsData: {
        text: 'My button'
      }
    })
    expect(wrapper.contains('button')).toBe(true)
    expect(wrapper.props().text).toBe('My button')
  })
  it('render button with no props', () => {
    const wrapper = mount(Button)
    expect(wrapper.contains('button')).toBe(true)
    expect(wrapper.props().text).toBe('Button')
  })
  it('test click event', () => {
    const wrapper = mount(Button)
    const eventWrapper = wrapper.find({ ref: 'sn-button' })
    eventWrapper.trigger('click')
  })
})
