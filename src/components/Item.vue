<template>
  <div class="item">
    <div class="item-label rounded bg-white shadow-sm">
      {{ item.label }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    item: {
      required: true,
      type: Object
    }
  }
};
</script>

<style lang="sass" scoped>
.item-label
  padding: ($spacer / 4)
  color: rgba($dark, .9)
  font-weight: 600
</style>
