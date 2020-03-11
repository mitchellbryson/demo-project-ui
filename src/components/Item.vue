<template>
  <div class="item" :style="styles">
    <div class="item-content rounded bg-white shadow-sm">
      <span class="item-label column">
        {{ item.label }}
      </span>
      <span class="column"> duration: {{ item.duration }} days </span>
      <span class="column"> id: {{ item.id }} </span>
      <span class="column"> listId: {{ item.listId }} </span>
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
  },

  computed: {
    styles() {
      return Object.assign({}, this.item.styles);
    }
  }
};
</script>

<style lang="sass" scoped>
.item
  margin-bottom: $spacer / 2
  min-height: $spacer * 2
.item-content
  padding: ($spacer / 6) ($spacer / 2)
  color: rgba($dark, .9)
  font-size: $font-size-sm
  color: $text-muted
.item-label
  font-weight: 600
  line-height: 1.5
  font-size: $font-size-base
  color: $dark
</style>
