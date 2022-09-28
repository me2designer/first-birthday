<template>
  <swiper effect="fade">
    <swiper-slide v-for="i of images" :key="i">
      <img :src="i" />
    </swiper-slide>
  </swiper>
</template>
<script>
import SwiperCore, { EffectFade } from "swiper";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/swiper.scss";
import "swiper/components/effect-fade/effect-fade.scss";
SwiperCore.use([EffectFade]);
export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      images: [
        "https://i.picsum.photos/id/23/200/300.jpg?hmac=NFze_vylqSEkX21kuRKSe8pp6Em-4ETfOE-oyLVCvJo",
        "https://i.picsum.photos/id/25/200/300.jpg?hmac=ScdLbPfGd_kI3MUHvJUb12Fsg1meDQEaHY_mM613BVM",
        "https://i.picsum.photos/id/26/200/300.jpg?hmac=E9i_aIqa_ifLvxqI2b1QTLCnhGQYJ83IpvaDfFM54bU",
      ],
    };
  },
};
</script>
