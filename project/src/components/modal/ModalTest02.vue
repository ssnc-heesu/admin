<template>
    <div class="modal-content modal-sm">
        <div class="modal-head">
            <h2>{{ modalTit }}</h2>
            <p v-if="modalGuide!==''">{{ modalGuide }}</p>
            <button type="button" class="btn-modal-close" @click="closeModal('modalWrap')"><span class="blind">닫기</span></button>
        </div>
        <div class="modal-body">
            <span style="color:red;">ModalWrap02 의 modal-body</span>
        </div>
        <div class="modal-foot">
            <span style="color:red;">ModalWrap02 의 modal-foot</span>
        </div>
    </div>
</template>

<script>
import modalPropsMixin from '@/assets/js/mixin/modalPropsMixin';

export default {
    name: 'ModalTest02',
    mixins: [modalPropsMixin]
}
</script>
