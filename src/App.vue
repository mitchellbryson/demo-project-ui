<template>
  <div>
    <Project :lists="lists" @refresh="createLists" />
  </div>
</template>

<script>
export default {
  components: {
    Project: () => import("@/components/Project")
  },

  data() {
    return {
      lists: []
    };
  },

  methods: {
    createLists() {
      const colors = [
        "rgba(255, 0, 0, 0.1)",
        "rgba(0, 255, 0, 0.1)",
        "rgba(0, 0, 255, 0.1)",
        "rgba(255, 0, 0, 0.1)",
        "rgba(0, 255, 0, 0.1)",
        "rgba(0, 0, 255, 0.1)"
      ];
      // create some sample lists of items
      const lists = [...Array(colors.length).keys()].map(listIndex => {
        const listId = Math.random()
          .toString(36)
          .substring(7);

        const label = `List ${listIndex + 1}`;
        const color = colors.splice(0, 1);

        const items = [...Array(Math.round(Math.random() * 25) + 3).keys()].map(
          itemIndex => {
            const taskId = Math.random()
              .toString(36)
              .substring(7);

            const label = `Item ${itemIndex + 1}`;
            const duration = Math.round(Math.random() * 5) + 2;

            return { id: taskId, listId, label, duration };
          }
        );

        return { id: listId, items, label, color };
      });

      this.lists = lists;
    }
  },

  mounted() {
    this.createLists();
  }
};
</script>
