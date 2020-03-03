<template>
  <div>
    <div
      class="project-actions p-3 d-flex justify-content-center bg-white shadow"
    >
      <div class="actions btn-group">
        <button
          @click="layoutActive = $index"
          v-for="(value, key, $index) in layoutOptions"
          :key="$index"
          class="btn btn-outline-primary flex-shrink-1"
          :class="{ active: layoutActive === $index }"
        >
          {{ value }}
        </button>
      </div>
    </div>
    <div class="project bg-light">
      <div
        class="project-canvas"
        :class="layoutOptions[layoutActive]"
        :style="`--height: ${height}; --width: ${width}`"
      >
        <div
          class="list rounded"
          v-for="list in listsComputed"
          :key="list.label"
          :style="`--offset-top: ${list.offsetTop}; --height: ${list.height}`"
        >
          <div class="list-label">{{ list.label }}</div>
          <div class="tasks" ref="tasks">
            <article
              class="task rounded bg-white shadow-sm"
              v-for="task in list.tasks"
              :key="task.label"
              :style="
                `--offset-top: ${task.offsetTop}; --offset-left: ${task.offsetLeft}; --width: ${task.width}`
              "
            >
              {{ task.label }}
            </article>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    lists: Array
  },

  data() {
    return {
      layoutActive: 0,
      layoutOptions: {
        0: "table",
        1: "kanban",
        2: "timeline"
      }
    };
  },

  computed: {
    height() {
      let height = 0;
      if (this.layoutActive == 0) {
        height = this.lists
          .map(list => list.tasks.length)
          .reduce((acc, length) => acc + length);
      }
      if (this.layoutActive == 1) {
        height =
          this.lists.slice().sort((a, b) => a.tasks.length - b.tasks.length)[0]
            .tasks.length + 1;
      }
      if (this.layoutActive == 2) {
        height = this.lists
          .map(list => list.tasks.length)
          .reduce((acc, length) => acc + length);
      }

      return height;
    },
    width() {
      return this.listsComputed
        .map(list => list.tasks)
        .flat()
        .reduce((acc, task) => task.offsetLeft + task.width);
    },
    listsComputed() {
      let offsetTop = 0;
      let offsetLeft = 0;

      return this.lists.map((list, $index) => {
        if ($index > 0) {
          offsetTop = offsetTop + this.lists[$index - 1].tasks.length;
        }

        const height = list.tasks.length;

        Object.assign(list, { offsetTop, height });

        list.tasks = list.tasks.map((task, $taskIndex) => {
          const prev =
            list.tasks[$taskIndex - 1] ||
            (this.lists[$index - 1]
              ? this.lists[$index - 1].tasks[
                  this.lists[$index - 1].tasks.length - 1
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

html,
body
  margin: 0
  padding: 0
  width: 100%
  height: 100%

*
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
  &:nth-child(1)
    background: rgba(red, .1)
  &:nth-child(2)
    background: rgba(green, .1)
  &:nth-child(3)
    background: rgba(blue, .1)
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
  height: $spacer * 2
  line-height: $spacer * 2
  padding: 0 ($spacer / 2)
  color: rgba($dark, .9)
  font-weight: 600
.task

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
