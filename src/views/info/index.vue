<template>
  <div class='Detail'>
    <header>山东省基础教育学历证书查询结果</header>
    <el-card class="box-card">
      <!-- 学生信息 -->
      <div class="stu">
        <div>
          <el-image
            style="width: 100px; height: 120px; vertical-align: middle;"
            :src="userInfo.stu_url"></el-image>
        </div>
        <div class="stu_detail">
          <p>{{userInfo.stu_name}}</p>
          <i class="el-icon-s-custom"/>
          <span>{{userInfo.stu_gender=0? "女": "男"}}</span>
          <i class="el-icon-timer"/>
          <span>{{userInfo.stu_time}}</span>
        </div>
      </div>
      <!-- 学信详情 -->
      <div class="detail">
        <div v-for="(item,index) in detail_list" :key='index' class="it">
          <span class="l">{{item.label}}</span>
          <span class="r">{{item.item}}</span>
        </div>
      </div>
      <!-- 成绩列表 -->

      <p><i class="el-icon-edit-outline"/>
        学业成绩信息</p>
      <div class="tables">
        <el-table border stripe :data="scoreList" 
        :header-cell-style="{'backgroundColor':'rgb(95,151,252)',color:'white'}">
            <el-table-column
                      prop="sub"
                      label="科目"
                      min-width="33%">
            </el-table-column>
            <el-table-column
                      prop="score"
                      label="学分"
                      min-width="33%">
            </el-table-column>
            <el-table-column
                      prop="status"
                      min-width="33%"
                      label="学考">
            </el-table-column>
        </el-table>
      </div>
      <div class="footer">
        山东教育厅主办/ 浪潮云提供技术支持
      </div>
    </el-card>
  </div>
</template>

<script>
// import axios from 'axios'
export default {
  data () {
    return {
      detail_list:[
        {label: '入学时间',item: '2017年9月'},
        {label: '毕（结）业日期',item: '2017年9月'},
        {label: '学校名称',item: '济南第一中学'},
        {label: '学段',item: '高中'},
        {label: '学制',item: '3年'},
        {label: '毕（结）业',item: '毕业'},
        {label: '校长姓名',item: '李奇'},
        {label: '证书编号',item: '20202020201001'},
      ],
      scoreList: [
        {sub:'语文',score:'12',status:'合格'},
        {sub:'数学',score:'12',status:'合格'},
        {sub:'外语',score:'12',status:'合格'},
        {sub:'思想政治',score:'12',status:'合格'},
        {sub:'历史',score:'12',status:'合格'},
        {sub:'地理',score:'12',status:'合格'},
        {sub:'化学',score:'12',status:'合格'},
        {sub:'信息技术',score:'12',status:'合格'},
        {sub:'通用技术',score:'12',status:'合格'},
        {sub:'体育',score:'12',status:'合格'},
        {sub:'艺术',score:'12',status:'合格'},
      ],
      userInfo: {
        stu_time:'2020-20-20',
        stu_name:'za',
        stu_gander: '0',
        stu_url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg'
      }
    }
  },
  create() {
    this.getinfo()
  },
  methods: {
    getinfo() {
      this.$api.get("xlzsInfo",{
          zsbh:'17370682000',mx:'谭勤之'
        },
        (data)=>{
          console.log(data);
          this.userInfo.stu_name = data.xm
        }
      )
      // this.getUser(),
      // this.getScore(),
      // this.getDetai()
    },
  }
}
</script>

<style scoped >
.Detail {
  width: 60%;
  height: 600px;
  margin: 0 auto;
}
.Detail header {
    text-align: center;
    width: 100%;
    height: 60px;
    line-height: 60px;
    margin: 0 auto;
}
.stu {
  display: flex;
  background-color: rgb(232,242,254);
}
.stu_detail {
   margin-left: 20px;
}
.stu_detail span {
    margin-right: 20px;
}
.it{
  display: flex;
  margin: 15px 0;
  border-bottom: 1px solid #ccc;
  box-sizing:border-box;
  padding-bottom:5px;
}
.it span{
    flex:1;
    font-size: 12px;
}
.it span:nth-child(1) {
    text-align: left;
    color: rgb(118,118,119);
}
.it span:nth-child(2) {
    text-align: right;
    color: rgb(53,54,55);
}
/deep/.el-table .cell, .el-table th div, 
.el-table--border td:first-child .cell, 
.el-table--border th:first-child .cell {
  text-align: center;
}
.tables {
  width: 600px;
  margin: 0 auto;
}
.footer {
  text-align: center;
  width: 400px;
  color: #ccc;
  font-size: 12px;
  margin: 0 auto;
  margin-top: 20px;
}








</style>