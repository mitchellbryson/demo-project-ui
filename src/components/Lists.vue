<template>
  <div class="lists">
    <List v-for="list in listsWithStyles" :key="list.id" :list="list" />
  </div>
</template>

<script>
export default {
  props: {
    lists: {
      required: true,
      type: Array
    }
  },

  computed: {
    listsWithStyles() {
      let prevHeight = 0;
      let prevLeft = 0;

      return this.lists
        .map(list => {
          const duration = list.items
            .map(item => item.duration)
            .reduce((acc, val) => acc + val);

          const styles = {
            "--top": prevHeight,
            "--left": prevLeft,
            "--height": list.items.length
            // this would make the list fit the items
            // "--width": prevLeft + duration
          };

          prevHeight += list.items.length;
          prevLeft += duration;

          return Object.assign(list, { styles });
        })
        .map(list => {
          const styles = {
            // this makes the list full width
            "--width": prevLeft
          };

          Object.assign(list.styles, styles);

          return list;
        });
    }
  },

  components: {
    List: () => import("@/components/List")
  }
};
</script>
