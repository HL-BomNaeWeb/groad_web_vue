<template>
    <div>
        <v-carousel :cycle=true height=500>
            <v-carousel-item src="../assets/home_background.jpg"/>
            <v-carousel-item src="../assets/home_background.jpg"/>
        </v-carousel>
        <!-- <v-container fluid fill-height class="home-head">
            <v-layout justify-center align-center column pa-5>
                <div class="display-4 font-weight-black white--text text-xs-center">춘천 마음의 순례길,</div>
                <div class="display-4 font-weight-black white--text text-xs-center">마음과 함께 길을 걷다</div>
                <div class="display-1 font-weight-bold white--text text-xs-center">춘천의 여러 역사 유적과 관광명소를 둘러보는 마음의 순례길을 걸어보세요</div>
            </v-layout>
        </v-container> -->
    </div>
</template>
<script>
export default {
    name:'HomeHead'
};
</script>
<style scoped>
.home-head{
    background: url('../assets/home_background.jpg');
    background-size: cover;
    width: 100%;
    height: 100%;
}
</style>