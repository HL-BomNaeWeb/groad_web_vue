<template>
  <v-footer dark padless tile>
    <v-card
      tile
      color="#487093"
      dark
      left
      class="white--text text-left"
      width="100%"
    >
      <v-row no-gutters>
        <v-card  
          flat
          tile
          color="#487093"
          dark
          left 
          v-for="bc_item in bc_items" :key="bc_item.text" :href=bc_item.href
        >
          <v-card-text>{{bc_item.text}}</v-card-text>
        </v-card>
        <v-spacer/>
      </v-row>
      
      <p class="white--text font-weight-thin text-caption pl-7">
        ⓒ 2021. G-ROAD ALL RIGHTS RESERVED.
      </p>
      <v-divider></v-divider>
    </v-card>
  </v-footer>
</template>
<script>
export default {
  data: () => ({
    icons: ["mdi-facebook", "mdi-twitter", "mdi-linkedin", "mdi-instagram"],
    bc_items: [
      {
        text: "사이트 소개",
        disabled: false,
        href: "http://210.115.229.18:8080",
      },
      {
        text: "이용안내",
        disabled: false,
        href: "http://210.115.229.18:8080",
      },
      {
        text: "개인정보처리방침",
        disabled: false,
        href: "http://210.115.229.18:8080",
      },
       {
        text: "패밀리 사이트",
        disabled: false,
        href: "http://210.115.229.18:8080",
      },
    ],
  }),
};
</script>
