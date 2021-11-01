<template>
    <v-app>
        <v-container class="mx-auto ma-2" fluid >
                <v-layout row wrap>
                    <v-col  v-for="notice in notices" :key="notice.title" sm="6">
                        <v-card flat height="500" color="rgba(0,0,0,0)">
                            <v-list color="rgba(0,0,0,0)">
                            <v-row no-gutters>
                                <v-col cols="11">
                                <v-list-item-title  class="display-1 font-weight-bold my-2">
                                    {{notice.title}}
                                </v-list-item-title>
                                </v-col>
                                <v-col cols="1">
                                    <v-card class="pt-0" flat router :to="notice.route">
                                    <font-awesome-icon icon="chevron-right" class="font-weight-bold display-1"/>
                                    </v-card>
                                </v-col>
                            </v-row>
                                <hr color="#487093" size="10px">
                                <v-list-item v-for="item in notice.items" :key="item.id" router :to="item.route">
                                    <v-list-item-content>
                                    <v-list-item-title>{{item.title}}</v-list-item-title>
                                    </v-list-item-content>
                                </v-list-item>
                            </v-list>
                        </v-card>
                    </v-col>
                </v-layout>
        </v-container>
    </v-app>
</template>
<script>
export default {
    name:'HomeBody',
    props:{
        notices: Array
    },
}
</script>
<style scoped>
.back{
    background:#FFFFFF;
    height: 150%;
    width: 150%;
}
</style>