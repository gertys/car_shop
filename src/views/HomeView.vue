<script>
import Header from "../components/Header.vue"
import UiContainer from "../components/UI/UiContainer.vue"
import SearchItem from "../components/UI/SearchItem.vue"
import Cart from "../components/Cart.vue"
import Navbar from "../components/Navbar.vue"
import Slider from "../components/Slider.vue"
import Section from "../components/ParsSection.vue"
import Items from "../components/Items.vue"
    export default {
        components : {Header, UiContainer, SearchItem, Cart, Navbar, Slider, Section, Items},
        data(){
          return {
            style : {
              background: "black",
            },
          }
        }
    }
</script>

<template>
    <Header></Header>
    <div class="home-main__wrapper">
      <UiContainer>
        <p class="logo">Логотип</p>
        <SearchItem/>
        <Cart/>
      </UiContainer>
    </div>
    <div class="home-main__wrapper">
      <UiContainer>
        <Navbar/>
      </UiContainer>
    </div>
    <Slider/>
    <Section/>
    <Items/>
</template>

<style scoped>
  .home-main__wrapper{
    background-color: orange;
  }
  .logo {
    margin-right: 20px;
  }
</style>
