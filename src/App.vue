<template>
  <main id="container" role="main">
    <h2 class="visually-hidden">초청장</h2>
    <Visual></Visual>
    <Calendar></Calendar>
    <Location></Location>
    <!-- <Gallery></Gallery> -->
  </main>
  <Footer></Footer>
</template>

<script>
import Visual from "./views/Visual.vue";
import Calendar from "./views/Calendar.vue";
import Location from "./views/Location.vue";
import Gallery from "./views/Gallery.vue";
import Footer from "./components/layout/Footer.vue";

export default {
  name: "wrap",
  components: {
    Visual,
    Calendar,
    Location,
    Gallery,
    Footer,
  },
  mounted() {
    this.onCommonJs();
  },
  methods: {
    /* 페이지 공통 기능 호출 */
    onCommonJs() {
      /*
      ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
      */
      {
        /**
         *
         * 더블탭(확대기능) 방지
         *
         */
        $.disabledDoubleTab();
      }
      /*
      ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
      */
      {
        /**
         *
         *.js-is-appear에 FadeIn 적용 ▼
         *
         *  [html 작성 예]
         *      //기본값 적용시
         *      <div class="js-is-appear">
         *
         *      //scroll.top 사용자값 입력시(예: class 뒤에 숫자 입력)
         *      <div class="js-is-appear50">
         *
         *  [CSS 작성 예]
         *      div {opacity:0;transition:none}
         *      div.appear {opacity:1;transition:opacity 0.3s ease-in-out}
         *
         */
        const $appears = document.querySelectorAll("[class*=js-is-appear]");

        $appears.forEach((_each) => {
          const $this = _each;
          const classNames = $this.getAttribute("class").split(" ");
          const posY = classNames
            .map((_arr) => {
              if (_arr.indexOf("js-is-appear") !== -1) {
                let num = Number(_arr.replace(/[^0-9]/g, ""));

                $this.classList.remove(_arr); //removeClass
                return (num = num !== 0 ? num : 70); //scroll.top 기본값 70 설정함
              }
            })
            .filter((_el) => _el)[0];

          // addClass('js-is-appear')
          $.scrollAction({
            $target: $this,
            top: posY,
            scrollDownAction: function () {
              $this.classList.add("is-appear");
            },
            scrollUpAction: function () {
              HOST.localhost && $this.classList.remove("is-appear");
            },
          });
        });
      }
      /*
      ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
      */
    },
  },
};
</script>
