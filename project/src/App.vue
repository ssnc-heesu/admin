<template>
    <div class="wrap">
        <SideBar />
        <div :class="{ 'inner': basicInner, 'inner-sm': innerSM }">
            <FunctionBox />
            <ContentTitle :CateName="PathObject"/>
            
            <button 
            @click="openModal('modalWrap'), 
            modalInfo('modalTest1', 'modal-sm', 'ModalTest01','')">modalTest1</button>

            <button 
            @click="openModal('modalWrap'), 
            modalInfo('modalTest2', 'modal-sm', 'ModalTest02','모달설명도 나오는지 궁금해서 만들어 봄')">modalTest2</button>
            <Select 
            :selectValue= selectValue
            :selectID="selectID" 
            :data-value="selectValue"
            :selectOption="selectOption" />

            <router-view />
            <Footer />
        </div>

        <Modal 
        v-if="modalState === true" 
        :modalTit="modalTit"
        :modalSize="modalSize"
        :visibleModal="visibleModal"
        :modalGuide="modalGuide"
        />

</div>
</template>
  
<script>
import { useStore } from '@/stores'

import SideBar from '@/components/sidebar/SideBar.vue';
import FunctionBox from '@/components/function/FunctionBox.vue';
import ContentTitle from '@/components/items/ContentTitle.vue';
import Select from '@/components/items/SelectItem.vue'
import Footer from '@/components/FooterView.vue'
import Modal from '@/components/modal/ModalWrap.vue'
export default {
    name: 'RequestFirewallPolicy',
    components: {
        SideBar,
        FunctionBox,
        ContentTitle,
        Select,
        Footer,
        Modal
    },
    data() {
        return {
            store: useStore(),

            basicInner: true,
            innerSM: false,
            currentPath: this.$route.fullPath,

            // modal 관련
            modalTit: '',
            modalSize: '',
            visibleModal: '',
            modalGuide:'',

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
        modalState() {
            return this.store.modalState.modalWrap
        },
    },
    mounted() {
    },
    methods: {
        openModal(modalName) {
            this.store.openModal(modalName)
            console.log(modalName)
        },

        modalInfo(tit,size,con,guide){
            this.modalTit = tit;
            this.modalSize = size;
            this.visibleModal = con;
            this.modalGuide = guide;
        }
    },

    watch: {
        // route가 이동될때마다 currentPath의 값을 업데이트
        '$route.fullPath': function(newPath) {
            this.currentPath = newPath;
        }
    }
}
</script>