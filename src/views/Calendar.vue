<template>
  <section class="calendar l-section js-is-appear">
    <div class="inner">
      <h3 class="l-section__title">CALENDAR</h3>
      <p class="l-section__description">2022년 10월 3일 월요일, 오후 12:00</p>
      <Datepicker></Datepicker>
    </div>
  </section>
</template>

<script>
import Datepicker from "./calendar/Datepicker.vue";

export default {
  name: "calendar",
  components: {
    Datepicker,
  },
};
</script>

<style lang="scss" scoped>
.calendar {
  background-color: #f7f7f7;
}
</style>
