<template>

<br><br><br><br>
<h1 style="float:left; margin-left:40px;font-weight:bold;">
건의게시판
</h1>

<br><br><br><br>
  <table class="table">
      <thead>
      <tr class="table-dark">
        <th scope="col">No</th>
        <th scope="col">제목</th>
        <th scope="col">작성일</th>
        <th scope="col">작성자</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(row, idx) in list" :key="idx">
        <td>{{ row.idx }}</td>
        <td><a v-on:click="fnView(`${row.idx}`)">{{ row.title }}</a></td>
        <td>{{row.created_at}}</td>
        <td>{{row.author}}</td>
      </tr>
      </tbody>
    </table>
</template>

<script>

export default{ 
name:'Suggestion',
components:{
    
},
data(){
    return{
          requestBody: {}, //리스트 페이지 데이터전송
      list: {}, //리스트 데이터
      no: '', //게시판 숫자처리
      paging: {
        block: 0,
        end_page: 0,
        next_block: 0,
        page: 0,
        page_size: 0,
        prev_block: 0,
        start_index: 0,
        start_page: 0,
        total_block_cnt: 0,
        total_list_cnt: 0,
        total_page_cnt: 0,
      }, //페이징 데이터
      page: this.$route.query.page ? this.$route.query.page : 1,
      size: this.$route.query.size ? this.$route.query.size : 10,
      keyword: this.$route.query.keyword,
      paginavigation: function () { //페이징 처리 for문 커스텀
        let pageNumber = [] //;
        let start_page = this.paging.start_page;
        let end_page = this.paging.end_page;
        for (let i = start_page; i <= end_page; i++) pageNumber.push(i);
        return pageNumber;
      }
};
    },
    setup(){},
    created(){},
    mounted(){
         this.fnGetList()
    },
    unmounted(){},
    methods:{
        fnGetList() {
      this.list = [
        {
            "idx":1,
            "title": "제목1",
            "author": "작성자1",
            "created_at": "작성일시1"
        },
        {
            "idx":2,
            "title": "제목2",
            "author": "작성자2",
            "created_at": "작성일시2"
        },
        {
            "idx":3,
            "title": "제목3",
            "author": "작성자3",
            "created_at": "작성일시3"
        }
      ]
    }
    }
}
</script>

<style>
</style>