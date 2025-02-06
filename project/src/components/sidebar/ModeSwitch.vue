<template>
    <div class="mode">
            <input type="checkbox" id="mode" class="switch" v-model="modeChk" @change="modeChange">
            <label for="mode">
                <Sun default-class="light"/>
                <Moon default-class="dark"/>
            </label>
        </div>
</template>

<script>
import { Sun } from 'lucide-vue-next';
import { Moon } from 'lucide-vue-next';

export default {
    name: 'ModeSwitch',
    components: {
        Sun,
        Moon
    },
    data() {
        return {
            modeChk: true,
            getMenu: {},
        }
    },
    created(){
        
    },
    mounted(){
        this.defaultMode();
    },
    methods: {
        // 초기에 html 태그 data-theme값에 따라 modeChk의 상태를 지정
        defaultMode(){
            let htmlMode = document.querySelector('html')
            if(htmlMode.dataset.theme === 'light') {
                this.modeChk = true;
            } else {
                this.modeChk = false;
            }
        },
        // mode switch의 체크 여부에 따라 세션스토리지의 colorTheme 값을 변경, html data-theme를 변경
        modeChange () {
            if(this.modeChk === true) {
                document.querySelector('html').dataset.theme = 'light'
                sessionStorage.setItem('colorTheme', 'light');
            } else {
                document.querySelector('html').dataset.theme = 'dark'
                sessionStorage.setItem('colorTheme', 'dark');
            }
        },

    }
}
</script>

<style scoped>
.mode {
    position: absolute;
    left: 0;
    bottom: 24px;
    width: 100%;
}
.mode label {
    position: relative;
}
.mode svg {
    position: absolute;
    top: 8px;
    left: 8px;
    width: 11px;
    height: 11px;
    color: #222;
    stroke: #222;
    z-index: 1;
    transition: all 0.2s;
}
.mode svg[default-class="light"] {
    left: 34px;
    color: #fff;
    stroke: #fff;
}
.mode .switch:checked ~ label svg[default-class="dark"],
.mode .switch ~ label svg[default-class="light"] {
    opacity: 0;
}
.mode .switch:checked ~ label svg[default-class="light"],
.mode .switch ~ label svg[default-class="dark"] {
    opacity: 1;
}
</style>
