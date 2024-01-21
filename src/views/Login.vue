<template>
  <div>
    <background count="500"></background>
    <div class="page">
      <div class="main-box">
        <div :class="['container', 'container-register', { 'is-txl': isLogin }]">
          <el-form ref="registerForm" :model="registerForm" :rules="registerFormRules">
            <h2 class="title">Create Account</h2>
            <div style="height: 15px"></div>
            <!--          <span class="text">or use email for registration</span>-->
            <el-form-item label="NickName" prop="name">
              <el-input v-model="registerForm.name" placeholder="NickName"></el-input>
            </el-form-item>
<!--            <el-form-item label="Username" prop="username">-->
<!--              <el-input v-model="registerForm.username" placeholder="Username"></el-input>-->
<!--            </el-form-item>-->
            <el-form-item label="Email" prop="email">
              <el-input v-model="registerForm.email" placeholder="Email"></el-input>
            </el-form-item>
            <el-form-item label="Password" prop="password">
              <el-input
                  v-model="registerForm.password"
                  placeholder="Password"
                  show-password
              ></el-input>
            </el-form-item>
            <el-form-item label="Confirm Password" prop="confirmPassword">
              <el-input
                  v-model="registerForm.confirmPassword"
                  placeholder="Confirm Password"
                  show-password
              ></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="handleRegister" :disabled="registerButtonDisabled">{{ registerButtonText }}</el-button>
            </el-form-item>
          </el-form>
        </div>
        <div :class="['container', 'container-login', { 'is-txl is-z200': isLogin }]">
          <el-form ref="loginForm" :model="loginForm" :rules="loginFormRules">
            <h2 class="title" style="font-size: 3rem;margin-bottom: 50px">Sign in to GChat</h2>
            <!--          <span class="text"></span>-->
            <div style="height: 15px"></div>
            <el-form-item label="Username" prop="username">
              <el-input
                  v-model="loginForm.username"
                  placeholder="Username"
              ></el-input>
            </el-form-item>
            <el-form-item label="Password" prop="password">
              <el-input
                  v-model="loginForm.password"
                  placeholder="Password"
                  show-password
              ></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="handleLogin" >Login</el-button>
            </el-form-item>
          </el-form>
        </div>
        <div :class="['switch', { login: isLogin }]">
          <div class="switch__circle"></div>
          <div class="switch__circle switch__circle_top"></div>
          <div class="switch__container">
            <h2>{{ isLogin ? 'Hello Friend !' : 'Welcome Back !' }}</h2>
            <!--          <p>-->
            <!--            {{-->
            <!--              isLogin-->
            <!--                  ? 'Enter your personal details and start journey with us'-->
            <!--                  : 'To keep connected with us please login with your personal info'-->
            <!--            }}-->
            <!--          </p>-->

            <!--          暂时还没想到注册功能有什么用，先封印起来，想到了再启用-->
                      <el-button type="primary" @click="$store.state.user.isLogin = !$store.state.user.isLogin">{{ switchButtonText }}</el-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import message from "@/utils/message";
import Background from "@/components/Background.vue";

export default {
  name:"LoginPage",
  components:{Background},
  data() {
    return {
      loginForm: {
        username: '111111',
        password: '123123',
      },
      registerForm: {
        name: '',
        // username:'',
        email: '',
        password: '',
        confirmPassword: '',
      },
      registerFormRules: {
        name: [
          { required: true, message: '请输入您的昵称', trigger: 'blur' },
          // { pattern: /^*{3-10}$/, message: '长度为3 ~ 10个字符', trigger: 'blur' }
        ],
        // username: [
        //   { required: true, message: '请输入您的用户名', trigger: 'blur' },
        //   { pattern: /^[0-9]{3-11}$/, message: '长度为3 ~ 10个字符', trigger: 'blur' }
        // ],
        email: [
          { required: true, message: '请输入电子邮箱地址', trigger: 'blur' },
          { type: 'email', message: '请输入有效的电子邮件地址', trigger: ['blur','change'] }
        ],
        password: [
          { required: true, message: '请输入您的密码', trigger: 'blur' },
          { pattern:/^[0-9]{6,10}$/, message: '至少1个字母和1个数字，且长度不能少于8个字符,可以包含特殊字符', trigger: 'blur' }
          // { pattern:/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,20}$/, message: '至少1个字母和1个数字，且长度不能少于8个字符,可以包含特殊字符', trigger: 'blur' }
        ],
        confirmPassword: [
          { required: true, message: '请再次输入您的密码', trigger: 'blur' },
          { validator: (rule, value, callback) => {
              if (value === '') {
                callback(message.warning('请在此输入您的密码'))
              } else if (value !== this.registerForm.password) {
                callback(message.warning('两次输入的密码'))
              } else {
                callback()
              }
            },
            trigger: 'blur'
          }
        ]
      },
      loginFormRules: {
        username: [
          { required: true, message: 'Please input your email or username', trigger: 'blur' }
        ],
        password: [
          { required: true, message: 'Please input your password', trigger: 'blur' },
          { min: 6, max: 20, message: 'Password length should be between 6 to 20 characters', trigger: 'blur' }
        ]
      },
      registerButtonDisabled: false,
      registerButtonTitle: 'Register',
      countdownTimer: null,
      countdownSeconds: 60
    }
  },
  computed: {
    isLogin(){
      return this.$store.state.user.isLogin
    },
    registerButtonText() {
      return this.registerButtonDisabled ? `Resend (${this.countdownSeconds}s)` : 'Register'
    },
    switchButtonText() {
      return this.isLogin ? 'Create a new account' : 'Login to your account'
    }
  },
  watch: {
    countdownSeconds(newValue) {
      if (newValue <= 0) {
        clearInterval(this.countdownTimer)
        this.countdownTimer = null
        this.registerButtonTitle = 'Resend'
        this.registerButtonDisabled = false
      }
    }
  },
  methods: {
    handleRegister() {
      this.$refs.registerForm.validate(valid => {
        if (valid) {

          // this.registerButtonDisabled = true
          // this.registerButtonTitle = `Resend (${this.countdownSeconds}s)`
          // this.countdownTimer = setInterval(() => {
          //   this.countdownSeconds--
          // }, 1000)
          this.$store.dispatch("user/register",{form:this.registerForm,router:this.$router})

        }else {
          message.warning("输入不符合格式")
        }


      })
    },
    handleLogin() {
      this.$refs.loginForm.validate(valid => {
        if (valid) {
         this.$store.dispatch("user/login",{form:this.loginForm,router:this.$router})
        }else{
          message.warning("输入不符合格式")
        }
      })

    },


  },
  mounted() {
    window.localStorage.clear()
  },
  beforeDestroy() {
    if (this.countdownTimer) {
      clearInterval(this.countdownTimer)
      this.countdownTimer = null
    }
  },

}
</script>

<style lang="less" scoped>
.page{
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);;
}
.main-box {
  position: relative;
  margin: auto;
  width: 1000px;
  min-width: 1000px;
  min-height: 600px;
  height: 600px;
  padding: 25px;
  background-color: #ecf0f3;
  box-shadow: 10px 10px 10px #d1d9e6, -10px -10px 10px #f9f9f9;
  border-radius: 12px;
  overflow: hidden;
  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0;
    width: 600px;
    height: 100%;
    padding: 25px;
    background-color: #ecf0f3;
    transition: all 1.25s;
    el-form {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      width: 100%;
      height: 100%;
      color: #a0a5a8;
      .title {
        font-size: 34px;
        font-weight: 700;
        line-height: 3;
        color: #181818;
      }
      .text {
        margin-top: 30px;
        margin-bottom: 12px;
      }
      /deep/ .el-input__inner {
        width: 350px;
        height: 40px;
        margin: 4px 0;
        padding-left: 25px;
        font-size: 13px;
        letter-spacing: 0.15px;
        border: none;
        outline: none;
        // font-family: 'Montserrat', sans-serif;
        background-color: #ecf0f3;
        transition: 0.25s ease;
        border-radius: 8px;
        box-shadow: inset 2px 2px 4px #d1d9e6, inset -2px -2px 4px #f9f9f9;
        &::placeholder {
          color: #a0a5a8;
        }
      }
    }
  }
  .container-register {
    z-index: 100;
    left: calc(100% - 600px);
  }
  .container-login {
    left: calc(100% - 600px);
    z-index: 0;
  }
  .is-txl {
    left: 0;
    transition: 1.25s;
    transform-origin: right;
  }
  .is-z200 {
    z-index: 200;
    transition: 1.25s;
  }
  .switch {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 400px;
    padding: 50px;
    z-index: 200;
    transition: 1.25s;
    background-color: #ecf0f3;
    overflow: hidden;
    box-shadow: 4px 4px 10px #d1d9e6, -4px -4px 10px #f9f9f9;
    color: #a0a5a8;
    .switch__circle {
      position: absolute;
      width: 500px;
      height: 500px;
      border-radius: 50%;
      background-color: #ecf0f3;
      box-shadow: inset 8px 8px 12px #d1d9e6, inset -8px -8px 12px #f9f9f9;
      bottom: -60%;
      left: -60%;
      transition: 1.25s;
    }
    .switch__circle_top {
      top: -30%;
      left: 60%;
      width: 300px;
      height: 300px;
    }
    .switch__container {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      position: absolute;
      width: 400px;
      padding: 50px 55px;
      transition: 1.25s;
      h2 {
        font-size: 34px;
        font-weight: 700;
        line-height: 3;
        color: #181818;
      }
      p {
        font-size: 14px;
        letter-spacing: 0.25px;
        text-align: center;
        line-height: 1.6;
      }
    }
  }
  .login {
    left: calc(100% - 400px);
    .switch__circle {
      left: 0;
    }
  }
  .primary-btn {
    width: 180px;
    height: 50px;
    border-radius: 25px;
    margin-top: 50px;
    text-align: center;
    line-height: 50px;
    font-size: 14px;
    letter-spacing: 2px;
    background-color: #4b70e2;
    color: #f9f9f9;
    cursor: pointer;
    box-shadow: 8px 8px 16px #d1d9e6, -8px -8px 16px #f9f9f9;
    &:hover {
      box-shadow: 4px 4px 6px 0 rgb(255 255 255 / 50%),
      -4px -4px 6px 0 rgb(116 125 136 / 50%),
      inset -4px -4px 6px 0 rgb(255 255 255 / 20%),
      inset 4px 4px 6px 0 rgb(0 0 0 / 40%);
    }
  }
}
</style>

