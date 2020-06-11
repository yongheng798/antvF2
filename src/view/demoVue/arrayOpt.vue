<template>
  <div class="container">
    <div class="search">
      <ul>
        <li>
          标题：
          <input type="text" v-model="title" placeholder="请输入标题" />
        </li>
        <li>
          作者：
          <input type="text" v-model="author" placeholder="请输入作者" />
        </li>
        <li>
          时间：
          <input type="text" v-model="time" placeholder="请输入时间" />
        </li>
      </ul>
    </div>
    <div class="data-list-box">
      <div class="data-title">
        <ul>
          <li>ID</li>
        </ul>
      </div>
      <div class="data-list">
        <ul>
          <li v-for="item in dataList" :key="item.id">{{item.id}}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'arrayOpt',
  data(){
    return{
      dataList:[
        {id:1,title:'标题1',author:'小丸子',time:'2020-01-05'},
        {id:2,title:'标题2',author:'小丸aa子',time:'2020-02-05'},
        {id:3,title:'标题3',author:'aaaa',time:'2020-03-05'}
      ],
      dataObj:{
        title: '',
        author: '',
        time: ''
      },
      editData:{},
      flag: false
    }
  },
  methods: {
    add(){
      let {title,author,time} = this.dataObj
      if(title || !author || !time) return
      this.flag = true
      let _id = Math.max(...this.dataList.map((item)=>item.id)) + 1
      this.dataList.unshift({
        title:title,
        author:author,
        time: time,
        id: _id
      })
      this.dataObj = {}
    },
    del(i){
      this.dataList.splice(i,1)
    },
    edit(v){
      this.flag = true
      let {title,author,time,id} = v
      this.editData = {
        title:title,
        author:author,
        time: time,
        id: _id
      }
    },
    update(){
      for(let i = 0; i < this.dataList.length; i++){
        if(this.dataList[i].id===this.editData.id){
          this.dataList[i] = this.editData
          this.flag = false
        }
      }
    }
  },
}
</script>

<style scoped>
</style>