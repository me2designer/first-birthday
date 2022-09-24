<template>
  <div id="wrap" data-target-device="mo">
    <Visual></Visual>
    <Calendar></Calendar>
    <Location></Location>
  </div>
</template>

<script>
import Visual from "./views/Visual.vue";
import Calendar from "./views/Calendar.vue";
import Location from "./views/Location.vue";

export default {
  name: "App",
  components: {
    Visual,
    Calendar,
    Location,
  },
};
</script>
