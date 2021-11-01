<template>
   <div>
      <h1 class="text-center pa-10">여행 정보</h1>
      <v-row no-gutters align="center" justify="center">
         <v-btn-toggle v-on:change="TH_subview" mandatory>
         <v-btn tile width="300" elevation="0" x-large outlined>불교문화</v-btn>
         <v-btn tile width="300" elevation="0" x-large outlined>유교문화</v-btn>
         <v-btn tile width="300" elevation="0" x-large outlined>현대콘텐츠</v-btn>
         </v-btn-toggle>
      </v-row>
      <router-view />
   </div>
</template>

<script>
export default {
  methods:{
    TH_subview: function(event){
      switch(event){
        case 0:
          this.$router.push({path:"/info/buddism"})
          break;
        case 1:
          this.$router.push({path:"/info/Confucianism"})
          break;
        case 2:
          this.$router.push({path:"/info/modiern"})
      }
    }
  }
};
</script>