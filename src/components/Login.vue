<template>
<br><br><br><br>
<h1 style="font-weight:bold;">Seggle</h1>
<form action="">
    <div class="register">
		<label for="id"></label>
		<input type="text" id="id" v-model="id" placeholder="아이디" />
	</div>

    <div class="register">
		<label for="password"></label>
		<input type="password" id="password" v-model="password" placeholder="비밀번호" />
	</div>
<button type="submit" style="margin : 30px; width:300px;height:50px" >로그인</button>

</form>

</template>

<script>

export default{ 
name:'',
components:{
},
data(){
    return{
       
};
    },
    setup(){},
    created(){},
    mounted(){},
    unmounted(){},
    methods:{
        
    }
}
</script>

<style>
.register{
    
}
</style>