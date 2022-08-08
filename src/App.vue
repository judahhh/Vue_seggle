<template >
<Navbar/>

<router-view></router-view>
<!-- 라우터뷰 태그도 써줘야지 routerlink태그를 눌렀을때 
어떤 부분에 컴포넌트를 보여줄지 알 수 있음 -->
</template>

<script>
import Navbar from './components/Navbar.vue';
import axios from 'axios';

export default {
  name: 'App',
  components: {  
    Navbar:Navbar,
  
  }
  , 
  methods: {
   
   },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: black;
  margin-left: 100px;
  margin-right: 100px;
 /* overflow-x: hidden; */
 /* 이걸 하면 갑자기 이미지 크기가 줄어듦 */
}



</style>
