<template>
<v-app>
    <home-head></home-head>
    <v-row no-gutters dense class="cyan lighten-3">
      <v-col><course-summary details_link="/story/road/1"></course-summary></v-col>
      <v-col><course-summary details_link="/story/road/2"></course-summary></v-col>
      <v-col><course-summary details_link="/story/road/3"></course-summary></v-col>
    </v-row>
    <home-body></home-body>
</v-app>

</template>

<script>
  import HomeHead from '../components/HomeHead';
  import HomeBody from '../components/HomeBody';
  import CourseSummary from '../components/CourseSummary.vue';
  export default {
    components: {
      HomeHead,HomeBody,CourseSummary
    },
  }
</script>

