<template>
  <div>
    <h1>Group List</h1>
    <GroupCard v-for="group in groups" :key="group.id" :group="group" />
  </div>
</template>

<script>
import GroupCard from "@/components/GroupCard.vue";

export default {
  components: {
    GroupCard
  },
  data() {
    return {
      groups: [
        {
          id: 1,
          name: "Speedrunners",
          km: 3
        },
        {
          id: 2,
          name: "Slowrunners",
          km: 1
        },
        {
          id: 3,
          name: "Hardrunners",
          km: 1
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped></style>
