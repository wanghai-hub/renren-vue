<template>
  <div class="Login" >
    <img src="./2.png" class="banner" style="vertical-align: middle;">
    <el-card class="box-card">
      <el-form :model="form" ref="form" :rules="rules" label-width="80px" label-position="left">
        <el-form-item label="证书编号" prop='num'>
          <el-input class="put" v-model="form.num" clearable placeholder=学历证书或者学历证书编号></el-input>
        </el-form-item>

        <el-form-item label="姓名" prop="name">
          <el-input class="put" v-model="form.name" clearable placeholder=学历证书或者学历证书姓名></el-input>
        </el-form-item>

         <el-form-item label="验证码" prop="code">
          <el-input class="put" v-model="form.code" clearable placeholder=点击获取图片验证码></el-input>
        </el-form-item>

         <el-button type="primary" @click.prevent="onSubmit('form')">查询</el-button>
         <span style="float:right;margin-top:30px;fontSize:14px">
           <i class="el-icon-document" style="fontSize:18px;color:rgb(95,151,252)"></i> 操作说明
        </span>
      </el-form>
    </el-card>
    <div class="footer">
      山东教育厅主办/ 浪潮云提供技术支持
    </div>
  </div>
</template>
<script>
import {getUUID} from '@/utils'
export default {
  mounted( ) {
    this.$api.get("xlzsInfo",{"zsbh":17370682000,"xm":"%E8%B0%AD%E5%8B%A4%E4%B9%8B"},(data)=>{
      console.log(data);
    })
  },
  data(){
    var validatePass =(rule,value,callback) => {
      if(!value) {
        return callback(new Error('证书编号不能为空'))
      }
      // 证书编号是否有其他规则
    }
    return{
       form: {
        name:'',
        num: '',
        code:''
      },
      rules: {
        name:[
          { required: true, message: '请输入您的姓名', trigger: 'blur' },
          { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ],
        num: [
          { required: true, message: '请输入您的证书编号', trigger: 'blur' },
          { validator:validatePass, trigger:'blur' }
        ],
        code :[
          { required: true, message: '请输入您的验证码', trigger: 'blur' },
        ]

      }
    }
  },
  methods : {
      onSubmit(form) {
        // this.$router.push('/detail')
         this.$refs[form].validate((valid) => {
           if(valid) {
             // 发请求拿权限

             //跳转页面
             this.$router.push('/detail')
           }
           else {
             return false
           }
         })
      }
  }
}
</script>

<style scoped lang="scss">
.Login {
  
  position: relative;
  width: 70%;
  margin: 0 auto
}
.banner {
  width: 100%;
}
.box-card {
  width: 100%;
  margin: 0 auto;
  box-sizing: border-box;
  padding: 0 2%;
}
.el-card {
  padding: 20px 0;
}
.el-form-item {
  border-bottom: 1px solid #ccc;
  // padding-bottom: 5px;
}

/deep/ .el-input--suffix .el-input__inner {
    border: none;
}

.el-button {
  display: block;
  width: 80%;
  margin: 0 auto;
  margin-top: 15%;
}

.footer {
  position: absolute;
  left: 50%;
  bottom: 0;
  color:rgb(145,146,147);
  transform: translate(-50%);
  font-size: 12px;
}
</style>