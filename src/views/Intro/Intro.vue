<template>
    <div>
        <h1 class="text-center pa-10  primary--text">마음의 순레길</h1>
        <v-row no-gutters align="center" justify="center">
         <v-btn-toggle v-on:change="TH_subview" mandatory>
         <v-btn tile width="300" elevation="0" x-large outlined>순례길 소개</v-btn>
         <v-btn tile width="300" elevation="0" x-large outlined>투어 안내</v-btn>
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
          this.$router.push({path:"/intro/intro"})
          break;
        case 1:
          this.$router.push({path:"/intro/info"})
          break;
      }
    }
  }
};
</script>