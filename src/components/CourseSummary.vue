<template>
<v-row no-gutters>
  <v-card
    class="mx-auto ma-2"
    max-width="350"
    max-height="260"
    v-for="course in courses"
    :key="course.title"
    router :to="course.route"
  >
    <v-img
      class="white--text align-end"
      height="200px"
      src="../assets/course_img.png"
      
      
    >
      <v-card-title >{{course.title}}</v-card-title>
      <br><br><br><br><br><br>
    </v-img>
    <v-row no-gutters class="primary">
      <v-col cols="8">
        <v-card-subtitle class="pt-3 pb-3 white--text">
          {{course.start}}<br>
          {{course.arrived}}
        </v-card-subtitle>
      </v-col>
      <v-col cols="4">
        <v-card-subtitle class="pt-3 pb-3 white--text">
          {{course.time}}<br>
          {{course.dis}}
        </v-card-subtitle>
      </v-col>
    </v-row>
  </v-card>
</v-row>
</template>
<script>
export default {
  name:'CourseSummary',
  props:{
    courses: Array
  },
}
</script>
