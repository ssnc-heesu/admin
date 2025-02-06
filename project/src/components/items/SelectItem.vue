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

<style scoped>
   
</style>

<script>
export default {
    name: 'SelectItem',
    props: {
        selectID: { type: String },
        selectValue: { type: String, default: "" },
        selectOption: { type: Array, required: true },
    },
    components: {
    },
    data() {
        return {
            isOpen: false,
            selectedOption: this.selectValue,
        }
    },
    computed: {
        selectedOptionText() {
            const selected = this.selectOption.find(option => option.dataValue === this.selectedOption);
            return selected ? selected.dataText : "Select";
        }
    },
    methods: {
        toggleDropdown() {
            this.isOpen = !this.isOpen;
        },
        changeSelect(option) {
            this.selectedOption = option.dataValue;
            this.isOpen = false;
            this.$emit("update:modelValue", this.selectedOption);
        },
        closeDropdown(event) {
            if (!this.$el.contains(event.target)) {
                this.isOpen = false;
            }
        }
    },
    mounted() {
        document.addEventListener("click", this.closeDropdown);
    },
    beforeUnmount() {
        document.removeEventListener("click", this.closeDropdown);
    }
}
</script>

<style scoped>
.select {
    position: relative;
    cursor: pointer;
    font-size: 12px;
    color: var(--lightTxt);
    z-index: 1;
}
.select .value-input {
    display: none;
}
.select .label {
    position: relative;
    display: inline-block;
    width: 100%;
    height: 30px;
    padding: 7px 18px 7px 12px;
    font-size: 11px;
    color: var(--lightTxt);
    background: var(--bgContent);
    border: 1px solid var(--lightGray);
    border-radius: 4px;
    overflow: hidden;
}
.select .label::after {
    content: '';
    position: absolute;
    top: 50%;
    right: 8px;
    width: 0;
    height: 0;
    margin-top: -2px;
    border-style: solid;
    border-width: 4px 3px 0px 3px;
    border-color: var(--lightTxt) transparent transparent transparent;
    transition: all 0.1s;
}
.select.open .label::after {
    transform: rotate(180deg);
}
.select.open {
    z-index: 20;
}
.select .option-list {
    position: absolute;
    top: 100%;
    left: 0;
    width: max-content;
    max-height: 200px;
    min-width: 100%;
    margin-top: 8px;
    border: 1px solid var(--lightGray);
    border-radius: 5px;
    box-shadow: 0 0 10px var(--lightShadow);
    background: var(--bgContent);
    overflow: auto;
    z-index: 10;
}
.select .option-list li {
    padding: 12px 10px;
    border-bottom: 1px solid var(--lightGray);
    text-align: left;
    transition: all 0.2s;
}
.select .option-list li:hover {
    background: var(--lightGray);
}
.select .option-list li + li {
    margin-top: 0;
}
.select .option-list li:last-of-type {
    border-bottom: 0;
}
.select .option-list::-webkit-scrollbar {
    width: 4px;
}
.select .option-list::-webkit-scrollbar-thumb {
    background: var(--gray);
    border-radius: 10px;
}
.select .option-list::-webkit-scrollbar-track {
    background: var(--bgContent);
}
</style>
