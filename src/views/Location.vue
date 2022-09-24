<template>
  <section class="location">
    <div class="inner">
      <h3 class="l-section__title">LOCATION</h3>
      <p class="l-section__description">
        오크힐스테이크하우스 별관<br />
        경기 의정부시 동일로150번길 102
      </p>
      <div class="location-map">
        <div class="location-map__daum"></div>
        <a href="" class="link">지도 바로가기</a>
      </div>
    </div>
  </section>
</template>

<script>
import { loadScript } from "vue-plugin-load-script";

export default {
  mounted() {
    var $kakaomap = this.$el.querySelector(".location-map__daum");

    loadScript("//dapi.kakao.com/v2/maps/sdk.js?appkey=d8b7b6c23aeb36ae0b3a2544ed36cf52&autoload=false").then(() => {
      var defaultPosition = {
        y: 37.705312926077674,
        x: 127.05931714396046,
      };

      kakao.maps.load(function () {
        var container = $kakaomap; //지도를 담을 영역의 DOM 레퍼런스
        var options = {
          //지도를 생성할 때 필요한 기본 옵션
          center: new kakao.maps.LatLng(defaultPosition.y, defaultPosition.x), //지도의 중심좌표.
          level: 2, //지도의 레벨(확대, 축소 정도)
        };
        var map = new kakao.maps.Map(container, options); //지도 생성 및 객체 리턴

        function setMarker() {
          var imageSrc = require("@/assets/images/location_marker.png");
          var imageSize = new kakao.maps.Size(80, 98);
          var marker = new kakao.maps.Marker({
            position: new kakao.maps.LatLng(defaultPosition.y, defaultPosition.x),
            image: new kakao.maps.MarkerImage(imageSrc, imageSize),
          });
          marker.setMap(map);
          // map.setDraggable(); // map.setDraggable(draggable) 마우스 드래그로 지도 이동 가능여부를 설정합니다
          // map.setZoomable();
        }
        setMarker();
      });
    });
  },
};
</script>

<style lang="scss" scoped>
.location {
  .location-map {
    &__daum {
      width: 100%;
      height: 40rem;
    }
  }
}
</style>
