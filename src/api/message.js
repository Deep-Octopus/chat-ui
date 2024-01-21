import request from "@/utils/request";

export function getMessagesApi(contract){
    return request.post("/message/getMessages",contract)
}