import request from "@/utils/request";

export function getUserApi(username) {
    return request.get('/user/getUser', {params: {username: username}})
}

export function getFriendsApi(username) {
    return request.get('/user/getFriends', {params: {username: username}})
}

export function getGroupsApi(username) {
    return request.get('/user/getGroups', {params: {username: username}})
}

export function getListMessageApi(username) {
    return request.get('/user/getListMessage', {params: {username: username}})
}

export function userLoginApi(user) {
    return request.post('/user/login', user)
}

export function userRegisterApi(user) {
    return request.post('/user/createUser', user)
}
