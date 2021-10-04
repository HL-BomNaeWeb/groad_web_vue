<template>
  <div>
    <h1>여행 도우미 페이지</h1>
    <v-row no-gutters align="center" justify="center">
      <v-btn-toggle v-on:change="TH_subview" mandatory>
        <v-btn tile width="300" elevation="0" x-large outlined>이용수칙</v-btn>
        <v-btn tile width="300" elevation="0" x-large outlined>준비물</v-btn>
        <v-btn tile width="300" elevation="0" x-large outlined>디지털 패스포트</v-btn>
      </v-btn-toggle>
    </v-row>
    <router-view/>
    <!-- link views/triphelper subviews accordingly -->
  </div>
</template>

<script>
export default {
  methods:{
    TH_subview: function(event){
      switch(event){
        case 0:
          this.$router.push({path:"/triphelper/rules"})
          break;
        case 1:
          this.$router.push({path:"/triphelper/requirements"})
          break;
        case 2:
          this.$router.push({path:"/triphelper/passport"})
      }
    }
  }
};
</script>

<style>
</style>