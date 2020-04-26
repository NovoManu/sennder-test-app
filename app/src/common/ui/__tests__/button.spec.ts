import { mount } from '@vue/test-utils'
import Button from '../Button.vue'

describe('InputField.vue', () => {
  it('render input field', () => {
    const wrapper = mount(Button)
    expect(wrapper.contains('button')).toBe(true)
  })
})
