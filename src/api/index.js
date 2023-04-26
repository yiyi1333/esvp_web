import axios from "@/utils/request"

const api = {
    // 登录接口
    login(username, password) {
        return axios.post('/api/esvp/user/login', {
            email: username,
            password: password
        })
    },
    // 注册接口
    getRegisterVerificationCode(email) {
        return axios.post('/api/esvp/email/sendVerifyCode', {
            email: email
        })
    },
    register(email, password, verifyCode) {
        return axios.post('/api/esvp/user/register', {
            email: email,
            password: password,
            verifyCode: verifyCode
        })
    }

    // 测试接口
    /*    demo() {
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
        }*/

}

export default api