<template>
  <section class="visual">
    <div class="inner">
      <img class="visual__txt visual__txt--title" src="@/assets/images/visual_txt_title.png" alt="하민이 첫번째 생일에 초대합니다." />
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.visual {
  height: px2rem(622);
  background: url(~@/assets/images/visual_bg.jpg) 0 0 no-repeat;
  background-size: cover;
  &__txt {
    position: absolute;
    &--title {
      top: px2rem(105);
      left: 50%;
      width: px2rem(261);
      transform: translateX(-50%);
    }
  }
  &__bg {
    width: 100%;
  }
}
</style>
