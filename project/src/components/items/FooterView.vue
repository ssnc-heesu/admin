<template>
    <h2 class="content-tit">
        <span>{{ MajorCate }}</span>
        <span>{{ MiddleCate }}</span>
    </h2>
</template>

<style scoped>
    .overlay{
        display: none;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: var(--overlay);
        z-index: 10;
    }
</style>

<script>
export default {
    name: 'OverLay',
    props: {
        MajorCate:{ type:String },
        MiddleCate:{ type:String },
    },
    components: {
    },
}
</script>
