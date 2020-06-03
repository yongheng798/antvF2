<template>
    
</template>

<script>
export default {
    name: '',
    data(){
        return{
            lists: [],
            totalNum: '',
            currentPage: '',
            totalPageNum: '',//总条数
            rows: 1,//总条数
            currentIndex: 1,
            obj: {
                titile:'',
                user: '',
                dates: ''
            }
        }
    },
    mounted(){

    },
    methods:{
        getList(){
            axios();
        },
        // 使用vue里面的过滤器对数组进行增删改查
        addList(){
            if(!this.obj.name || )
            // 末尾添加用push()   列表前添加用unshift()
            this.lists.push({
                name: this.name,
                age: this.age
            });
        },
        // 编辑
        editList(list){
            // 编辑对应的就是数组的替换
            this.editDetail = {
                title: list.titile,
                user: list.user,
                id: list.id
            }
            this.flag = true; //弹层显示
        },
        // 删除
        delLists(i){
            this.lists.splice(i,1); //i 位置 1个数            
        },
        // 重置
        resetLists(){
            this.name = '';
        },
        getCurrentIndex(i){
            this.currentIndex = i;  //当前索引
        },
        updateList(){
            for(var i=0; i<this.lists.length; i++){
                if(this.lists[i].id ===this.editDetail.id){
                    this.list[i] = this.editDetail;
                    this.flag = false;
                }
            }
        }
    },
    filters:{

    }
}
</script>