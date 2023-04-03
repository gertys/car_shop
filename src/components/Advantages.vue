<template>
    <div class="advantages__wrapper">
        <div class="advantages__wrapper__inner">
            <div class="advanages__item">
                <div class="advanages__item-img">
                    <img src="../assets/item-1.svg" alt="img">
                </div>
                <div class="advanages__item-text">
                    <p>Диагностика от 60 минут</p>
                </div>
            </div>
            <div class="advanages__item">
                <div class="advanages__item-img">
                    <img src="../assets/2-item.svg" alt="img">
                </div>
                <div class="advanages__item-text">
                    <p>Экологичные и безопасные материалы и комплектующие</p>
                </div>
            </div>
            <div class="advanages__item">
                <div class="advanages__item-img">
                    <img src="../assets/3-item.svg" alt="img">
                </div>
                <div class="advanages__item-text">
                    <p>Гарантии от 1 года</p>
                </div>
            </div>
            <div class="advanages__item">
                <div class="advanages__item-img">
                    <img src="../assets/4-item.svg" alt="img">
                </div>
                <div class="advanages__item-text">
                    <p>Исполнения самых нестандартных работ</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Advantages",
    }
</script>

<style scoped>

.advantages__wrapper{
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 0 0 45%;
    background: linear-gradient(122.61deg, rgba(252, 254, 255, 0.3) 30.49%, rgba(252, 254, 255, 0.1) 74.05%);
    border-radius: 10px 0 0 10px;
}

.advantages__wrapper__inner{
    display: flex;
    flex-direction: column;
    width: 70%;
    justify-content: center;
    align-items: flex-start;
}

.advanages__item{
    display: flex;
    align-items: center;
    justify-content: center;
}

.advanages__item:first-child{
    padding-top: 105px;
}

.advanages__item:nth-child(2){
    padding-top: 45px;
}
.advanages__item:nth-child(3){
    padding-top: 45px;
    padding-bottom: 45px;
}

.advanages__item:last-child{
    padding-bottom: 105px;
}

.advanages__item-img{
    margin-right: 10px;
}

.advanages__item-img:nth-child(2){
    margin-right: 17px;
}

.advanages__item-text{
    color: white;
}

.advanages__item-text:nth-child(3){
    margin-left: 7px;
}
</style>