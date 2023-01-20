import { expect, test, describe } from 'vitest'
import { mount } from '@vue/test-utils'
import CMessage from '../c-message.vue'

describe('test message compoent', () => {
  test('props.test works fine', () => {
    const text = 'copy cookie success'
    const wrapper = mount(CMessage, {
      props: {
        text
      }
    })

    expect(wrapper.text()).toContain(text)
  })

  test('props.type works fine', () => {
    const iconClass = '.c-message-notice-content__icon'
    const successClass = 'is-success'
    const failClass = 'is-fail'

    const wrapper = mount(CMessage)
    const domClasses = wrapper.find(iconClass).classes()
    expect(domClasses.includes(successClass)).toBeTruthy()
    expect(domClasses.includes(failClass)).toBeFalsy()

    const failWrapper = mount(CMessage, {
      props: {
        type: 'fail'
      }
    })

    const failDomClasses = failWrapper.find(iconClass).classes()
    expect(failDomClasses.includes(successClass)).toBeFalsy()
    expect(failDomClasses.includes(failClass)).toBeTruthy()
  })
})
