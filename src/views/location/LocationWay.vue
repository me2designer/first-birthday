<template>
  <div class="location-way js-is-appear">
    <h4 class="location-way__title">오시는 길 안내</h4>
    <ol class="location-way-list">
      <li class="location-way-list__item">
        지하철 7호선 도봉산역 하차 후,<br />
        버스 107번/ 10-1,10-2,12-3 이용 쌍암사에서 하차 후,<br />
        도보로 3분 거리입니다.
      </li>
      <li class="location-way-list__item">
        지하철 7호선 수락산역 하차 후,<br />
        72-1,111번 이용, 쌍암사 입구에서 하차 도보로 3분 거리입니다.
      </li>
      <li class="location-way-list__item">
        지하철 7호선 장암역 하차,<br />
        장암역 삼거리 도보 10분 거리에 있습니다.
      </li>
    </ol>
  </div>
</template>

<script>
export default {
  name: "location-way",
};
</script>

<style lang="scss" scoped>
.location {
  &-way {
    $w: &;

    &__title {
      margin-bottom: px2rem(15);
      font-size: px2rem(18);
      font-weight: bold;
      text-align: center;
    }
    &-list {
      &__item {
        position: relative;
        margin-bottom: px2rem(24);
        padding-left: px2rem(15);
        font-size: px2rem(14);
        line-height: 1.4em;

        @for $i from 0 through 3 {
          &:nth-child(#{$i}) {
            &::before {
              content: "#{$i}.";
              position: absolute;
              top: 0;
              left: 0;
            }
          }
        }
      }
    }
    &:not(.is-appear) {
      opacity: 0;
      transform: translateY(2rem);

      #{$w}-list__item {
        opacity: 0;
        transform: translateY(2rem);
      }
    }
    &.is-appear {
      opacity: 1;
      transform: translateY(0);

      @include transition;

      #{$w}-list__item {
        @for $i from 0 through 3 {
          &:nth-child(#{$i}) {
            opacity: 1;
            transform: translateY(0);

            @include transition($delay: #{$i * 0.05});
          }
        }
      }
    }
  }
}
</style>
