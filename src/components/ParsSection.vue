<template>
    <div class="section">
        <UiContainer>
            <div class="section__title">
                <h2>Мы очень постарались, чтобы найти лучших производителей и актуальные предложения для Вашего удобства!</h2>
            </div>
            <div class="section__content">
                <Advantages/>
                <div class="section__item__wrapper">
                    <div v-for="item in items" :key="item.id" class="section__wrapper__inner">
                        <SectionItem :props="item" />
                    </div>
                </div>  
            </div>
        </UiContainer>
    </div>
</template>

<script>
import UiContainer from './UI/UiContainer.vue';
import SectionItem from './SectionItem.vue';
import Advantages from './Advantages.vue';
    export default {
        name : "ParsSection",
        components: {UiContainer, SectionItem, Advantages},
        data() {
            return {
                items : ["Запчасти","Запчасти","Запчасти","Запчасти","Запчасти","Запчасти"],
            }
        }
    }
</script>

<style scoped>

.section{
    background-color: black;
}
.section__wrapper {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
}

.section__item__wrapper{
    background-image: url("../assets/gradient-back.png");
    background-position: center;
}

.section__wrapper__inner{
    flex: 0 0 30%;
    margin: 15px 15px 15px 0;
}

.section__content{
    display: flex;
    align-items: center;
}

.section__title {
    padding: 39px 0 104px 0;
}

.section__title h2{
    font-size: 30px;
    color: white;
    text-align: center;
}

.section__item__wrapper{
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    margin-left: 15px;
}

</style>