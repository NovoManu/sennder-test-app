import { mount } from '@vue/test-utils'
import InputField from '../InputField.vue'

describe('InputField.vue', () => {
  it('render input field component', () => {
    const wrapper = mount(InputField, {
      propsData: {
        value: 23,
        label: 'My label',
        type: 'number'
      }
    })
    expect(wrapper.contains('input')).toBe(true)
    expect(wrapper.props().value).toBe(23)
    expect(wrapper.props().label).toBe('My label')
    expect(wrapper.props().type).toBe('number')
  })
  it('render input field component with no props', () => {
    const wrapper = mount(InputField, {
      propsData: {
        value: 54
      }
    })
    expect(wrapper.contains('input')).toBe(true)
    expect(wrapper.props().value).toBe(54)
    expect(wrapper.props().label).toBe('Label')
    expect(wrapper.props().type).toBe('text')
  })
  it('test input event', async () => {
    const wrapper = mount(InputField, {
      propsData: {
        value: 0
      }
    })
    expect(wrapper.props().value).toBe(0)
    wrapper.vm.$emit('input', 12)
    await wrapper.vm.$nextTick()
    expect(wrapper.emitted().input).toBeTruthy()
    wrapper.vm.$emit('input', 123)
    expect(wrapper.emitted().input.length).toBe(2)
    expect(wrapper.emitted().input[0]).toEqual([12])
    expect(wrapper.emitted().input[1]).toEqual([123])
  })
})
