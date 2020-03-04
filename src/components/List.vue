<template>
  <div class="list rounded" :style="styles">
    <div class="list-label">
      {{ list.label }}
    </div>
    <Items :items="list.items" />
  </div>
</template>

<script>
export default {
  props: {
    list: {
      required: true,
      type: Object
    }
  },

  computed: {
    styles() {
      return `background-color: ${this.list.color};`;
    }
  },

  components: {
    Items: () => import("@/components/Items")
  }
};
</script>

<style lang="sass" scoped>
.list
  background: rgba($dark, .1)
.list-label
  padding: ($spacer / 2) $spacer
  color: rgba($dark, .6)
  font-weight: 600
</style>
