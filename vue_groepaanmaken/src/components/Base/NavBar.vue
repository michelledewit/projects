<template>
  <div>
    <h1 class="title">NavBar</h1>
    <!-- <router-link :to="{ name: 'Home' }">Home</router-link> -->
    <router-link :to="{ name: 'Group List' }">Group List</router-link>
    <router-link :to="{ name: 'My Group' }">My Group</router-link>
    <router-link :to="{ name: 'Training' }">Training</router-link>
    <router-link :to="{ name: 'Progress' }">Progress</router-link>
    <router-link :to="{ name: 'Settings' }">Settings</router-link>
    <router-link :to="{ name: 'Group Create' }">Group Create</router-link>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.title {
  color: green;
}
</style>
