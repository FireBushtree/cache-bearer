<script lang="ts" setup></script>

<template>
  <div class="c-message">
    <div class="c-message-notice">
      <div class="c-message-notice-content">
        <div class="c-message-notice-content__icon" />
        <span>Copy cookie success</span>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.c-message {
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  top: 16px;
  z-index: 9999;

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

      &__icon {
        width: 24px;
        height: 24px;
        background: url('./assets/icon-success.png') no-repeat;
        background-size: contain;
        margin-right: 8px;
      }
    }
  }
}
</style>
