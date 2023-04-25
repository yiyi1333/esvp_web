import axios from "@/utils/request"

const api = {
    // 测试接口
    demo() {
        return axios.post('/api/modeldemo/vgg/demo', {
            imageUrl: "demo",
            model: "vgg19"
        })
    },

    vggdemo(imageUrl, model) {
        return axios.post('/api/modeldemo/vgg/vggdemo', {
            imageUrl: imageUrl,
            model: model
        })
    },

    nerdemo(text) {
        return axios.post('/api/modeldemo/vgg/nerdemo', {
            text: text
        })
    }
}

export default api