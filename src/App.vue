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
      // create some sample lists of items
      const colors = [
        "rgba(255, 0, 0, 0.1)",
        "rgba(0, 255, 0, 0.1)",
        "rgba(0, 0, 255, 0.1)"
      ];

      return [...Array(colors.length).keys()].map(listIndex => {
        const listId = Math.random()
          .toString(36)
          .substring(7);

        const label = `List ${listIndex + 1}`;
        const color = colors.splice(0, 1);

        const items = [...Array(Math.round(Math.random() * 10)).keys()].map(
          itemIndex => {
            const taskId = Math.random()
              .toString(36)
              .substring(7);

            const label = `Item ${itemIndex + 1}`;

            return { id: taskId, listId, label };
          }
        );

        return { id: listId, items, label, color };
      });
    }
  }
};
</script>
