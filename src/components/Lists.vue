<template>
  <div class="lists">
    <List v-for="list in lists" :key="list.id" :list="list" />
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

  components: {
    List: () => import("@/components/List")
  }
};
</script>
