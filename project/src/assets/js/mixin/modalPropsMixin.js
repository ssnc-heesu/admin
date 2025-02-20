import { useStore } from '@/stores'
export default {
    props:{
        modalTit:{type:String},
        modalSize:{type:String},
        visibleModal:{type:String},
        modalGuide:{type:String}
    },
    data() {
        return {
            store: useStore()
        }
    },
    computed: {
        modalState() {
            return this.store.modalState.modalWrap
        },
    },
    methods: {
        closeModal(modalName) {
            this.store.closeModal(modalName)
        }
    }
}