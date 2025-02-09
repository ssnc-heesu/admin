<template>
    <div class="select" :id="selectID" @click="toggleDropdown" :class="{ open: isOpen }">
        <span class="label">{{ selectedOption }}</span>
        <ul class="option-list" v-show="isOpen">
            <li class="option" 
            v-for="option in selectOption" 
            :key="option.dataText" 
            :data-value="option.dataValue"
            @click.stop="changeSelect(option)"
            >{{ option.dataText }}</li>
        </ul>
        <input type="hidden" name="protocol" class="select-value"  :value="selectedOption">
    </div>
</template>

<script>
import selectMixin from '@/assets/js/selectMixin';
export default {
    name: 'SelectItem',
    mixins: [selectMixin],
    props: {
        selectValue: { type: String }, // 부모에서 받은 현재 선택 값
        selectOption: { type: Array }, // 옵션 목록
    },
    data() {
        return {
            selectedOption: this.selectValue, // 현재 선택된 값 저장
        };
    },
    computed: {
        selectedOptionText() {
            const selected = this.selectOption.find(option => option.dataValue === this.selectedOption);
            return selected ? selected.dataText : "Select"; // 선택된 텍스트 반환
        }
    },
    methods: {
        changeSelect(option) {
            this.selectedOption = option.dataValue; // 선택한 값 업데이트
            this.isOpen = false; // 드롭다운 닫기
            this.$emit("update:modelValue", this.selectedOption); // 부모 컴포넌트로 값 전달
        }
    }

}
</script>