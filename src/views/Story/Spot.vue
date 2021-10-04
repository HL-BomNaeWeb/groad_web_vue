<template>
    <div>
        <h1>{{road_data.title+" > "+road_data.spots[this.$route.params.spot_id-1]}}</h1>
        <v-card>asddddddddddf</v-card>
    </div>
</template>

<script>
export default{
    props:{
        road_data: Object,
    },
    mounted:function(){
        this.spot_idx = this.$route.params.spot_id-1;
    },
    methods:{

    },
    data(){
        return{
            spot_idx:0, //default fallback value
            }
    }
}
</script>
