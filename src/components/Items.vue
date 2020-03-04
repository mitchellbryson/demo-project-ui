<template>
  <div class="items">
    <Item v-for="item in items" :key="item.id" :item="item" />
  </div>
</template>

<script>
export default {
  props: {
    items: {
      required: true,
      type: Array
    }
  },

  components: {
    Item: () => import("@/components/Item")
  }
};
</script>
