<template>
    <h2 class="content-tit">
        <span v-for="cate in CateName" :key="cate">{{ cate }}</span>
    </h2>
</template>

<style scoped>
.content-tit {
    margin-bottom: 48px;
    font-size: 18px;
    font-weight: 800;
}
.content-tit > * {
    display: inline-block;
}
.content-tit > * + *::before {
    content: '';
    display: inline-block;
    vertical-align: middle;
    width: 6px;
    height: 6px;
    margin: -2px 14px 0 10px;
    border: solid var(--mainTxt);
    border-width: 2px 2px 0 0;
    transform: rotate(45deg);
}
</style>

<script>
export default {
    name: 'ContentTitle',
    props: {
        CateName: { type:Array }
    },
}
</script>
