<template>
  <ul class="gallery-list">
    <li class="gallery-list__item" v-for="n in 10">{{ n }}</li>
  </ul>
</template>

<script>
export default {
  name: "gallery-list",
};
</script>

<style lang="scss" scoped>
.gallery {
  &-list {
    border: 1px solid red;
  }
}
</style>
