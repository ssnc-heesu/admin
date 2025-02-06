<template>
    <div class="wrap">
        <SideBar />
        <router-view />
    </div>

</template>
  
<script>
import SideBar from '@/components/sidebar/SideBar.vue';
export default {
    name: 'RequestFirewallPolicy',
    components: {
        SideBar
    }
}
</script>