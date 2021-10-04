<template>
  <div>
    <v-row no-gutters class="pa-5">
      <router-view :road_data="current_road[road_idx]"></router-view>
      <v-spacer></v-spacer>
      <v-card width="300">
        <v-card-title class="font-weight-bold pa-5 pt-10">거점 정보</v-card-title>
        <v-expansion-panels  accordion flat mandatory :value="pageidx()">
          <v-expansion-panel class="cut" v-for="road in road_nav" :key="road.title" @click="click(road.id)">
            <v-expansion-panel-header>{{road.title}}
            </v-expansion-panel-header>
            <v-expansion-panel-content v-for="(spot,index) in road.spots" :key="index">
              <v-btn class="pl-10" block tile text depressed :to="{name:'story_spot',params:{road_id:$route.params.road_id,spot_id:index+1}}">- {{ spot }}
                <v-spacer></v-spacer>
              </v-btn>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-card>
    </v-row>
  </div>
</template>

<script>
import datafile from "@/data/StoryData.js";
export default {
   methods:{
      click:function(road_id){
        if(this.$route.params.road_id != road_id){
          this.$router.push({path:`/story/road/${road_id}`})
        }
      },
      pageidx:function(){
        this.road_idx = this.$route.params.road_id-1
        return this.road_idx;
      }
   },
  data() {
    return {
      road_idx:0, //default fallback value
      current_road: datafile.road,
      road_nav: datafile.road_nav,
    };
  },
};
</script>


<style lang="scss" scoped>
@import '@/scss/variables.scss';
.cut{
   padding:$expansion-panel-content-padding;
}
</style>
