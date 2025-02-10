<template>
    <div class="select" @click="toggleDropdown" :class="{ open: isOpen }">
        <span class="label">
            <Globe />
        </span>
        <ul class="option-list" v-show="isOpen">
            <li>
                <router-link :to="'/dfef'">dddd</router-link>
            </li>
            <li>
                <router-link :to="'/dfef'">dddd</router-link>
            </li>
            <li>
                <router-link :to="'/dfef'">dddd</router-link>
            </li>
        </ul>
        <input type="hidden" name="protocol" class="select-value">
    </div>
</template>

<style scoped>
   
</style>

<script>
import { Globe } from 'lucide-vue-next';
import selectMixin from '@/assets/js/selectMixin';
export default {
    name: 'SelectItem',
    mixins: [selectMixin],
    props: {
        selectOption: { type: Array }, // 옵션 목록
    },
    components: {
        Globe,
    },
}
</script>