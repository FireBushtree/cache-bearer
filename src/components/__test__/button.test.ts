import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import CButton from '../c-button.vue'

describe('test button component', () => {
  test('slot.default works fine', () => {
    const testMessage = 'test'
    const wrapper = mount(CButton, {
      slots: {
        default: testMessage
      }
    })

    expect(wrapper.text()).toContain(testMessage)
  })
})
