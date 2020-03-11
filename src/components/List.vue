<template>
  <div class="list rounded" :style="styles">
    <div class="list-label">
      {{ list.label }}
    </div>
    <Items :items="itemsWithStyles" />
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
    itemsWithStyles() {
      let prevLeft = 0;

      return this.list.items.map(item => {
        const styles = {
          "--left": prevLeft,
          "--width": item.duration
        };

        prevLeft += item.duration;

        return Object.assign(item, { styles });
      });
    },
    styles() {
      return Object.assign({}, this.list.styles, {
        "background-color": this.list.color
      });
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
  padding: ($spacer / 2)
  color: rgba($dark, .6)
  font-weight: 600
</style>
