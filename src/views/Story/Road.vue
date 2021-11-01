<template>
    <div>
        <h1>{{road_data.title}}</h1>
        <v-card v-on:click="openMap()">지 도</v-card>
        <v-timeline>
        <v-timeline-item left>1</v-timeline-item>
        <v-timeline-item left>2</v-timeline-item>
        <v-timeline-item>3</v-timeline-item>
        </v-timeline>
    </div>
</template>

<script>
export default{
    props:{
        road_data: Object,
    },
    methods:{
        openMap(){
            let url = this.$router.resolve({name:'DynamicMap'}).href;
            window.open(url);
        }
    }
}
</script>
