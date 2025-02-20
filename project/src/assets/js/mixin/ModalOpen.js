import { useStore } from '@/stores'

export default {
    data() {
        return {
            store: useStore(),

            // modal 관련
            modalTit: '', // 모달 head에 들어갈 타이틀
            modalSize: '', // 모달 타이틀 밑에 설명(필요없을경우 빈값전달)
            visibleModal: '', // 모달 사이즈(sm,md,lg)
            modalGuide:'', // 사용할 모달 컴포넌트
        }
    },
    computed:{
        modalState() {
            return this.store.modalState.modalWrap
        },
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
    }
}