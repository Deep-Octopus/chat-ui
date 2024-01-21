import {getMessagesApi} from "@/api/message";

const state = {
    currentMessages: [],
}


const mutations = {
    INIT_MESSAGES(state, data) {
        console.log(data)
        let target = {...data.target}
        let msgs = []
        for (let i = 0; i < data.messages.length; i++) {
            let msg = {
                avatarUrl: target.avatarUrl,
                name: target.name,
                bias: data.messages[i].fromId == target.ID ? 'left' : 'right',
                content: data.messages[i].content,
                type: data.messages[i].type,
                dateTime: data.messages[i].CreatedAt,
                tags: [
                    //龙王，管理员
                ]
            }
            msgs.push(msg)
        }

        //按照时间排序
        msgs.sort((a, b) => new Date(a.dateTime) - new Date(b.dateTime));
        state.currentMessages = [...msgs]
    },
    INIT_NEW_MESSAGE(state, data) {
        let target = {...data.target}
        let msg = {
            avatarUrl: target.avatarUrl,
            name: target.name,
            bias: data.message.fromId == target.ID ? 'left' : 'right',
            content: data.message.content,
            type: data.message.type,
            dateTime: data.message.CreatedAt,
            tags: [
                //龙王，管理员
            ]
        }
        state.currentMessages.push({...msg})
    },

}

const actions = {
    getMessages(context, data) {
        let target = {...data.target}
        getMessagesApi(data.reqData).then(r => {
            if (r.code === 200) {
                context.commit("INIT_MESSAGES", {messages: [...r.data], target: {...target}})
            }
        })
    },
    addNewMessage(context, data) {
        let target = {...data.target}
        context.commit("INIT_NEW_MESSAGE", {message: {...data.message}, target: {...target}})
    },



}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}