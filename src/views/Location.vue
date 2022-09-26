<template>
  <section class="location l-section js-is-appear">
    <div class="inner">
      <h3 class="l-section__title">LOCATION</h3>
      <p class="l-section__description">
        오크힐스테이크하우스 별관<br />
        경기 의정부시 동일로150번길 102<br />
        031-876-3657
      </p>
      <div class="location-map">
        <div class="location-map__daum"></div>
        <a class="location-map__link" href=" https://naver.me/5iz04SCs" target="_blank"><span class="txt">지도 바로가기</span></a>
      </div>
      <div class="location-nav">
        <h4 class="location-nav__title">오시는 길 안내</h4>
        <ol class="location-nav-list">
          <li class="location-nav-list__item">
            지하철 7호선 도봉산역 하차 후,<br />
            버스 107번/ 10-1,10-2,12-3 이용 쌍암사에서 하차 후,<br />
            도보로 3분 거리입니다.
          </li>
          <li class="location-nav-list__item">
            지하철 7호선 수락산역 하차 후,<br />
            72-1,111번 이용, 쌍암사 입구에서 하차 도보로 3분 거리입니다.
          </li>
          <li class="location-nav-list__item">
            지하철 7호선 장암역 하차,<br />
            장암역 삼거리 도보 10분 거리에 있습니다.
          </li>
        </ol>
      </div>
    </div>
  </section>
</template>

<script>
import { loadScript } from "vue-plugin-load-script";

export default {
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
            center: new kakao.maps.LatLng(defaultPosition.y, defaultPosition.x), //지도의 중심좌표.
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
  }
  &-nav {
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
  }
}
</style>
