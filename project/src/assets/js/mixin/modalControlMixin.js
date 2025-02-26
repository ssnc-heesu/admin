import { useStore } from '@/stores'
export default {
    data() {
        return {
            store: useStore(),

            modalTit: '', // 모달 head에 들어갈 타이틀
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

        // 모달 여는 버튼 클릭시 전달될 내용
        modalInfo(tit,con,guide){
            this.modalTit = tit; // 모달 head에 들어갈 타이틀
            this.visibleModal = con; // 사용할 모달 컴포넌트
            this.modalGuide = guide; // 모달 타이틀 밑에 설명(필요없을경우 빈값전달)
        }
    }
}