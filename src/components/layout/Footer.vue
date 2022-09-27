<template>
  <footer id="footer" class="footer" role="contentinfo">
    <nav class="footer-nav">
      <a href="https://open.kakao.com/o/gancxBDe" class="footer-nav__link" target="_blank">
        <i class="icon icon-kakaotalk" aria-hidden="true"></i><span class="visually-hidden">카카오톡 오픈채팅</span>
      </a>
      <a href="https://www.instagram.com/jang_h_m__/" class="footer-nav__link" target="_blank">
        <i class="icon icon-instagram" aria-hidden="true"></i><span class="visually-hidden">인스타그램</span>
      </a>
      <a @click="copyLink" class="footer-nav__link" target="_blank">
        <i class="icon icon-link" aria-hidden="true"></i><span class="visually-hidden">주소복사하기</span>
      </a>
    </nav>
    <ModalAlert @getShow="getShow" :isShow="isCompleteModal" :frameset="'#footer'">
      <template v-slot:message>URL 주소가 복사되었습니다</template>
    </ModalAlert>
  </footer>
</template>

<script>
import ModalAlert from "../modal/ModalAlert.vue";
export default {
  name: "footer",
  components: {
    ModalAlert,
  },
  data() {
    return {
      isCompleteModal: false,
    };
  },
  mounted() {
    //
  },
  methods: {
    copyLink() {
      window.copyLink(() => {
        this.isCompleteModal = true;
      });
    },

    /* 발송완료 확인창 */
    getShow(_boolean) {
      this.isCompleteModal = _boolean;
    },
  },
};
</script>

<style lang="scss" scoped>
.footer {
  display: flex;
  align-items: center;
  position: fixed !important;
  left: 0;
  bottom: 0;
  z-index: 30 !important;
  width: 100%;
  background-color: #666666;
  &-nav {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    &__link {
      display: flex;
      justify-content: center;
      flex: 1;
      position: relative;
      &::after {
        content: "";
        position: absolute;
        left: 0;
        top: 50%;
        height: px2rem(40);
        border: 1px solid #888888;
        transform: translateY(-50%);
      }
      &:first-child::after {
        display: none;
      }
    }
  }
  .icon {
    display: block;
    width: px2rem(30);
    height: px2rem(30);
    background-position: center center;
    background-repeat: no-repeat;
    background-size: contain;
    &-kakaotalk {
      background-image: svgIcon(kakaotalk, fff);
    }
    &-instagram {
      background-image: svgIcon(instagram, fff);
    }
    &-link {
      background-image: svgIcon(link, fff);
    }
  }
}
</style>
