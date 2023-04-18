import axios from "@/utils/request"

const api = {
    // 测试接口
    demo() {
        return axios.post('/api/modeldemo/vgg/demo', {
            imageUrl: "demo",
            model: "vgg19"
        })
    }
}

export default api