<template>
  <div class="project-wrapper d-flex flex-column">
    <div
      class="project-header p-2 d-flex justify-content-center bg-white shadow"
    >
      <Actions :actions="layout.options" :active.sync="layout.active" />
    </div>
    <div class="project-body flex-grow-1 bg-light">
      <Lists
        :lists="lists"
        :class="layout.options[layout.active].toLowerCase()"
      />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    lists: Array
  },

  components: {
    Actions: () => import("@/components/Actions"),
    Lists: () => import("@/components/Lists")
  },

  data() {
    return {
      layout: {
        active: 1,
        options: ["Table", "KanBan", "Timeline"]
      }
    };
  },

  computed: {
    activeLayoutName() {
      return this.layout.options[this.layout.active];
    }
    // height() {
    //   let height = 0;
    //   if (this.activeLayoutName == "Table") {
    //     height = this.lists
    //       .map(list => list.items.length)
    //       .reduce((acc, length) => acc + length);
    //   }
    //   if (this.activeLayoutName == "KanBan") {
    //     height =
    //       this.lists.slice().sort((a, b) => a.items.length - b.items.length)[0]
    //         .items.length + 1;
    //   }
    //   if (this.activeLayoutName == "Timeline") {
    //     height = this.lists
    //       .map(list => list.items.length)
    //       .reduce((acc, length) => acc + length);
    //   }
    //
    //   return height;
    // },
    // width() {
    //   return this.listsComputed
    //     .map(list => list.items)
    //     .flat()
    //     .reduce((acc, task) => task.offsetLeft + task.width);
    // },
    // listsComputed() {
    //   let offsetTop = 0;
    //   let offsetLeft = 0;
    //
    //   return this.lists.map((list, $index) => {
    //     if ($index > 0) {
    //       offsetTop = offsetTop + this.lists[$index - 1].items.length;
    //     }
    //
    //     const height = list.items.length;
    //
    //     Object.assign(list, { offsetTop, height });
    //
    //     list.items = list.items.map((task, $taskIndex) => {
    //       const prev =
    //         list.items[$taskIndex - 1] ||
    //         (this.lists[$index - 1]
    //           ? this.lists[$index - 1].items[
    //               this.lists[$index - 1].items.length - 1
    //             ]
    //           : null);
    //       offsetLeft = prev ? offsetLeft + prev.width : offsetLeft;
    //
    //       Object.assign(task, {
    //         offsetTop: $taskIndex,
    //         offsetLeft,
    //         width: Math.round(Math.random() * 4) + 2
    //       });
    //
    //       return task;
    //     });
    //
    //     return list;
    //   });
    // }
  }
};
</script>

<style lang="sass">
.project-wrapper
  height: 100vh
.project-header
  position: relative
  z-index: 10
.project-body
  position: relative
  z-index: 9
  overflow: auto
  *
    transition: all .5s

.lists,
.list,
.list-label,
.items
  position: absolute
  top: 0
  left: 0
  width: 100%
  height: 100%

// .kanban
//   height: calc(#{$spacer + ($spacer / 2)} * var(--height) + calc(#{$spacer} * 2))
//   .list
//     $width: ($spacer * 8)
//     top: 0
//     width: $width
//     height: calc(#{$spacer + ($spacer / 2)} * var(--height) + #{$spacer + ($spacer / 2)})
//     margin: $spacer
//     @for $i from 1 through 10
//       &:nth-child(#{$i})
//         left: #{($width + 2) * ($i - 1)}
//   .items
//     top: $spacer
//   .item
//     width: calc(100% - #{$spacer})
//     top: calc(#{$spacer + ($spacer / 2)} * var(--offset-top))
//     margin: $spacer / 2
// .table
//   width: calc(var(--width))
//   height: calc(#{$spacer} * var(--height) + #{$spacer * 3})
//   margin: $spacer
//   .list
//     height: calc(#{$spacer + ($spacer / 12)} * var(--height) + #{($spacer / 12)})
//     @for $i from 1 through 10
//       &:nth-child(#{$i})
//         top: calc(#{$spacer + ($spacer / 12)} * var(--offset-top) + #{($spacer / 6) * ($i - 1)})
//   .list-label
//     transform: rotate(-90deg)
//     top: $spacer / 2
//     left: -($spacer / 2)
//   .items
//     left: $spacer * 1.5
//     top: ($spacer / 12)
//     width: calc(100% - #{$spacer * 1.5} - #{($spacer / 12)})
//   .item
//     width: calc(100% - #{$spacer} + #{$spacer})
//     top: calc(#{$spacer + ($spacer / 12)} * var(--offset-top))
// .timeline
//   width: calc(#{$spacer} * var(--width) + calc(#{$spacer} * 2))
//   height: calc(#{$spacer + ($spacer / 2)} * var(--height) + calc(#{$spacer} * 1.5))
//   .list
//     width: calc(#{$spacer} * var(--width) + calc(#{$spacer} * 2))
//     height: calc(#{$spacer + ($spacer / 2)} * var(--height) + #{$spacer / 2})
//     @for $i from 1 through 10
//       &:nth-child(#{$i})
//         top: calc(#{$spacer + ($spacer / 2)} * var(--offset-top) + #{($spacer / 1.5) * ($i - 1)})
//   .list-label
//     transform: rotate(-90deg)
//     top: $spacer / 2
//     left: -($spacer / 2)
//   .items
//     left: $spacer
//     top: 0
//     width: calc(100% - #{$spacer})
//     height: calc(#{$spacer + ($spacer / 2)} * var(--height))
//   .item
//     top: calc(#{$spacer + ($spacer / 2)} * var(--offset-top))
//     left: calc(#{$spacer} * var(--offset-left))
//     width: calc(#{$spacer} * var(--width))
//     margin: $spacer / 2
</style>
