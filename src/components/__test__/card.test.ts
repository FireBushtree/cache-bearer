import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import CCard from '../c-card.vue'

describe('test card component', () => {
  test('props.title works fine', () => {
    const testTitle = 'test title'
    const wrapper = mount(CCard, {
      props: {
        title: testTitle
      }
    })

    expect(wrapper.text()).toContain(testTitle)
  })

  test('slot.default works fine', () => {
    const testMessage = 'test message'

    const wrapper = mount(CCard, {
      slots: {
        default: testMessage
      }
    })

    const el = wrapper.find('.c-card-body')
    expect(el.text()).toContain(testMessage)
  })
})
