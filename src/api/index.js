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
    },
    authentication(id, realname, idcard, phone, sex, birthday) {
        return axios.post('/api/esvp/user/authentication', {
            id: id,
            realname: realname,
            idcard: idcard,
            phone: phone,
            sex: sex,
            birthday: birthday
        })
    },
    // 保存用户信息
    saveInfo(account) {
        return axios.post('/api/esvp/user/saveUserInfo', {
            id: account.id,
            phone: account.phone,
            birthday: account.birthday,
            sex: account.sex
        })
    },
    // 请求签名图像列表
    getGeniuneSignatureList(id) {
        return axios.post('/api/esvp/image/getGeniuneSignatureList', {
            userId: id
        })
    },
    // 删除某张图片
    deleteGeniuneSignature(id) {
        return axios.post('/api/esvp/image/deleteGeniuneSignature', {
            id: id
        })
    },
    // 上传图片
    uploadGeniuneSignature(id, url) {
        return axios.post('/api/esvp/image/uploadGeniuneSignature', {
            userId: id,
            url: url
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