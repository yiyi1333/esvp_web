import axios from 'axios'
import querystring from "querystring";

const instance = axios.create({
    // 公共配置
    timeout: 5000,
})
// 请求拦截器
instance.interceptors.request.use(config => {
    // 发送请求前做些什么
    if (config.methods === 'post') {
        config.data = querystring.stringify(config.data)
    }
    return config
}, error => {
    // 请求错误做些什么
    return Promise.reject(error)
})

// 响应拦截器
instance.interceptors.response.use(response => {
    // 响应数据做些什么
    return response.status === 200 ? Promise.resolve(response) : Promise.reject(response)
}, error => {
    // 响应错误做些什么
    const {response} = error
    errorHandle(response.status, response.info)
    return Promise.reject(error)
})

const errorHandle = (status, info) => {
// 状态码判断
    switch (status) {
        case 400:
            console.log('错误请求')
            break
        case 401:
            console.log('服务器认证失败')
            break
        case 403:
            console.log('拒绝访问')
            break
        case 404:
            console.log('请求错误,未找到该资源')
            break
        case 500:
            console.log('服务器端出错')
            break
        case 501:
            console.log('网络未实现')
            break
        default:
            console.log(info)
            break
    }
}

export default instance


