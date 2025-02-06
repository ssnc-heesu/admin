<template>
      <div class="overlay" :data-name="dataName">{{ this.dataName }}</div>
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
        dataName:{ type:String },
    },
    components: {
    }
}
</script>
