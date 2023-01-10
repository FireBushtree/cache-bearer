<script lang="ts" setup>
import CButton from './components/c-button.vue'
import CCard from './components/c-card.vue'

const getCookie = async () => {
  const queryOptions = { active: true, lastFocusedWindow: true }
  const [tab] = await chrome.tabs.query(queryOptions)
  if (!tab) {
    return
  }
  console.log(chrome.tabs.sendMessage)
  console.log(tab)
  const res = await chrome.tabs.sendMessage(tab.id, { type: 'getCookie' })
  console.log(res)
}
</script>

<template>
  <div class="cache-bearer">
    <c-card title="Local Storage">
      <div class="cache-bearer-button-wrap">
        <c-button @click="getCookie">copy</c-button>
        <c-button>paste</c-button>
        <c-button>clear</c-button>
      </div>
    </c-card>
  </div>
</template>

<style lang="scss" scoped>
.cache-bearer {
  padding: 16px 24px;

  &-button-wrap {
    display: flex;
    justify-content: space-between;
  }
}
</style>
