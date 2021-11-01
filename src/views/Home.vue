<template>
<v-app>
    <home-head></home-head>
    <v-row no-gutters dense>
      <v-col cols="1"></v-col>
      <v-col cols="10"><course-summary :courses=courses></course-summary></v-col>
      <v-col cols="1"></v-col>
    </v-row>
    <v-row no-gutters dense>
      <v-col cols="1"></v-col>
      <v-col cols="10"><home-notice :notices=notices></home-notice></v-col>
      <v-col cols="1"></v-col>
    </v-row>
</v-app>

</template>

<script>
  import HomeHead from '../components/HomeHead';
  import CourseSummary from '../components/CourseSummary.vue';
  import HomeNotice from '../components/HomeNotice.vue';
  export default {
    components: {
      HomeHead,HomeNotice,CourseSummary,
    },
    data(){
      return{
        courses:[
          {no:"1",title:"드라마 주인공처럼",start:"춘천역",arrived:"소양강 성당",time:"약 24분",dis:"총 2.4km",route:"/Story/road/1"},
          {no:"1",title:"드라마 주인공처럼",start:"춘천역",arrived:"소양강 성당",time:"약 24분",dis:"총 2.4km",route:"/Story/road/2"},
          {no:"1",title:"드라마 주인공처럼",start:"춘천역",arrived:"소양강 성당",time:"약 24분",dis:"총 2.4km",route:"/Story/road/3"}
        ],
        notices:[
            {title:"groad 소식 및 행사",route:"/community/notice",items:[{id:"01",route:"/#",title:"title1"}]},
            {title:"groad 코스 안내",route:"/story/road/1",items:[{id:"01",route:"/#",title:"title1"}]}
        ] 
      }
    }
  }

</script>
<style>
</style>
