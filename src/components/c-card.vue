<script lang="ts" setup>
const props = defineProps({
  title: {
    type: String,
    default: ''
  }
})
</script>

<template>
  <div class="c-card">
    <div class="c-card-title">
      {{ props.title }}
    </div>
    <div class="c-card-body">
      <slot />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.c-card + .c-card {
  padding-top: 12px;
}
.c-card {
  width: 240px;

  &-title {
    color: rgba(0, 0, 0, 0.88);
    font-weight: 600;
    font-size: 16px;
    display: inline-block;
    margin-bottom: 12px;
    border-bottom: 1px dashed #d9d9d9;
  }
}
</style>
