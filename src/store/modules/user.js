import message from "@/utils/message";
import {userLogin} from "@/api/user";

const state = {
    user:{
        username:""
    }
}



const mutations = {
    LOGIN_SUCCESS(state,data) {
        console.log(data)
        // state.user.auth = data.data.user_type
        state.user.username = data.username

        localStorage.setItem('jwtToken',data.token)
        // localStorage.setItem('user',JSON.stringify(state.user))

        data.router.replace('/home')
        message.success("登录成功")
    },
}

const actions = {
    login(context, data) {
        let user = data.form
        let router = data.router
        userLogin(user).then(resp => {
            console.log(resp)
            if (resp.code === 200) {
                context.commit("LOGIN_SUCCESS",{token:resp.data,username:user.username,router:router})
            }else if (resp.status === 404){
                message.error("账号不存在")
            }else if (resp.status === 401){
                message.error("密码错误")
            } else{
                message.error(resp.message)
            }
        })
    },

}

export default{
    namespaced : true,
    state,
    mutations,
    actions
}