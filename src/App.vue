<template>
  <div>
    <Project :lists="lists" />
  </div>
</template>

<script>
export default {
  components: {
    Project: () => import("@/components/Project")
  },
  computed: {
    lists() {
      return [...Array(3).keys()].map(listIndex => {
        return {
          label: `List ${listIndex + 1}`,
          tasks: [...Array(10).keys()].map(taskIndex => {
            return {
              label: `Task ${taskIndex + 1}`
            };
          })
        };
      });
    }
  }
};
</script>
