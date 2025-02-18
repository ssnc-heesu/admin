<template>
        <div class="modal-body">
            <span style="color:red;">ModalWrap01 의 modal-body</span>
        </div>
        <div class="modal-foot">
            <span style="color:red;">ModalWrap01 의 modal-foot</span>
        </div>
</template>

<script>
import { useStore } from '@/stores'
export default {
    name: 'ModalTest01',
    components:{
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
</script>
