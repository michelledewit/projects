<template>
  <div>
    <h1>Events List</h1>
    <EventCard />
    <BaseIcon name="activity" />
  </div>
</template>

<script>
import EventCard from '@/components/EventCard.vue'
export default {
  components: {
    EventCard
  }
}
</script>
