<template>
    <div>
        <v-toolbar dark color="#FFFFFF" height="80">
            <v-app-bar-nav-icon @click="nav_drawer=!nav_drawer" v-if="$vuetify.breakpoint.xsOnly"/>
            <v-row no-gutters align="center" justify="center" class="flex-nowrap">
                <v-col md="3" lg="4">
                    <v-toolbar-items >
                        <v-card flat color="rgba(0,0,0,0)" router :to="'/'">
                        <v-img src="../assets/logo.png" width="150" />
                        </v-card>
                    </v-toolbar-items>
                </v-col>
                <v-col md="5" lg="4">
                    <v-row no-gutters align="center" justify="center" class="flex-nowrap">
                        <v-menu open-on-hover offset-y tile v-for="link in links" :key="link.name">
                            <template v-slot:activator="{ on, attrs }">
                                <v-btn text tile style="font-weight:bold" color="#000000" router :to="link.route" v-bind="attrs" v-on="on">
                                    {{link.name}}
                                </v-btn>
                            </template>
                            <v-card>
                                <v-list v-if="link.item">
                                    <v-list-item v-for="item in link.item" :key="item.name" router :to="item.route" >
                                        <v-list-item-title>
                                            {{item.name}}
                                        </v-list-item-title>
                                    </v-list-item>
                                </v-list>
                                <v-list v-else-if="link.Text==='마음의 순례길'">
                                    <v-list-item>
                                        <v-list-item-content>
                                            <v-list-item-title>마음의 순례길</v-list-item-title>
                                            <v-list-item-subtitle>
                                            <v-img src="../assets/map.png" max-width="500"/>
                                            </v-list-item-subtitle>
                                        </v-list-item-content>
                                    </v-list-item>
                                </v-list>
                            </v-card>
                        </v-menu>
                    </v-row>
                </v-col>
                <v-col cols="4">   
                    <v-toolbar-items v-if="$vuetify.breakpoint.smAndUp">
                    <v-spacer />
                        <v-toolbar-items v-if="login_status">
                            <v-btn text style="font-weight:bold" color="#000000" router :to="'mypage'" >
                                마이페이지
                            </v-btn>
                            <v-btn text width="100" style="font-weight:bold" color="#000000" @click="login_status=!login_status">
                                로그아웃
                            </v-btn>
                        </v-toolbar-items>
                        <v-toolbar-items v-else>
                            <v-btn text width="100" style="font-weight:bold" color="#000000" router :to="'signup'">
                                회원가입
                            </v-btn>
                            <v-btn text width="100" style="font-weight:bold" color="#000000" @click="login_status=!login_status" router :to="'login'">
                                로그인
                            </v-btn>
                        </v-toolbar-items>
                        <v-btn text style="font-weight:bold" color="#000000" v-on:click="search">
                                검색
                            </v-btn>
                    </v-toolbar-items>
                </v-col>
            </v-row>
        </v-toolbar>
        <v-navigation-drawer v-model="nav_drawer" absolute temporary>
            <v-menu open-on-hover offset-x tile v-for="link in links" :key="link.name">
                <template v-slot:activator="{ on, attrs }">
                    <v-list nav>
                        <v-list-item-group v-model="group" active-class="deep-purple--text text--accent-4">
                            <v-list-item router :to="link.route" v-bind="attrs" v-on="on">
                                <v-list-item-action>
                                    <v-icon left>
                                        {{link.icon}}
                                    </v-icon>
                                </v-list-item-action>
                                <v-list-item-content>
                                    <v-list-item-title>
                                        {{link.name}}
                                    </v-list-item-title>
                                </v-list-item-content>
                            </v-list-item>
                        </v-list-item-group>  
                    </v-list>
                </template>
                <v-card>
                    <v-list v-if="link.item">
                        <v-list-item v-for="item in link.item" :key="item.name" router :to="item.route" >
                            <v-list-item-title>
                                {{item.name}}
                            </v-list-item-title>
                        </v-list-item>
                    </v-list>
                </v-card>
            </v-menu>
        </v-navigation-drawer>
    </div>
</template>
<script>

export default {
    name:'AppNavi',
    data(){
        return{
            login_status:false,
            nav_drawer:false,
            group: null,
            ShowMenu:false,
            links:[
                {icon:'mdi-image-filter-hdr', name:'마음의 순례길', route:'/intro'},
                {icon:'mdi-airplane-takeoff', name:'여행 도우미',route:'/triphelper'},
                {icon:'mdi-road', name:'순례길 이야기', route:'/story/road/1',
                    item:[
                        {name:'1길',route:'/story/road/1'},
                        {name:'2길',route:'/story/road/2'},
                        {name:'3길',route:'/story/road/3'}
                    ]
                },
                {icon:'mdi-train-car', name:'여행 정보', route:'/info'},
                {icon:'mdi-comment-account-outline', name:'커뮤니티',  route:'/community',
                    item:[
                        {name:'순례길 소식',route:'/community/notice'},
                        {name:'순례자 이야기',route:'/community/sns'}
                    ]
                },
            ],
        }
    },
    watch:{
        group(){
            this.nav_drawer=false;
        }
    },
    methods:{
        search:function(){

        }
    }
}
</script>

