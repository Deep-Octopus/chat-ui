import message from "@/utils/message";
import {getFriendsApi, getGroupsApi, getListMessageApi, getUserApi, userLoginApi, userRegisterApi} from "@/api/user";
import notification from "@/utils/notification";

const state = {
    user: {
        username: ""
    },
    friends: [],
    groups: [],
    listMessage: [],
    isLogin: true,
    currentContactTarget: null,
    onContact: false,

    websocket: null, // WebSocket对象
    reconnectInterval: 10000, // 重连间隔时间（毫秒）
    heartbeatInterval: null, // 心跳定时器

    message: '',

}


const mutations = {
    LOGIN_SUCCESS(state, data) {
        state.user = data.user

        localStorage.setItem('jwtToken', data.token)
        localStorage.setItem("username", data.user.username)

        data.router.replace('/main')
        message.success("登录成功")
    },
    REGISTER_SUCCESS(state, data) {
        state.isLogin = true
        notification.success("注册成功", "您的用户名为：" + data.username)
    },
    UPDATE_LIST_MESSAGE(state, data) {
        // ID
        // Abstract       string    `json:"abstract"`
        // Datetime       time.Time `json:"datetime"`
        // NumOfUnReadMsg uint      `json:"numOfUnReadMsg"`
        let fromId = data.message.fromId
        //找到ListMessage
        state.listMessage.forEach(lm => {
            if (lm.ID === fromId && !lm.isGroup) {
                lm.abstract = data.message.content.length > 15 ? data.message.content.substring(0, 15) : data.message.content
                if (data.message.targetId === state.user.ID && (!state.currentContactTarget|| (state.currentContactTarget && state.currentContactTarget.ID !==fromId))){
                    lm.numOfUnReadMsg++
                }
                lm.datetime = new Date().toUTCString()
            }
        })
    },
}

const actions = {
    login(context, data) {
        let user = data.form
        let router = data.router
        userLoginApi(user).then(resp => {
            if (resp.code === 200) {
                context.commit("LOGIN_SUCCESS", {token: resp.data.identity, user: resp.data, router: router})
            } else if (resp.status === 404) {
                message.error("账号不存在")
            } else if (resp.status === 401) {
                message.error("密码错误")
            } else {
                message.error(resp.message)
            }
        })
    },
    register(context, data) {
        let user = data.form
        let router = data.router
        userRegisterApi(user).then(resp => {
            console.log(resp)
            if (resp.code === 200) {
                context.commit("REGISTER_SUCCESS", {username: resp.data, router: router})
            } else if (resp.status === 404) {
                message.error("账号不存在")
            } else if (resp.status === 401) {
                message.error("密码错误")
            } else {
                message.error(resp.message)
            }
        })
    },
    getUser(context, data) {
        let router = data.router
        let username = window.localStorage.getItem("username")
        if (!username) {
            router.replace("/login")
            message.error("用户未登录")
        }
        state.user.username = username
        getUserApi(state.user.username).then(r => {
            if (r.code === 200) {
                state.user = r.data
                data.callback()
            }
        })
    },
    getFriends() {
        getFriendsApi(state.user.username).then(r => {
            if (r.code === 200) {
                state.friends = r.data
            }
        })
    },
    getGroups() {
        getGroupsApi(state.user.username).then(r => {
            if (r.code === 200) {
                state.groups = r.data
            }
        })
    },
    getListMessage() {
        getListMessageApi(state.user.username).then(r => {
            if (r.code === 200) {
                state.listMessage = r.data
            }
        })
    },

    //socket
    sendMessage(context, message) {
        if (state.websocket && state.websocket.readyState === WebSocket.OPEN) {
            state.websocket.send(JSON.stringify(message)); // 发送消息到WebSocket服务器
            state.message = ''
            context.dispatch("updateListMessage", {
                message: message
            }).then(r  => Promise.resolve(r))
        }
    },
    updateListMessage(context, data) {
        context.commit("UPDATE_LIST_MESSAGE", {message: {...data.message}})
    }


}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}