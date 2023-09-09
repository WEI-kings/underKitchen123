<template>
    <div class="container">
        <div class="register">
            <h2>vivo后台管理系统</h2>
            <!-- 
                :model绑定表单数据
                因为form表单是根据model绑定数据来判断表单里面的数据，
                当你没有绑定时，form表单的数据始终为空
             -->
            <el-form :rules = rules :model="info" ref="formrules" label-width="100px">

                <el-form-item label="账号：" prop="username">
                    <el-input
                    class="input"
                    v-model="info.username"
                     placeholder="请输入账号"
                      clearable>
                        <template #prefix>
                            <svg class="icon">
                                <use xlink:href="#icon-zhanghao"></use>
                            </svg>
                        </template>
                    </el-input>
                </el-form-item>

                <el-form-item label="密码：" prop="password">
                    <el-input
                        type="password"
                        class="input"
                        v-model="info.password"
                        placeholder="请输入密码："
                        clearable>
                        <template #prefix>
                            <svg class="icon">
                                <use xlink:href="#icon-mima"></use>
                            </svg>
                        </template>
                    </el-input>
                </el-form-item>

                <el-form-item label="确认密码：" prop="rpassword">
                    <el-input
                        class="input"
                        type="password"
                        v-model="info.rpassword"
                        placeholder="请输入密码："
                        clearable>
                        <template #prefix>
                            <svg class="icon">
                                <use xlink:href="#icon-mima"></use>
                            </svg>
                        </template>
                    </el-input>
                </el-form-item>     

            </el-form>

            <button class="registerbtn" @click="submitForm(formrules)">注册</button>
            <router-link to="/register"><a href="#"><span class="register_register">已有账户，登录</span></a></router-link>
        </div>
    </div>
</template>


<script setup>
// vue2组件里面的data一定要是个函数
import {ref} from 'vue'
import {useRouter} from 'vue-router'
// 表单验证相关数据
const info = ref({username:'', password:''})

// 检查密码
const checkPassword = (rule,value,callback)=>{
        if(value !== info.value.password){
            callback(new Error('两次密码不一样'))
        }
        else{
            callback()
        }
    }

const rules = ref({
  username: [
    { required: true, message: '请输入账号', trigger: 'blur' },
    { min: 3, max:10, message: '账号长度为应为3~10位', trigger: 'blur' },
  ],
  password: [
    { required: true, message: '请输入密码', trigger: 'blur' },
    { min: 3, max: 10, message: '密码长度为3~10', trigger: 'blur' },
  ],
  rpassword: [
    { required: true, message: '请输入密码', trigger: 'blur' },
    { validator: checkPassword, trigger: 'blur' },
  ]
  })

  const router = useRouter()
  const formrules = ref(null)
  // 登录提交表单验证
  const submitForm =  (formEl) => {
  if (!formEl) return
   formEl.validate((valid, fields) => {
    if (valid) {
        //使用axios向后端发送请求
      let {username, password} = info.value;
      if(username ===  'admin' && password === '123456'){
        ElMessage({
            showClose: true,
            message: '注册成功',
            type:'success',
        })
        router.push('/login')
      }else{
        ElMessage({
            showClose: true,
            message: '账号或密码不正确',
            type:'warning',
        })
      }
    } else {
      console.log('error submit!', fields)
    }
  })
}

</script>


<style scoped>
.container {
    width: 100vw;
    height: 100vh;
    /* 背景图片 */
    background-image: url('https://img2.baidu.com/it/u=128383574,1194413516&fm=253&fmt=auto&app=120&f=JPEG?w=1422&h=800');
    /* 背景尺寸 */
    background-size: 100% 100%;
    /* 设置弹性 */
    display: flex;
    justify-content: center;
    align-items: center;
}

.register {
    width: 400px;
    box-sizing: border-box;
    padding: 20px 60px;
    background-color: rgb(255, 255, 255);
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 25px;
    /* 边框阴影 */
    box-shadow: 3px 2px 19px #ccc ;
    /* 透明度 */
    opacity:0.7;

}

.register h3 {
    /* 文字居中 */
    text-align: center;
    padding-bottom: 10px;
}

.icon {
    width: 20px;
    height: 20px;
}
.registerbtn{
    padding: 0 90px;
    height: 40px;
    border-radius: 25px;
    border: none;
    background-color: skyblue;
    color: white;
    font-size: 18px;
    /* 字体间距 */
    letter-spacing: 2px;
    text-align: center;
}
/* 防止出现clearable导致输入框长度变长 */
.register_button{
    width: 300px;
}
.register_register{
    color: skyblue;
    padding-left:168px;
}

</style>


