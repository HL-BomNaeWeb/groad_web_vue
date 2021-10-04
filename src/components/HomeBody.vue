<template>
    <v-app>
        <v-container class="back" fluid >
                <v-layout row wrap>
                    <v-col sm="4" >
                        <v-card height="500">
                            <v-img src="../assets/home_body_poster.jpg" />
                        </v-card>
                    </v-col>
                    <v-col sm="4">
                        <v-card height="500">
                            <v-list>
                                <v-list-item-title class="display-1 font-weight-bold my-2">마음의 순례길 행사 및 공지</v-list-item-title>
                                    <v-list-item v-for="item in items" :key="item.id" router :to="item.route">
                                        <v-list-item-content>
                                        <v-list-item-title>{{item.title}}</v-list-item-title>
                                        </v-list-item-content>
                                    </v-list-item>
                            </v-list>
                        </v-card>
                    </v-col>
                    <v-col sm="4">
                        <v-card >
                            <v-img src="../assets/home_body_content.jpg" height="500" />
                        </v-card>
                    </v-col>
                </v-layout>
        </v-container>
    </v-app>
</template>
<script>
export default {
    name:"HomeBody",
    created() {
        this.$http.get(`/api/notice`)
        .then((response) => {
            this.items = response.data
        }).catch(err=>{
            alert(err);
            console.log(err);
        })
    },
    data(){
        return{
            items:[
                
            ]
        }
    }
}
</script>
<style scoped>
.back{
    background:#A2e2f8;
    height: 150%;
    width: 150%;
}
</style>