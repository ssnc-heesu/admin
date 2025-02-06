<template>
    <aside id="sideMenu">
        <img src="@/assets/img/img_logo.png" style="width :28px; height: 28px;" class="logo">
        <nav>
            <ul></ul>
        </nav>
        <!-- 메뉴 오픈 -->
        <div class="side-menu">
            <div class="full-logo">Breezeway FireONE</div>
            <button type="button" class="btn-close" data-name="sideMenu"><i data-lucide="chevrons-left" width="20"></i></button>
            <ul class="menu-list"></ul>
        </div>

        <ModeSwitch />
        <OverLay :data-name="dataName"/>
</aside>
</template>

<script>
import ModeSwitch from '@/components/sidebar/ModeSwitch.vue';
import OverLay from '@/components/OverLay.vue';
export default {
    name: 'SideBar',
    components: {
        ModeSwitch,
        OverLay
    },
    data(){
        return {
            dataName: "sideMenu"
        }
    }
}
</script>

<style scoped>
aside {
    position: relative;
    top: 0;
    left: 0;
    height: 100%;
    padding: 30px 20px;
    text-align: center;
    background: var(--bgContent);
    z-index: 10;
}
aside nav {
    position: relative;
    display: inline-block;
    min-width: 44px;
    margin-top: 30px;
    background: var(--bgColor);
    border-radius: 10em;
    z-index: 1;
}
aside .logo {
    display: block;
    margin: 0 auto;
}
aside .full-logo {
    position: relative;
    width: 100%;
    height: 44px;
    margin: 0 auto;
    text-indent: -9999px;
    overflow: hidden;
    background-image: url('@/assets/img/img_logo_full.png');
    background-repeat: no-repeat;
    background-position: center;
    background-size: 150px;
}
html[color-theme="dark"] aside .full-logo {
    background-image: url('@/assets/img/img_logo_full_white.png');
}
aside nav li {
    margin: 8px 0;
    border-radius: 50%;
}
aside nav li svg {
    width: 20px;
    height: 20px;
}
aside nav li .menu-item {
    position: relative;
    display: block;
    width: 44px;
    height: 44px;
    padding: 11px;
    border-radius: 50%;
}
aside nav li .menu-item:hover .bubble {
    display: block;
}
aside nav li .menu-item.active {
    background: var(--point);
}
aside nav li .menu-item:hover:not(.active) svg{
    color: #2c67ff;
}
aside nav li .menu-item.active svg {
    color: #fff;
    stroke: #fff;
}
aside.open .overlay {
    display: block;
}
aside.open .side-menu {
    transform: translateX(0);
}

aside .side-menu {
    position: fixed;
    top: 0;
    left: 0;
    width: 256px;
    height: 100%;
    padding: 24px 0 20px;
    background: var(--bgContent);
    z-index: 100;
    transform: translateX(-120%);
    transition: all 0.2s;
}
aside .side-menu .menu-list {
    height: 100%;
    margin-top: 24px;
    overflow: auto;
}
aside .side-menu .menu-list::-webkit-scrollbar {
    width: 4px;
}
aside .side-menu .menu-list::-webkit-scrollbar-thumb {
    background: var(--lightGray);
    border-radius: 10px;
}
aside .side-menu .menu-list::-webkit-scrollbar-track {
    background: var(--bgContent);
}
aside .side-menu .menu-list {
    padding-left: 12px;
    padding-bottom: 64px;
}
aside .side-menu .menu-list .menu-item {
    position: relative;
    display: block;
    width: 100%;
    padding: 18px 30px 18px 18px;
    font-size: 12px;
    text-align: left;
}
aside .side-menu .menu-list li{
    overflow: hidden;
}
aside .side-menu .menu-list button.menu-item::before {
    content: '';
    position: absolute;
    top: 50%;
    right: 18px;
    width: 6px;
    height: 6px;
    margin-top: -3px;
    border: solid var(--mainTxt);
    border-width: 1px 1px 0 0;
    transform: rotate(135deg);
    transition: all 0.2s;
}
aside .side-menu .menu-list .menu-item svg {
    display: inline-block;
    vertical-align: middle;
    width: 20px;
    margin: -2px 14px 0 0;
}
aside .side-menu .menu-list .menu-name svg {
    position: absolute;
    top: 50%;
    right: 1px;
    width: 12px;
    height: 12px;
    margin-top: -6px;
}
aside .side-menu .menu-list .menu-item.active {
    color: var(--point);
    font-weight: 600;
    background: var(--bgColor);
}
aside .side-menu .menu-list .menu-item:hover {
    color: var(--point);
    font-weight: 600;
}
aside .side-menu .menu-list .menu-item.active::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 4px;
    height: 100%;
    background: var(--point);
}
aside .side-menu .menu-list button.menu-item.active::before {
    border-color: var(--point);
    transform: rotate(315deg);
}
aside .side-menu .menu-list .menu-item.active svg,
aside .side-menu .menu-list .menu-item:hover svg  {
    color: var(--point);
    stroke: var(--point);
}
aside .depth2 {
    position: relative;
    max-height: 0;
    margin-left: 30px;
    transition: all 0.2s;
}
aside .menu-item.active + .depth2 {
    max-height: none;
    margin: 10px 0 10px 30px;
}
aside .depth2::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 3px;
    width: 1px;
    height: calc(100% - 26px);
    background: var(--bgColor);
    transform: translateY(-50%);
    z-index: -1;
}
aside .depth2 li a {
    position: relative;
    display: block;
    padding: 8px 0;
    font-size: 11px;
    font-weight: 400;
    color: #9cadb5;
    text-align: left;
    padding-left: 24px;
    transition: all 0.2s;
}
aside .depth2 li a::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 0;
    width: 6px;
    height: 6px;
    margin-top: -2px;
    background: #a4b2bb;
    border-radius: 50%;
}
aside .depth2 li.active a,
aside .depth2 li:hover a {
    color: var(--mainTxt);
    font-weight: 500;
}
aside .depth2 li.active a::before {
    background: var(--point);
}
aside .side-menu .menu-list .menu-item.active + .depth2 {
    display: block;
}

</style>