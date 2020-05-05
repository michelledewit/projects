<template>
  <div>
    <h2>{{ group.name }}</h2>
    <p>{{ group.km }}KM</p>
  </div>
</template>

<script>
export default {
  props: {
    group: Object
  }
};
</script>

<style scoped></style>
