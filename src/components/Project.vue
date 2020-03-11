<template>
  <div class="project-wrapper d-flex flex-column">
    <div
      class="project-header p-2 d-flex justify-content-center bg-white shadow"
    >
      <Actions :actions="layout.options" :active.sync="layout.active" />
      <button @click="onRefresh" class="btn btn-sm btn-outline-primary ml-2">
        Refresh
      </button>
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
        active: 0,
        options: ["Table", "KanBan", "Timeline"]
      }
    };
  },

  computed: {
    activeLayoutName() {
      return this.layout.options[this.layout.active];
    }
  },
  methods: {
    onRefresh() {
      this.$emit("refresh");
    }
  }
};
</script>

<style lang="sass">
.project-wrapper
  height: 100vh
  user-select: none
.project-header
  position: relative
  z-index: 10
.project-body
  position: relative
  z-index: 9
  overflow: auto
  *
    transition: all .3s

.lists
  position: relative

.list,
.list-label
  position: absolute
  top: 0
  left: 0

.kanban
  height: 100%
  // TODO: width must include spacer width to the right
  width: 100%
  .list
    $width: ($spacer * 18)
    width: $width
    height: calc(100% - #{$spacer * 2})
    overflow: hidden
    top: $spacer
    @for $i from 1 through 10
      &:nth-child(#{$i})
        left: #{($width + $spacer) * ($i - 1) + $spacer}
  .items
    height: calc(100% - #{($spacer * 2.5) + ($spacer / 2)})
    overflow: auto
    margin: ($spacer * 2.5) 0 ($spacer / 2)
    padding: 0 ($spacer / 2)
  .item
    .column
      display: block


.table
  // TODO: height must include spacer width to the bottom
  height: 100%
  .list
    overflow: hidden
    width: calc(100% - #{$spacer * 2})
    height: calc(var(--height) * #{($spacer * 2)})
    left: $spacer
    @for $i from 1 through 10
      &:nth-child(#{$i})
        top: calc((var(--top) * #{($spacer * 2)}) + #{($spacer)})
  .list-label
    top: $spacer
    left: -($spacer / 2)
    transform: rotate(-90deg)

  .items
    margin: ($spacer / 12) ($spacer / 12) 0 ($spacer * 2.5)
  .item
    margin-bottom: 0 !important
    .item-content
      white-space: nowrap
      overflow: auto
    .column
      display: inline-block
      width: 15%
      min-width: 100px


.timeline
  height: 100%
  .list
    width: calc((var(--width) * #{($spacer * 2)}) + #{($spacer * 3)})
    height: calc((var(--height) * #{($spacer * 2)}) + (var(--height) * #{($spacer * .5)}))
    padding-left: calc(var(--left) * #{($spacer * 1.5)})
    @for $i from 1 through 10
      &:nth-child(#{$i})
        top: calc(var(--top) * #{($spacer * 2.5)})
  .list-label
    top: $spacer
    left: -($spacer / 2)
    transform: rotate(-90deg)

  .items
    margin: ($spacer / 4) 0 0 ($spacer * 2.5)
  .item
    position: relative
    width: calc(var(--width) * #{($spacer * 1.5)})
    left: calc(var(--left) * #{($spacer * 1.5)})
    .item-content
      white-space: nowrap
      overflow: hidden
      text-overflow: ellipsis
    .column:not(.item-label)
      opacity: 0
</style>
