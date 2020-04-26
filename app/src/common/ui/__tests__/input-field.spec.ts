import { mount } from '@vue/test-utils'
import InputField from '../InputField.vue'

describe('InputField.vue', () => {
  it('render input field component', () => {
    const wrapper = mount(InputField, {
      propsData: {
        label: 'My label',
        type: 'number',
      }
    })
    expect(wrapper.contains('input')).toBe(true)
    expect(wrapper.props().label).toBe('My label')
    expect(wrapper.props().type).toBe('number')
  })
  it('render input field component with no props', () => {
    const wrapper = mount(InputField)
    expect(wrapper.contains('input')).toBe(true)
    expect(wrapper.props().label).toBe('Label')
    expect(wrapper.props().type).toBe('text')
  })
  it('test input event', () => {
    const wrapper = mount(InputField)
    const eventWrapper = wrapper.find({ ref: 'sn-input-field' })
    eventWrapper.trigger('input')
  })
})
