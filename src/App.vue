<template>
  <v-app id="app">
    <app-navi />
    <v-main>
        <router-view />
    </v-main>
    <foot-bar />
  </v-app>
</template>

<script>
import AppNavi from '@/components/AppNavi';
import FootBar from '@/components/footbar';
export default {
  name: 'App',
  components:{AppNavi,FootBar}
}

</script>
<style>
#main {
 width: 100%;
 height: 100%;
}
</style>
