<script lang="ts" setup>
import { defineProps } from 'vue'
defineProps({
  text: {
    type: String,
    default: ''
  },
  type: {
    type: String,
    default: 'success'
  }
})
</script>

<template>
  <div class="c-message">
    <div class="c-message-notice">
      <div class="c-message-notice-content">
        <div
          :class="[
            'c-message-notice-content__icon',
            { 'is-success': type === 'success' },
            { 'is-fail': type === 'fail' },
          ]"
        />
        <span>{{ text }}</span>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.c-message {
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  z-index: 9999;
  animation: move 2.5s forwards;

  @keyframes move {
    0% {
      top: -50px;
    }

    20% {
      top: 16px;
    }

    80% {
      top: 16px;
    }

    100% {
      top: -50px;
    }
  }

  &-notice {
    &-content {
      display: inline-block;
      padding: 9px 12px;
      background: #fff;
      border-radius: 8px;
      box-shadow: 0 6px 16px 0 rgb(0 0 0 / 8%), 0 3px 6px -4px rgb(0 0 0 / 12%),
        0 9px 28px 8px rgb(0 0 0 / 5%);
      pointer-events: all;
      line-height: 1.5;
      display: flex;
      align-items: center;
      color: "#333";
      font-size: 14px;

      &__icon {
        width: 16px;
        height: 16px;
        margin-right: 8px;

        &.is-success {
          background: url("./assets/icon-success.png") no-repeat;
          background-size: contain;
        }

        &.is-fail {
          background: url("./assets/icon-fail.png") no-repeat;
          background-size: contain;
        }
      }
    }
  }
}
</style>
