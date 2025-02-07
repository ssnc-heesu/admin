<template>
    <div class="wrap">
        <SideBar />
        <div :class="{ 'inner': basicInner, 'inner-sm': innerSM }">
            <FunctionBox />
            <ContentTitle :CateName="PathObject"/>
            <router-view />
            <Footer />
        </div>
    </div>
</template>
  
<script>
import SideBar from '@/components/sidebar/SideBar.vue';
import FunctionBox from '@/components/function/FunctionBox.vue';
import ContentTitle from '@/components/items/ContentTitle.vue';
export default {
    name: 'RequestFirewallPolicy',
    components: {
        SideBar,
        FunctionBox,
        ContentTitle
    },
    data() {
        return {
            basicInner: true,
            innerSM: false,
            currentPath: this.$route.fullPath
        }
    },
    computed:{
        // currentPath의 값을 / 기준으로 나눠 배열로 리턴
        PathObject() {
            return this.currentPath.split("/").filter(segment => segment !== "");
        }
    },
    mounted() {
    },
    methods: {
    },

    watch: {
        // route가 이동될때마다 currentPath의 값을 업데이트
        '$route.fullPath': function(newPath) {
            this.currentPath = newPath;
        }
    }
}
</script>