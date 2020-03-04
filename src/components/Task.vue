<template>
  <div class="label rounded bg-white shadow-sm" :style="styles">
    {{ task.label }}
  </div>
</template>

<script>
export default {
  props: {
    task: {
      required: true,
      type: Object
    }
  },

  computed: {
    styles() {
      return `--offset-top: ${this.task.offsetTop}; --offset-left: ${this.task.offsetLeft}; --width: ${this.task.width}`;
    }
  }
};
</script>

<style lang="sass" scoped>
.label
  padding: ($spacer / 4)
  color: rgba($dark, .9)
  font-weight: 600
</style>
