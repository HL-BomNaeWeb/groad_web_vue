<template>
  <v-card class="ma-3 rounded-lg">
      <v-row no-gutters dense class="ma-3">
        <v-chip class="white--text" color="#888888">제1코스</v-chip>
        <v-spacer />
        <a :href="details_link">소개</a>
      </v-row>
      <v-card-title class="pt-0">Dummy Text</v-card-title>
      <v-card-subtitle>temporary dummy text</v-card-subtitle>
      <v-container class="groadC rounded-lg rounded-t-0 py-2" fill-height>
          <v-row no-gutter class="pa-1 ma-0" >
          <v-icon>mdi-location-on</v-icon>
          <p class="font-weight-black mr-2 my-0">출발</p>
          <p class="my-0">춘천역</p>
          <v-spacer/>
          <p class="my-0">약 34분</p>
          </v-row>
          <v-row no-gutter class="pa-1 ma-0">
          <p class="font-weight-black mr-2 my-0">도착</p>
          <p class="my-0">소양로 성당</p>
          <v-spacer/>
          <p class="my-0">총 2.4km</p>
          </v-row>
      </v-container>
  </v-card>
</template>

<script>
export default {
  props:{
    details_link: String,
  }
};
</script>

<style>
</style>