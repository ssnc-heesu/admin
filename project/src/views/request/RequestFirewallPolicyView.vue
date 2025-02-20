<template>
    <button 
    @click="openModal('modalWrap'), 
    modalInfo('modalTest1', 'modal-sm', 'ModalTest01','')">modalTest1</button>

    <button 
    @click="openModal('modalWrap'), 
    modalInfo('modalTest2', 'modal-sm', 'ModalTest02','모달설명도 나오는지 궁금해서 만들어 봄')">modalTest2</button>

    <div class="modal" v-if="modalState === true">
        <component 
        :modalTit="modalTit"
        :modalSize="modalSize"
        :modalGuide="modalGuide"
        :is="visibleModal"></component>

        <div class="overlay" @click="closeModal('modalWrap')"></div>
    </div>
</template>
  
<script>
import modalMixin from '@/assets/js/mixin/modalControlMixin';

import ModalTest01 from '@/components/modal/ModalTest01.vue'
import ModalTest02 from '@/components/modal/ModalTest02.vue'

export default {
    name: 'RequestFirewallPolicy',
    mixins: [modalMixin],
    components: {
        ModalTest01,
        ModalTest02
    }
}
</script>
