<template>
  <v-footer dark padless tile>
    <!-- color="#4A8Db7" -->
    <v-card
      tile
      color="#94a7b5"
      dark
      left
      class="white--text text-left"
      width="100%"
    >
      <v-row no-gutters>
        <v-card  
          flat
          tile
          color="#94a7b5"
          dark
          left 
          v-for="bc_item in bc_items" :key="bc_item.text" :href=bc_item.href
        >
          <v-card-text>{{bc_item.text}}</v-card-text>
        </v-card>
        <v-spacer/>
      </v-row>
      <v-card-text class="white--text py-0 pl-7 text-body-1">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam quam
        commodi a hic in dolore molestias dolorem maiores nobis possimus culpa
        atque mollitia autem debitis reiciendis velit, porro tempora corporis?
      </v-card-text>
      <p class="white--text font-weight-thin text-caption pl-7">
        ⓒ 2021. G-ROAD ALL RIGHTS RESERVED.
      </p>
      <v-divider></v-divider>
      <v-card-text class="white--text pl-7">
        {{ new Date().getFullYear() }} — <strong>봄내웹</strong>
      </v-card-text>
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
