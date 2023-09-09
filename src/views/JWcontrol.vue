<template>
    <el-container  class="container">
        <el-header class="head">
            <svg class="icon">
                <use xlink:href="#icon-ico_health"></use>
            </svg>
            <div class="head-right">
                <svg class="icon">
                    <use xlink:href="#icon-qunfengxiaoxitishilingdang"></use>
                </svg>
                <div style="position: relative;">
                    <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"/>
                    <ul class="list">
                        <li v-for="item in list">
                            <svg class="icon">
                                <use :xlink:href="item.icon"></use>
                            </svg>
                            <span>{{item.title}}</span>
                        </li>
                    </ul>
                </div>
                <svg class="icon" @click="router.replace('/login')">
                    <use xlink:href="#icon-tuichudenglu"></use>
                </svg>
            </div>
        </el-header>
        <el-container>
            <!-- 侧边栏 -->
            <el-aside width="200px" class="aside">
                <el-scrollbar style="height: calc(100vh - 60px);">
                    <el-menu>
                        <template v-for="item in menu" :key="item.id">
                            <template v-if="item.children">
                                <el-sub-menu index="1">
                                    <template #title>
                                        <svg>
                                            <use :xlink:href="item.icon"></use>
                                        </svg>
                                        <span>{{item.title}}</span>
                                    </template>
                                        <el-menu-item-group>
                                            <el-menu-item v-for="p in item.children" :key="p.id">{{ p.title }}</el-menu-item>
                                    </el-menu-item-group>        
                                </el-sub-menu>
                            </template>
                            <template v-else>
                                <el-menu-item>
                                    <svg>
                                        <use :xlink:href="item.icon"></use>
                                    </svg>
                                    <span>{{item.title}}</span>
                                </el-menu-item>
                            </template>
                        </template>
                    </el-menu>
                </el-scrollbar>
            </el-aside>


            <el-main class="main">Main</el-main>
        </el-container>
    </el-container>
</template>
<script setup>
import {ref} from 'vue'
import{useRouter} from 'vue-router'
const list = ref([
    {id:1,path:'',icon:'#icon-icon03',title:'个人中心'},
    {id:2,path:'',icon:'#icon-qqkongjian',title:'个人空间'},
    {id:3,path:'',icon:'#icon-shezhi',title:'账户设置'}
])
const menu = ref([//最外层渲染
    {id:1,path:'',icon:'',title:'商品管理',children:[
        {pid:1,id:11,path:'',title:'产品详情'},
        {pid:1,id:12,path:'',title:'产品分类'},
    ]},
    {id:2,path:'',icon:'',title:'用户管理',children:[
        {pid:2,id:21,path:'',title:'用户分类'},
        {pid:2,id:22,path:'',title:'用户信息'},
    ]},
    {id:3,path:'',icon:'',title:'活动管理'},
])
const router = useRouter()

</script>

<style scoped>
.container {
    height: 100vh;
}
/* 头部代码 */
.head{
    background-color: skyblue;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.head .icon{
    height: 40px;
    width: 40px;
    padding-left: 50px;
}
/* 头部右边代码 */
.head-right{
    display: flex;
    width: 200px;
    justify-content: space-between;
    align-items: center;
}
.head-right .icon{
    padding: 0;
    width: 24px;
    height: 24px;

}
/* 划过效果 */
.head-right div:hover .list{
    display: block;
}
.list li:hover{
    background-color: skyblue;
}
.list{
    display: none;
    position: absolute;
    background-color: white;
    border-radius: 5px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
    width: 200px;
    margin-top: 7px;
    padding: 10px 20px;
    right: 0;

}
.list li{
    display: flex;
    height: 40px;
    align-items: center;
    font-size: 14px;
    margin-bottom: 10px;
}
.list .icon{
    width: 20px;
    height: 20px;
    padding: 0 20px;
}






/* 侧边栏代码 */
.aside {
    background-color: azure;
}
</style>==