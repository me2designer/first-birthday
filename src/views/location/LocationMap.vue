<template>
  <div class="location-map js-is-appear">
    <div class="location-map__daum"></div>
    <a class="location-map__link" href=" https://naver.me/5iz04SCs" target="_blank"><span class="txt">지도 바로가기</span></a>
  </div>
</template>

<script>
import { loadScript } from "vue-plugin-load-script";

export default {
  name: "location-map",
  mounted() {
    this.setKaKaoMap();
  },
  methods: {
    setKaKaoMap() {
      const $kakaomap = this.$el.querySelector(".location-map__daum");
      loadScript("//dapi.kakao.com/v2/maps/sdk.js?appkey=d8b7b6c23aeb36ae0b3a2544ed36cf52&autoload=false").then(() => {
        const defaultPosition = {
          y: 37.705312926077674,
          x: 127.05931714396046,
        };
        kakao.maps.load(function () {
          const container = $kakaomap; //지도를 담을 영역의 DOM 레퍼런스
          const options = {
            //지도를 생성할 때 필요한 기본 옵션
            center: new kakao.maps.LatLng(defaultPosition.y, defaultPosition.x),
            level: 2, //지도의 레벨(확대, 축소 정도)
          };
          const map = new kakao.maps.Map(container, options); //지도 생성 및 객체 리턴
          function setMarker() {
            const imageSrc = require("@/assets/images/location_marker.png");
            const imageSize = new kakao.maps.Size(80, 98);
            const marker = new kakao.maps.Marker({
              position: new kakao.maps.LatLng(defaultPosition.y, defaultPosition.x),
              image: new kakao.maps.MarkerImage(imageSrc, imageSize),
            });
            marker.setMap(map);
            map.setDraggable(); // map.setDraggable(draggable) 마우스 드래그로 지도 이동 가능여부를 설정합니다
            map.setZoomable();
            const $marker = marker.a;
            const $img = $marker.querySelector("img");
            $marker.animate([{ transform: "translateY(0)" }, { transform: "translateY(1rem)" }, { transform: "translateY(0)" }], {
              duration: 2000,
              iterations: Infinity,
              easing: "cubic-bezier(0.5, 0, 0.5, 1)",
            });
            $img.style.marginTop = "-2.5rem";
          }
          setMarker();
        });
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.location {
  &-map {
    &__daum {
      width: 100%;
      height: 40rem;
      margin-bottom: px2rem(15);
      pointer-events: none;
    }
    &__link {
      display: flex;
      justify-content: center;
      align-items: center;
      height: px2rem(55);
      margin-bottom: px2rem(54);
      background-color: #c38650;
      &::before {
        content: "";
        display: block;
        width: px2rem(20);
        height: px2rem(17);
        margin-right: px2rem(5);
        background-image: svgIcon(map-location-dot, fff);
        background-position: center center;
        background-repeat: no-repeat;
        background-size: contain;
      }
      .txt {
        font-size: px2rem(18);
        font-weight: bold;
        color: #fff;
      }
    }
    &:not(.is-appear) {
      opacity: 0;
      transform: translateY(2rem);
    }
    &.is-appear {
      opacity: 1;
      transform: translateY(0);

      @include transition;
    }
  }
}
</style>
