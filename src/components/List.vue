<template>
  <div class="list rounded" :style="styles">
    <div ref="label" class="list-label">
      {{ list.label }}
    </div>
    <Tasks :tasks="list.tasks" ref="tasks" class="tasks" />
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

  components: {
    Tasks: () => import("@/components/Tasks")
  },

  computed: {
    styles() {
      return `--offset-top: ${this.list.offsetTop}; --height: ${this.list.height}; background-color: ${this.list.color};`;
    }
  }
};
</script>
