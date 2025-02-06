<template>
    <div class="inner">
        <FunctionBox />
        <ContentTitle :MajorCate="MajorCate" :MiddleCate="MiddleCate"/>
    </div>
</template>
  
<script>
import FunctionBox from '@/components/function/FunctionBox.vue';
import ContentTitle from '@/components/items/ContentTitle.vue';
export default {
    name: 'RequestFirewallPolicy',
    components: {
        ContentTitle,
        FunctionBox
    },
    data() {
        return {
            MajorCate: 'Request',
            MiddleCate: 'Firewall Policy',
        }
    },
}
</script>
