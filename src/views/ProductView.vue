<template>
    <div v-if="singleItem === null">
        <h2>Загрузка....</h2>
    </div>
    <div v-else>
        <UiContainer>
            <div class="product__wrapper">
                <div class="product__image">
                    <img :src="singleItem.image" alt="photo">
                </div>
                <div class="product__info">
                    <h3>{{ singleItem.title }}</h3>
                    <p>{{ singleItem.description }}</p>
                    <p>{{ singleItem.price }}Р</p>
                    <button class="card__add" @click="this.$store.dispatch('addItem', singleItem.id);">В корзину</button>
                </div>
            </div>
        </UiContainer>
        <h1>Страница товара</h1>
        <p>Страница с айди  {{ $route.params.id }}</p>
        <p>{{ singleItem.title }}</p>
    </div>
</template>

<script>
import axios from "axios"
import UiContainer from "../components/UiContainer.vue";
    export default {
    data() {
        return {
            singleItem: null
        };
    },
    mounted() {
        axios
            .get(`https://fakestoreapi.com/products/${this.getItemId()}`)
            .then(response => (this.singleItem = response.data));
    },
    methods: {
        getItemId() {
            return this.$route.params.id;
        }
    },
    components: { UiContainer }
}
</script>

<style scoped>
.product__wrapper{
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 40px;
}

.product__image{
    flex: 0 0 45%;
}

.product__image img {
    width: 500px;
    height: 500px;
}

.product__info{
    flex: 0 0 45%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-left: 40px;
}

.card__add {
  display: block;
  width: 100%;
  font-weight: 400;
  font-size: 17px;
  color: #70c05b;
  padding: 10px;
  text-align: center;
  border: 1px solid #70c05b;
  border-radius: 4px;
  cursor: pointer; 
  transition: 0.2s;
  margin-top: auto; 
}

.card__add:hover {
  border: 1px solid #ff6633;
  background-color: #ff6633;
  color: #fff;
}
</style>