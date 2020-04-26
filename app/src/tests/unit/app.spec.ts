import { mount, createLocalVue } from '@vue/test-utils'
import App from '../../App.vue'
import InputField from '@/common/ui/InputField.vue'
import Button from '@/common/ui/Button.vue'
import TabContent from '@/components/TabContent.vue'
import TabHeader from '@/components/TabHeader.vue'

const prefix = 'sn'

const createWrapper = () => {
  const localVue = createLocalVue()
  localVue.component(`${prefix}-input-field`, InputField)
  localVue.component(`${prefix}-button`, Button)
  return mount(App, {
    localVue,
    data: () => (
      {
        salary: 0,
        offer: 0,
        tab: 'employer',
        tabActive: false,
        isSuccess: true
      }
    )
  })
}

describe('App.vue', () => {
  it('render app component', () => {
    const wrapper = createWrapper()
    expect(wrapper.contains('#app')).toBe(true)
    expect(wrapper.contains(TabContent)).toBe(true)
    expect(wrapper.contains(TabHeader)).toBe(true)
  })
  it('test app set offer', async () => {
    const wrapper = createWrapper()
    wrapper.find({ ref: 'tab-content-offer' }).vm.$emit('input', 20)
    await wrapper.vm.$nextTick()
    // @ts-ignore
    expect(wrapper.vm.offer).toBe(20)
  })
  it('test app set tab', async () => {
    const wrapper = createWrapper()
    wrapper.find({ ref: 'tab-header-employee' }).vm.$emit('click')
    await wrapper.vm.$nextTick()
    // @ts-ignore
    expect(wrapper.vm.tab).toBe('employee')
    wrapper.find({ ref: 'tab-header-employer' }).vm.$emit('click')
    await wrapper.vm.$nextTick()
    // @ts-ignore
    expect(wrapper.vm.tab).toBe('employer')
  })
})
