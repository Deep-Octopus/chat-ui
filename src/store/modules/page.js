import message from "@/utils/message";

const state = {

}


const mutations = {
    // CONFIG(state, data) {
    //     let config = parseJson(data)
    //     state.form = config.form
    //     state.fields = config.fields
    //     state.rules = config.rules
    // },
    INIT_SUCCESS(state, data) {
        state.allData = data;
        message.success("数据获取成功")
    },
}

const actions = {
    // init(context) {
    //     initEntity(state.tableCurrentEntity).then(resp => {
    //         if (resp.status === 200) {
    //             context.commit("INIT_SUCCESS", resp.data)
    //         }
    //     }).catch(err => {
    //         console.error(err)
    //         message.error("添加失败")
    //     })
    // },

}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}