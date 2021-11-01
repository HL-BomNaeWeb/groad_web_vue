<template>
    <div>
        <v-carousel :cycle=true height=550>
            <v-carousel-item src="../assets/home_background.jpg"/>
            <v-carousel-item src="../assets/home_background.jpg"/>
        </v-carousel>
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