<template>
    <div>
        <button @click='show=true'>显示弹窗</button>
        <div v-if='show' class='popup'>
            我是弹窗
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            show:false
        }
    }
}
</script>

<style>
.popup{
    width: 500px;
    height: 250px;
    line-height: 250px;
    margin: 0 auto;
    background: yellow;
    text-align: center;
    opacity: 1;
    transform: translateY(0);
    -webkit-transform: translateY(0);
    transition: all 5s ease-in;
    -webkit-transition: all 5s ease-in;
}
</style>


