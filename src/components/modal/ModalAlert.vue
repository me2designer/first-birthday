<template>
  <transition name="modal" appear>
    <article class="modal" v-if="isShow">
      <div class="modal-wrapper">
        <main class="modal-body">
          <slot name="message">메세지를 입력하세요.</slot>
        </main>
        <footer class="modal-footer">
          <button @click="close" class="btn btn-round-grad d-block w-100 mx-auto" type="button">
            <slot name="agree">확인</slot>
          </button>
        </footer>
      </div>
      <i class="modal-dimmed" aria-hidden="true" @click="close"></i>
    </article>
  </transition>
</template>

<script>
export default {
  props: {
    isShow: {
      type: Boolean,
      default: false,
    },
    frameset: {
      type: String,
    },
  },
  data() {
    return {
      $frameset: null,
    };
  },
  methods: {
    close() {
      this.$emit("getShow", (this.$attrs.isShow = false));
    },
  },
  watch: {
    isShow(_boolean) {
      if (_boolean) {
        // 부모 frameset Z-index 최상위 변경
        document.querySelector(this.frameset).style.zIndex = "100";

        // body scroll lock
        window.lockBody();

        //ESC 창닫기
        window.addEventListener(
          "keydown",
          (e) => {
            if (this.isShow && e.key === "Escape") {
              this.close();
            }
          },
          true
        );
      } else {
        setTimeout(() => {
          // 부모 frameset Z-index 초기화
          document.querySelector(this.frameset).style.zIndex = "";

          //body scroll unlock
          window.unlockBody();
        }, 800);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.modal {
  $m: &;

  &-wrapper {
    overflow: hidden;
    min-width: 80%;
    min-height: 5vh;
    border-radius: fz-in-em(20, $G-font-size);
  }
  &-body {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: fz-in-em(10, $G-font-size);
    max-height: 70vh;
    margin: 2em 0 2em 2em;
    padding-right: 2rem;
    text-align: center;
  }
  &-footer {
    padding: 0 1.5em 1.5em;
  }
  &-enter-active,
  &-leave-active {
    transition-duration: 2s;

    #{$m}-wrapper {
      @include transition($tgs: opacity transform, $time: 0.2, $delay: 0.2);
    }

    #{$m}-dimmed {
      @include transition($tgs: opacity, $time: 0.2);
    }
  }

  &-enter-from,
  &-leave-to {
    transition-duration: 0.8s;

    #{$m}-wrapper {
      opacity: 0;
      transform: translate(-50%, -45%);
      @include transition($tgs: opacity transform, $time: 0.4);
    }

    #{$m}-dimmed {
      opacity: 0;
      @include transition($tgs: opacity, $time: 0.4, $delay: 0.4);
    }
  }
}
</style>
