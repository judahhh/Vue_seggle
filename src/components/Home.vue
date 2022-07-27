<template>
<div class="wrap">
    <div class="HomeImage">
    <img src="../assets/background-image.png" alt="홈이미지">
    </div>

    <div class="HomeText">
        <h1 style="font-weight:bold;">Welcome to Seggle!</h1>
        <p>세종인을 위한 AI 대회가 시작되었어요!</p>
    </div>
</div>


</template>

<script>
import Navbar from './Navbar.vue';
export default{ 
name:'Home',
components:{
    Navbar:Navbar,
},
data(){
    return{
};
    },
    setup(){},
    created(){},
    mounted(){},
    unmounted(){},
    methods:{}
}
</script>

<style>
img{
    width:100vw;
    height: 330px;
   transform: translateX(-100px);
}
.wrap{
    position:relative;

}
.HomeText{
    position:absolute;
    top:50% ;
    left: 50%;
    transform: translate(-50%, -50%); 
    color: white;
}
</style>