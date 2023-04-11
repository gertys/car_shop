<template>
    <h1>shop</h1>
    <UiContainer>
        <div class="cards">
            <div class="cart" v-for="item in shopItem" :key="item.id" :id="item.id">
                <ProductCart :item="item"/>
            </div>
        </div>
    </UiContainer>
</template>

<script>
import axios from "axios"
import UiContainer from "../components/UI/UiContainer.vue"
import ProductCart from "../components/ProductCart.vue"
    export default {
        data(){
            return {
                shopItem: null,                
            }
        },
        name: "Items",
        components: {UiContainer, ProductCart},
        methods: {

        },
        created() {
            axios
                .get('https://fakestoreapi.com/products?limit=10')
                .then(response => (this.shopItem = response.data))
        }
    }
</script>

<style scoped>
.cards {
  display: grid;
  /* Автоматически заполняем на всю ширину grid-контейнера */
  grid-template-columns: repeat(auto-fill, 225px);
  width: 100%;
  max-width: 1000px; /* Ширина grid-контейнера */
  justify-content: center;
  justify-items: center; /* Размещаем карточку по центру */
  column-gap: 30px; /* Отступ между колонками */
  row-gap: 40px; /* Отступ между рядами */
  margin: 0 auto;
}

.card {
  width: 225px;
  min-height: 350px;
  box-shadow: 1px 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column; /* Размещаем элементы в колонку */
  border-radius: 4px;
  transition: 0.2s;
  position: relative;
}

/* При наведении на карточку - меняем цвет тени */
.card:hover {
  box-shadow: 4px 8px 16px rgba(255, 102, 51, 0.2);
}
</style>