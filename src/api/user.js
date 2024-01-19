import request from "@/utils/request";
export function getUserInfoApi(){
    return request.get('/api/auth/getUserInfo')
}

export function userLogin(user){
    return request.post('/user/login',user)
}
