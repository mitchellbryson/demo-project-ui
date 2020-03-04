<template>
  <div class="project-wrapper d-flex flex-column">
    <ActionGroup
      class="project-actions"
      :actions="layout.options"
      :active.sync="layout.active"
    />

    <div class="project-scroll flex-grow-1 bg-light">
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
    ActionGroup: () => import("@/components/ActionGroup"),
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
    },
    height() {
      let height = 0;
      if (this.activeLayoutName == "Table") {
        height = this.lists
          .map(list => list.items.length)
          .reduce((acc, length) => acc + length);
      }
      if (this.activeLayoutName == "KanBan") {
        height =
          this.lists.slice().sort((a, b) => a.items.length - b.items.length)[0]
            .items.length + 1;
      }
      if (this.activeLayoutName == "Timeline") {
        height = this.lists
          .map(list => list.items.length)
          .reduce((acc, length) => acc + length);
      }

      return height;
    },
    width() {
      return this.listsComputed
        .map(list => list.items)
        .flat()
        .reduce((acc, task) => task.offsetLeft + task.width);
    },
    listsComputed() {
      let offsetTop = 0;
      let offsetLeft = 0;

      return this.lists.map((list, $index) => {
        if ($index > 0) {
          offsetTop = offsetTop + this.lists[$index - 1].items.length;
        }

        const height = list.items.length;

        Object.assign(list, { offsetTop, height });

        list.items = list.items.map((task, $taskIndex) => {
          const prev =
            list.items[$taskIndex - 1] ||
            (this.lists[$index - 1]
              ? this.lists[$index - 1].items[
                  this.lists[$index - 1].items.length - 1
                ]
              : null);
          offsetLeft = prev ? offsetLeft + prev.width : offsetLeft;

          Object.assign(task, {
            offsetTop: $taskIndex,
            offsetLeft,
            width: Math.round(Math.random() * 4) + 2
          });

          return task;
        });

        return list;
      });
    }
  }
};
</script>

<style lang="sass">
$actionsHeight: 70px
$padding: 2rem

.project *
  transition: all .5s
.project-actions
  position: relative
  z-index: 10
.project
  position: relative
  z-index: 9
  overflow: auto
  width: 100%
  height: calc(100vh - #{$actionsHeight})

.project-canvas
  position: relative
  height: calc(#{$padding} * var(--height))
.list
  position: absolute
  top: 0
  left: 0
  width: 100%
  background: rgba($dark, .1)
.list-label
  position: absolute
  top: 0
  left: 0
  padding: ($spacer / 2) $spacer
  color: rgba($dark, .6)
  font-weight: 600
.tasks
  position: absolute
  top: 0
  left: 0
  width: 100%
.task
  position: absolute
  top: 0
  left: 0
  width: 100%

.kanban
  height: calc(#{$padding + ($padding / 2)} * var(--height) + calc(#{$padding} * 2))
  .list
    $width: ($padding * 8)
    top: 0
    width: $width
    height: calc(#{$padding + ($padding / 2)} * var(--height) + #{$padding + ($padding / 2)})
    margin: $padding
    @for $i from 1 through 10
      &:nth-child(#{$i})
        left: #{($width + 2) * ($i - 1)}
  .tasks
    top: $padding
  .task
    width: calc(100% - #{$padding})
    top: calc(#{$padding + ($padding / 2)} * var(--offset-top))
    margin: $padding / 2
.table
  width: calc(var(--width))
  height: calc(#{$padding} * var(--height) + #{$padding * 3})
  margin: $padding
  .list
    height: calc(#{$padding + ($padding / 12)} * var(--height) + #{($padding / 12)})
    @for $i from 1 through 10
      &:nth-child(#{$i})
        top: calc(#{$padding + ($padding / 12)} * var(--offset-top) + #{($padding / 6) * ($i - 1)})
  .list-label
    transform: rotate(-90deg)
    top: $padding / 2
    left: -($padding / 2)
  .tasks
    left: $padding * 1.5
    top: ($padding / 12)
    width: calc(100% - #{$padding * 1.5} - #{($padding / 12)})
  .task
    width: calc(100% - #{$padding} + #{$padding})
    top: calc(#{$padding + ($padding / 12)} * var(--offset-top))
.timeline
  width: calc(#{$padding} * var(--width) + calc(#{$padding} * 2))
  height: calc(#{$padding + ($padding / 2)} * var(--height) + calc(#{$padding} * 1.5))
  .list
    width: calc(#{$padding} * var(--width) + calc(#{$padding} * 2))
    height: calc(#{$padding + ($padding / 2)} * var(--height) + #{$padding / 2})
    @for $i from 1 through 10
      &:nth-child(#{$i})
        top: calc(#{$padding + ($padding / 2)} * var(--offset-top) + #{($padding / 1.5) * ($i - 1)})
  .list-label
    transform: rotate(-90deg)
    top: $padding / 2
    left: -($padding / 2)
  .tasks
    left: $padding
    top: 0
    width: calc(100% - #{$padding})
    height: calc(#{$padding + ($padding / 2)} * var(--height))
  .task
    top: calc(#{$padding + ($padding / 2)} * var(--offset-top))
    left: calc(#{$padding} * var(--offset-left))
    width: calc(#{$padding} * var(--width))
    margin: $padding / 2
</style>
