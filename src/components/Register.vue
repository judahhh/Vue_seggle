<template>
<div>
    <br><br><br>
    <h1 style="font-weight:bold;">Seggle에 오신걸 환영합니다</h1>
    <br><br><br>
</div>

<div class="container">
		<form @submit.prevent="submitForm">

            
    
			<div class="register">
				<label for="id">아이디</label>
				<input type="text" id="id" v-model="id"  class="form-control-lg" />
			</div>
			<div class="register">
				<label for="name">이름</label>
				<input type="text" id="name" v-model="name" class="form-control-lg"/>
			</div>
            <div class="register">
				<label for="email">email</label>
				<input type="text" id="email" v-model="email" class="form-control-lg"/>
			</div>      


			<div class="register">
				<label for="password">비밀번호</label>
				<input type="password" id="password" v-model="password"  class="form-control-lg"/>
			</div>
			<div class="register">
				<label for="passwordConfirm">비밀번호 확인</label>
				<input type="password" id="passwordConfirm" v-model="passwordConfirm" class="form-control-lg" />
			</div>
			
			
			<button type="submit" style="margin : 30px">가입하기</button>
		</form>
	</div>

</template>

<script>

export default{ 
name:'',
components:{
},
data(){
    return{

            email: '',
			name: '',
			password: '',
			passwordConfirm: '',
			position: '',
			teamName: '',
};
    },
    setup(){},
    created(){},
    mounted(){},
    unmounted(){},
    methods:{
        submitForm() {
			console.log('dd');
		},
    }
}
</script>

<style>
.register{
    margin: 20px;
}
input{
    margin:20px
}
</style>