
import axios from 'axios';
import message from "@/utils/message";
import router from "@/router";

const request = axios.create({
    // api的base_url
    baseURL: 'http://localhost:8081',
    // 请求头部
    headers: {'Content-Type': 'application/json'},
    // 请求超时时间
    timeout: 15000
});

// 添加请求拦截器
request.interceptors.request.use(
    config =>{
        // 在发送请求之前做些什么
        // config.headers['Access-Control-Allow-Origin'] = '*'; // 设置跨域头部
        // config.headers['Access-Control-Allow-Methods'] = 'GET, POST, PUT, DELETE, OPTIONS';
        // config.headers['Access-Control-Allow-Headers'] = 'Content-Type, Authorization'
        // 在每个请求中向服务器添加JWT令牌
        const jwtToken = localStorage.getItem('jwtToken');
        const username = localStorage.getItem('username');
        if (jwtToken !== '') {
            config.headers.Authorization = `Bearer ${jwtToken}`;
            config.headers.username = username
        }
        return config;
    },
    error =>  {
        // 处理请求错误
        return Promise.reject(error);
    }
);

// 添加响应拦截器
request.interceptors.response.use(
    response=> {
        console.log(response)
        if (response.data.code === 401) {
            message.error("未携带有效token或已过期")
            router.replace('/login')
        }
        if (response.status !== 200){
            message.error(response.data.msg)
        }
        // 对响应数据做些什么
        return response.data;
    },
    error =>  {
        console.error(error)
        return Promise.reject(error)
    }
);

export default request;
