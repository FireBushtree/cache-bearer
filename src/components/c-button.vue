<template>
  <button class="c-button">
    <slot />
  </button>
</template>

<style lang="scss" scoped>
$color-primary: #4096ff;
.c-button {
  color: #000;
  border: 1px solid #d9d9d9;
  background: #fff;
  font-size: 14px;
  height: 32px;
  padding: 4px 15px;
  border-radius: 6px;
  display: inline-block;
  font-weight: 400;
  white-space: nowrap;
  text-align: center;
  outline: none;
  background-image: none;
  box-shadow: 0 2px 0 rgb(0 0 0 / 2%);
  touch-action: manipulation;
  transition: all 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
  cursor: pointer;

  &:hover {
    color: $color-primary;
    border-color: $color-primary;
  }
}
</style>
