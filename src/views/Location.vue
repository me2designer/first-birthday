<template>
  <section class="location l-section js-is-appear">
    <div class="inner">
      <h3 class="l-section__title">LOCATION</h3>
      <p class="l-section__description">
        오크힐스테이크하우스 별관<br />
        경기 의정부시 동일로150번길 102<br />
        031-876-3657
      </p>
      <LocationMap></LocationMap>
      <LocationWay></LocationWay>
    </div>
  </section>
</template>

<script>
import LocationMap from "./location/LocationMap.vue";
import LocationWay from "./location/LocationWay.vue";

export default {
  name: "location",
  components: {
    LocationMap,
    LocationWay,
  },
};
</script>
