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
      // create some sample lists of tasks
      const colors = [
        "rgba(255, 0, 0, 0.1)",
        "rgba(0, 255, 0, 0.1)",
        "rgba(0, 0, 255, 0.1)"
      ];

      return [...Array(colors.length).keys()].map(listIndex => {
        const listId = Math.random()
          .toString(36)
          .substring(7);
        return {
          id: listId,
          label: `List ${listIndex + 1}`,
          color: colors.splice(0, 1),
          tasks: [...Array(10).keys()].map(taskIndex => {
            const id = Math.random()
              .toString(36)
              .substring(7);
            return {
              id,
              listId,
              label: `Task ${taskIndex + 1}`
            };
          })
        };
      });
    }
  }
};
</script>
