<template>
    <div class="select" @click="toggleDropdown" :class="{ open: isOpen }">
        <span class="label">
            <Globe />
        </span>
        <ul class="option-list" v-show="isOpen">
            <li class="option" data-value="en"><span>English</span></li>
            <li class="option" data-value="es"><span>Español </span></li>
            <li class="option" data-value="ko"><span>한국어</span></li>
        </ul>
    </div>
</template>

<script>
import { Globe } from 'lucide-vue-next';
import dropDownMixin from '@/assets/js/mixin/dropDownMixin';
export default {
    name: 'FuncLanguage',
    mixins: [dropDownMixin],
    components: {
        Globe,
    },
}
</script>

<style scoped>
.select .option-list li {
    padding: 0;
}
.select .option-list li > * {
    display: block;
    padding: 12px 10px;
}
</style>