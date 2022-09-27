<template>
  <section class="visual l-section js-is-appear">
    <div class="inner">
      <p class="visual__txt visual__txt--headline">HAPPY BIRTHDAY</p>
      <img class="visual__txt visual__txt--title" src="@/assets/images/visual_txt_title.png" alt="하민이 첫번째 생일에 초대합니다." />
      <img class="visual__txt visual__txt--parents" src="@/assets/images/visual_txt_parents.png" alt="아빠 장지훈, 엄마 한인애" />
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.visual {
  $v: &;

  height: px2rem(657);
  padding: 0;
  background: url(~@/assets/images/visual_bg.jpg) 0 0 no-repeat;
  background-size: cover;
  &__txt {
    position: absolute;
    left: 50%;
    z-index: 1;
    opacity: 0;
    transform: translate(-50%, 2rem);
    &--headline {
      top: px2rem(35);
      font-family: "Jost";
      font-size: px2rem(17);
      color: #f6f0e4;
      letter-spacing: 0.4em;
      white-space: nowrap;
    }
    &--title {
      top: px2rem(85);
      width: px2rem(298);
    }
    &--parents {
      top: px2rem(318);
      width: px2rem(109);
    }
  }
  &__bg {
    width: 100%;
  }
  &.is-appear {
    #{$v}__txt {
      $t: ".visual__txt";
      $values: #{$t}--headline 0, #{$t}--title 0.2, #{$t}--parents 0.4;

      @each $class, $delay in $values {
        &#{$class} {
          opacity: 1;
          transform: translate(-50%, 0);
          @include transition($time: 1, $delay: $delay);
        }
      }
      // &--headline {
      //   opacity: 1;
      // }
    }
  }
}
</style>
