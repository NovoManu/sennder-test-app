import { mount } from '@vue/test-utils'
import InputField from '../InputField.vue'

describe('InputField.vue', () => {
  it('render input field', () => {
    const wrapper = mount(InputField)
    expect(wrapper.contains('input')).toBe(true)
  })
})
