<template>
  <div class="actions p-2 d-flex justify-content-center bg-white shadow">
    <div class="btn-group">
      <button
        v-for="(value, key) in actions"
        @click="onActivate(key)"
        :key="key"
        :class="{ active: active === key }"
        class="btn btn-sm btn-outline-primary flex-shrink-1"
      >
        {{ value }}
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    actions: {
      required: true,
      type: Array
    },
    active: {
      required: false,
      type: Number
    }
  },

  methods: {
    onActivate(key) {
      this.$emit("update:active", key);
    }
  }
};
</script>
