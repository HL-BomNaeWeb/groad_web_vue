<template>
  <div>
    <div id="intro01">
      <br>
      <img class="imgsize" :src="img" alt="">
    </div>
  <div v-for="road in roads" :key="road.name" id="intro02">
    <br>
    <v-col offset="1" cols="1">
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
export default {
    name:'Intro',
    data() {
        return{
            img:require("../../assets/map.png"),
            roads:[
              {name:"road1",text:"road1의 텍스트",
                images:[
                  {name:'image01', src:require('../../assets/smaple_image.png')},
                  {name:'image02', src:require('../../assets/smaple_image.png')},
                ]
              },
              {name:"road2",text:"road2의 텍스트",
                images:[
                  {name:'image01', src:require('../../assets/smaple_image.png')},
                  {name:'image02', src:require('../../assets/smaple_image.png')},
                ]
              },
              {name:"road3",text:"road3의 텍스트",
                images:[
                  {name:'image01', src:require('../../assets/smaple_image.png')},
                  {name:'image02', src:require('../../assets/smaple_image.png')},
                ]
              }
            ]

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