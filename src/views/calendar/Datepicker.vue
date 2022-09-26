<template>
  <section class="datepicker js-is-appear">
    <header class="datepicker-header">
      <p class="month">10</p>
    </header>
    <main class="datepicker-body">
      <ol class="weekly-list">
        <li class="weekly-list__item">일</li>
        <li class="weekly-list__item">월</li>
        <li class="weekly-list__item">화</li>
        <li class="weekly-list__item">수</li>
        <li class="weekly-list__item">목</li>
        <li class="weekly-list__item">금</li>
        <li class="weekly-list__item">토</li>
      </ol>
      <ol class="days-list">
        <li class="days-list__item is-disable">25</li>
        <li class="days-list__item is-disable">26</li>
        <li class="days-list__item is-disable">27</li>
        <li class="days-list__item is-disable">28</li>
        <li class="days-list__item is-disable">29</li>
        <li class="days-list__item is-disable">30</li>
        <li class="days-list__item">1</li>
        <li class="days-list__item is-holiday" tooltip="개천절">2</li>
        <li class="days-list__item is-today">3</li>
        <li class="days-list__item">4</li>
        <li class="days-list__item">5</li>
        <li class="days-list__item">6</li>
        <li class="days-list__item">7</li>
        <li class="days-list__item">8</li>
        <li class="days-list__item is-holiday">9</li>
        <li class="days-list__item is-holiday">10</li>
        <li class="days-list__item">11</li>
        <li class="days-list__item">12</li>
        <li class="days-list__item">13</li>
        <li class="days-list__item">14</li>
        <li class="days-list__item">15</li>
        <li class="days-list__item is-holiday">16</li>
        <li class="days-list__item">17</li>
        <li class="days-list__item">18</li>
        <li class="days-list__item">19</li>
        <li class="days-list__item">20</li>
        <li class="days-list__item">21</li>
        <li class="days-list__item">22</li>
        <li class="days-list__item is-holiday">23</li>
        <li class="days-list__item">24</li>
        <li class="days-list__item">25</li>
        <li class="days-list__item">26</li>
        <li class="days-list__item">27</li>
        <li class="days-list__item">28</li>
        <li class="days-list__item">29</li>
        <li class="days-list__item is-holiday">30</li>
        <li class="days-list__item">31</li>
      </ol>
    </main>
  </section>
</template>

<script>
export default {
  name: "datepicker",
};
</script>

<style lang="scss" scoped>
.datepicker {
  &-header {
    .month {
      margin-bottom: px2rem(16);
      font-family: "Jost";
      font-size: px2rem(36);
      text-align: center;
    }
  }
  &-body {
    .weekly-list {
      display: flex;
      justify-content: space-around;
      margin-bottom: px2rem(17);
      font-size: px2rem(16);
    }
    .days-list {
      display: flex;
      flex-wrap: wrap;
      &__item {
        display: inline-flex;
        justify-content: center;
        align-items: center;
        position: relative;
        z-index: 1;
        width: 14.2857%;
        height: px2rem(45);
        font-family: "Jost";
        font-size: px2rem(16);
        &.is-today {
          $name: inline-#{unique-id()};
          animation: $name 1.5s infinite alternate;

          @keyframes #{$name} {
            0% {
              color: #000;
            }
            100% {
              color: #ff0331;
            }
          }

          &::after {
            content: "";
            position: absolute;
            top: 50%;
            left: 50%;
            z-index: -1;
            width: px2rem(45);
            height: px2rem(45);
            border: px2rem(2) dashed #ff0331;
            border-radius: 100%;
            transform: translate(-50%, -50%) rotate(0deg);

            $name: inline-#{unique-id()};
            animation: $name 3s infinite linear;

            @keyframes #{$name} {
              100% {
                transform: translate(-50%, -50%) rotate(360deg);
              }
            }
          }
        }
        &.is-disable {
          color: #c6c6c6;
        }
        &.is-holiday {
          color: #ff0331;
        }
        &[tooltip]::before {
          content: "";
          position: absolute;
          top: px2rem(-12);
          left: calc(50% + #{px2rem(50)});
          z-index: 10;
          border: px2rem(7) solid transparent;
          border-bottom-width: 0;
          border-top-color: #333;
          transform: translateX(-50%);

          $name: inline-#{unique-id()};
          animation: $name 1.5s infinite alternate cubic-bezier(0.5, 0, 0.5, 1);

          @keyframes #{$name} {
            0% {
              transform: translate(-50%, 0);
            }
            100% {
              transform: translate(-50%, 0.5rem);
            }
          }
        }
        &[tooltip]::after {
          content: attr(tooltip);
          position: absolute;
          top: px2rem(-40);
          left: calc(50% + #{px2rem(50)});
          z-index: 20;
          width: 5.5rem;
          padding: px2rem(5) px2rem(10);
          border-radius: px2rem(5);
          font-size: px2rem(13);
          color: #fff;
          text-align: center;
          white-space: nowrap;
          background: #333;
          transform: translateX(-50%);
          box-shadow: $G-box-shadow;

          $name: inline-#{unique-id()};
          animation: $name 1.5s infinite alternate cubic-bezier(0.5, 0, 0.5, 1);

          @keyframes #{$name} {
            0% {
              transform: translate(-50%, 0);
            }
            100% {
              transform: translate(-50%, 0.5rem);
            }
          }
        }
      }
    }
  }
  &:not(.is-appear) {
    .weekly-list__item,
    .days-list__item {
      opacity: 0;
      transform: translateY(px2rem(8));
    }
  }
  .is-appear & {
    .weekly-list__item {
      @for $i from 0 through 10 {
        &:nth-child(#{$i}) {
          @include transition($delay: #{$i * 0.05});
        }
      }
    }
    .days-list__item {
      opacity: 1;
      transform: translateY(0);

      @for $i from 0 through 40 {
        &:nth-child(#{$i}) {
          @include transition($delay: #{$i * 0.05 + 0.35});
        }
      }
    }
  }
}
</style>
