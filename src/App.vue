<script lang="ts" setup>
import { ref } from 'vue'
import { clearCookie, copyCookie, pasteCookie } from './utils/chrome'
import CButton from './components/c-button.vue'
import CCard from './components/c-card.vue'

const cacheList = ref([
  { label: 'Cookie', copy: copyCookie, paste: pasteCookie, clear: clearCookie },
  { label: 'Local Storage', copy: '', paste: '', clear: '' },
  { label: 'Session Storage', copy: '', paste: '', clear: '' }
])
</script>

<template>
  <div class="cache-bearer">
    <c-card
      v-for="(item, index) in cacheList"
      :key="index"
      :title="item.label"
    >
      <div class="cache-bearer-button-wrap">
        <c-button @click="item.copy">
          copy
        </c-button>
        <c-button @click="item.paste">
          paste
        </c-button>
        <c-button @click="item.clear">
          clear
        </c-button>
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
