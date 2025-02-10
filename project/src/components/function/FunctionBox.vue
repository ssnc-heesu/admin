<template>
    <div class="function-box">
        <FuncAlarm />
        <FuncLanguage />
        <FuncProfile />
    </div>
</template>
  
<script>
import FuncAlarm from '@/components/function/FuncAlarm.vue'
import FuncLanguage from '@/components/function/FuncLanguage.vue'
import FuncProfile from '@/components/function/FuncProfile.vue'
export default {
    name: 'FunctionBox',
    components: {
        FuncAlarm,
        FuncLanguage,
        FuncProfile
    }
}
</script>

<style scoped>
.function-box {
    position: absolute;
    top: 34px;
    right: 56px;
    display: flex;
    gap: 10px;
    z-index: 100;
}
</style>