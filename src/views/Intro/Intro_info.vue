<template>
  <div>
    <div id="intro01">
    <h1>마음의 순례길</h1>
      <br>
      <img class="imgsize" :src="img" alt="">
    </div>
  <div v-for="road in roads" :key="road.name" id="intro02">
    <br>
    <v-col offset="1" cols="12">
      <v-card flat>
        <br>
        <h1>{{road.name}}</h1>
      </v-card>
    </v-col>
    <v-col offset="1" cols="10">
      <v-card flat>
        <v-card-title>
        {{road.text}}  
        </v-card-title>
      </v-card>
    </v-col>
    <v-row no-gutters justify="center" class="mx-60">
    <v-col cols="4" v-for="image in road.images" :key="image.name">
      <v-card flat>
        <!-- <p>{{image.name}}</p>
        <p>{{image.src}}</p> -->
        <v-img class="imageblock" :src="image.src" />
      </v-card>
    </v-col>
    </v-row>  
  </div>
  <v-card class="ma-6">
    <v-timeline>
      <v-timeline-item>
        <template v-slot:opposite>
          2020
        </template>
        1
      </v-timeline-item>
      <v-timeline-item right>2</v-timeline-item>
      <v-timeline-item>3</v-timeline-item>
    </v-timeline>
  </v-card>
  </div>
</template>
<script>
import datafile from "@/data/IntroData.js";
export default {
    name:'Intro',
    data() {
        return{
            img:require("../../assets/map.png"),
            roads:datafile.roads
        }
            
    },
}
</script>
<style scoped>
.imageblock { max-width: 100%; height: auto; border:30px solid rgba(0,0,0,0); padding: 0px; }
  .imgsize{
    width:800px;
    height:auto;
    
  }
  #intro01{
    width: fit-content;
    margin: auto;
  }
</style>