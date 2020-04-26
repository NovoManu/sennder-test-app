import { mount, createLocalVue } from '@vue/test-utils'
import TabContent from '../TabContent.vue'
import InputField from '@/common/ui/InputField.vue'
import Button from '@/common/ui/Button.vue'

const prefix = 'sn'

describe('TabContent.vue', () => {
  it('render tab-content component', () => {
    const localVue = createLocalVue()
    localVue.component(`${prefix}-input-field`, InputField)
    localVue.component(`${prefix}-button`, Button)
    const wrapper = mount(TabContent, {
      localVue,
      propsData: {
        text: 'My tab',
        value: 23
      }
    })
    expect(wrapper.props().text).toBe('My tab')
    expect(wrapper.props().value).toBe(23)
  })
  it('test tab-content component events', () => {
    const localVue = createLocalVue()
    localVue.component(`${prefix}-input-field`, InputField)
    localVue.component(`${prefix}-button`, Button)
    const wrapper = mount(TabContent, {
      localVue,
      propsData: {
        text: 'My tab',
        value: 23
      }
    })
    wrapper.vm.$emit('input', 12)
    wrapper.vm.$emit('click')
    expect(wrapper.emitted().input.length).toBe(1)
    expect(wrapper.emitted().click.length).toBe(1)
  })
})
