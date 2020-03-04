<template>
  <div>
    <Task v-for="task in tasks" :key="task.label" :task="task" class="task" />
  </div>
</template>

<script>
export default {
  props: {
    tasks: {
      required: true,
      type: Array
    }
  },

  components: {
    Task: () => import("@/components/Task")
  }
};
</script>
