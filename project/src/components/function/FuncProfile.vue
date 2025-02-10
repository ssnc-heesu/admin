<template>
    <div class="select" @click="toggleDropdown" :class="{ open: isOpen }">
        <span class="label">
            <img src="@/assets/img/img_profile.png" alt="profile img" width="30" style="margin-top:4px"/>
            </span>
        <ul class="option-list" v-show="isOpen">
            <li class="option">
                <router-link :to="'#'">Joshua Mclnerney <span class="small txt-gray">Joshua@ssnc.co.kr</span></router-link>
            </li>
            <li class="option time">
                <span>30:00</span>
                <button type="button" class="btn-time">
                    <i data-lucide="alarm-clock"></i>
                    로그인연장
                </button>
            </li>
            <li class="option">
                <button type="button" class="btn-logout">
                    <LogOut />Logout
                </button>
            </li>
        </ul>
    </div>
</template>
  
<script>
import { LogOut } from 'lucide-vue-next';
import dropDownMixin from '@/assets/js/mixin/dropDownMixin';
export default {
    name: 'FuncProfile',
    mixins: [dropDownMixin],
    components :{
        LogOut
    },
    props: {
        selectOption: { type: Array }, // 옵션 목록
    },
}
</script>

<style scoped>
.btn-logout svg {
    display: inline-block;
    vertical-align: middle;
    width: 13px;
    height: 13px;
    margin: -3px 5px 0 0;
}
.time {
    display: flex;
    justify-content: space-between;
}
.btn-time {
    font-size: 11px;
    color: var(--lightTxt);
    border-bottom: 1px solid var(--gray);
}
.btn-time svg {
    display: inline-block;
    vertical-align: middle;
    width: 11px;
    height: 11px;
    margin-top: -4px;
    color: var(--lightTxt);
    stroke: var(--lightTxt);
}
.btn-time:hover {
    color: var(--point);
    border-bottom-color: var(--point);
}
.btn-time:hover svg {
    color: var(--point);
    stroke: var(--point);
}
</style>