<template>
    <div class="wrap">
        <SideBar />
        <div class="content-wrap">
            <div :class="{ 'inner': basicInner, 'inner-sm': innerSM }">
                <FunctionBox />

                <ContentTitle :CateName="PathObject"/>
                
ddddddd
                <Select 
                :selectValue= selectValue
                :selectID="selectID" 
                :data-value="selectValue"
                :selectOption="selectOption" />

                <router-view />


                <Footer />
            </div>
        </div>
    </div>
</template>
  
<script>


import SideBar from '@/components/sidebar/SideBar.vue';
import FunctionBox from '@/components/function/FunctionBox.vue';
import ContentTitle from '@/components/items/ContentTitle.vue';
import Select from '@/components/items/SelectItem.vue'
import Footer from '@/components/FooterView.vue'




export default {
    name: 'RequestFirewallPolicy',

    components: {
        SideBar,
        FunctionBox,
        ContentTitle,
        Select,
        Footer,
    },
    data() {
        return {
            basicInner: true,
            innerSM: false,
            currentPath: this.$route.fullPath,

            // select 관련
            selectID: 'selectTest',
            selectValue: 'Select value',
            selectOption: [
                {dataText:'한국어', dataValue:'kr'},
                {dataText:'영어', dataValue:'en'}
            ]
        }
    },
    computed:{
        // currentPath의 값을 / 기준으로 나눠 배열로 리턴
        // ? 이후삭제 , 텍스트안에 대문자 기준으로 띄어쓰기 추가
        PathObject() {
            return this.currentPath
            .split("?")[0]
            .split("/")
            .filter(segment => segment !== "")
            .map(segment => segment.replace(/([a-z])([A-Z])/g, '$1 $2'));
        },
    },
    watch: {
        // route가 이동될때마다 currentPath의 값을 업데이트
        '$route.fullPath': function(newPath) {
            this.currentPath = newPath;
        }
    }
}
</script>