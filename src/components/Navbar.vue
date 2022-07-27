<template>
  <!-- Navbar -->
<nav class="navbar navbar-expand-lg navbar-light ">
  <div class="container-fluid">
    <router-link to="/Home"><a class="navbar-brand" href="#">Seggle</a></router-link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse justify-content-end " id="navbarNavDropdown">
      <ul class="navbar-nav ">
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle active" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            문제
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <li><a class="dropdown-item" href="#">대회</a></li>
            <li><a class="dropdown-item" href="#">수업 및 시험</a></li>
            
          </ul>
        </li>
        <li class="nav-item">
          <router-link to="/Suggestion" ><a class="nav-link" aria-current="page" href="#">건의게시판</a></router-link>
        </li>
        <li class="nav-item">
          <router-link to="/Notice"><a class="nav-link" href="#">공지사항</a></router-link>
        </li>
        <li class="nav-item">
        <router-link to="/Faq" ><a class="nav-link" href="#">FAQ</a></router-link>
        </li>
        
      </ul>
      <button type="button" class="">로그인</button>
      <button type="button" class="">회원가입</button>
    </div>
  </div>
</nav>
<!-- <router-view></router-view> -->
</template>

<script>

import Faq from './Faq.vue';
import Notice from './Notice.vue';
import Suggestion from './suggestion_board.vue';

export default {
name:'Navbar',
components:{
  Faq:Faq,
  Notice:Notice,
  Suggestion:Suggestion,
}
}
</script>

<style>
button{
  margin:5px;
  padding: 6px 10px;
  border-radius: 30px;
  color:white;
  background-color: black;
  font-weight: bold;
}

a{text-decoration: none !important;}
a:hover{
  font-weight: bold;
  color :black;

}
</style>