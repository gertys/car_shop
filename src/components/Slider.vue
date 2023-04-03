<template>
  <swiper
    :modules="modules"
    :slides-per-view="1"
    :space-between="50"
    navigation
    :pagination="{ clickable: true }"
    :scrollbar="{ draggable: true }"
    @swiper="onSwiper"
    @slideChange="onSlideChange"
  >
            <swiper-slide class="swiper__item">
                <h1>Slide 1</h1>
            </swiper-slide>
            <swiper-slide class="swiper__item">Slide 2</swiper-slide>
            <swiper-slide class="swiper__item">Slide 3</swiper-slide>
    </swiper>
  </template>
  <script>
    import { Swiper, SwiperSlide } from 'swiper/vue';
    import UiContainer from './UiContainer.vue';
    import 'swiper/css';
  
    export default {
      components: {
        Swiper,
        SwiperSlide,
        UiContainer,
      },
      setup() {
        const onSwiper = (swiper) => {
          console.log(swiper);
        };
        const onSlideChange = () => {
          console.log('slide change');
        };
        return {
          onSwiper,
          onSlideChange,
        };
      },
    };
  </script>

<style scoped>
.swiper__item {
    margin-top: 100px;
    margin-bottom: 100px;
    text-align: center;
}
</style>  