<template>
    <div class="modal" id="modalWrap">
        <div class="modal-content" :modalSize="modalSize">
            <div class="modal-head">
                <h2>{{ modalTit }}</h2>
                <p v-if="modalGuide!==''">{{ modalGuide }}</p>
                <button type="button" class="btn-modal-close" @click="closeModal('modalWrap')"><span class="blind">닫기</span></button>
            </div>
            <component :is="modalContent"></component>
        </div>
        
        <div class="overlay" @click="closeModal('modalWrap')"></div>
    </div>
</template>

<style scoped>
.modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 999;
}

.modal-content {
    position: absolute;
    top: 300%;
    left: 50%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    max-width: 85%;
    max-height: 70%;
    padding: 14px 10px 14px 20px;
    background: var(--bgContent);
    border-radius: 15px;
    transform: translate(-50%,-50%);
    box-shadow: 0 0 10px var(--lightShadow);
    opacity: 0;
    z-index: 100;
    animation: fadeUp 0.2s forwards;
}
</style>

<script>
import ModalTest01 from '@/components/modal/ModalTest01.vue'
import ModalTest02 from '@/components/modal/ModalTest02.vue'

import { useStore } from '@/stores'
export default {
    name: 'ModalWrap',
    props:{
        modalTit:{type:String},
        modalSize:{type:String},
        visibleModal:{type:String},
        modalGuide:{type:String}
    },
    components:{
        ModalTest01,
        ModalTest02
    },
    data() {
        return {
            store: useStore(),
            modalContent: this.visibleModal,
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
