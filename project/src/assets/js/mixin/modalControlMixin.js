import { useStore } from '@/stores'
export default {
    data() {
        return {
            store: useStore(),

            modalTit: '', // 모달 head에 들어갈 타이틀
            modalSize: '', // 모달 사이즈(sm,md,lg)
            visibleModal: '', // 사용할 모달 컴포넌트
            modalGuide:'', // 모달 타이틀 밑에 설명(필요없을경우 빈값전달)
        }
    },
    computed:{
        // store 내부에 modalWrap 상태
        modalState() {
            return this.store.modalState.modalWrap
        },
    },
    methods: {
        // store 내부에서 modalWrap의 상태를 변경
        openModal(modalName) {
            this.store.openModal(modalName)
            console.log(modalName)
        },
        closeModal(modalName) {
            this.store.closeModal(modalName)
        },

        // 모달 여는 버튼 클릭시 전달될 텍스트를 변경
        modalInfo(tit,size,con,guide){
            this.modalTit = tit;
            this.modalSize = size;
            this.visibleModal = con;
            this.modalGuide = guide;
        }
    }
}