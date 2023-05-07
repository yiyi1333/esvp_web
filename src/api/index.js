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
    getForgedSignatureList(id) {
        return axios.post('/api/esvp/image/getForgedSignatureList', {
            userId: id
        })
    },
    // 删除某张图片
    deleteGeniuneSignature(id) {
        return axios.post('/api/esvp/image/deleteGeniuneSignature', {
            id: id
        })
    },
    deleteForgedSignature(id) {
        return axios.post('/api/esvp/image/deleteForgedSignature', {
            id: id
        })
    },
    // 上传图片
    uploadGeniuneSignature(id, url) {
        return axios.post('/api/esvp/image/uploadGeniuneSignature', {
            userId: id,
            url: url
        })
    },
    uploadForgedSignature(id, url) {
        return axios.post('/api/esvp/image/uploadForgedSignature', {
            userId: id,
            url: url
        })
    },

    // 生成授权码
    addAuthorizationCode(userid, name, day) {
        return axios.post('/api/esvp/authorizationCode/addAuthorizationCode', {
            userid: userid,
            name: name,
            day: day
        })
    },
    // 获取授权码列表
    getAuthorizationCodeList(userid) {
        return axios.post('/api/esvp/authorizationCode/getAuthorizationCodeList', {
            userid: userid
        })
    },
    // 删除授权码
    deleteAuthorizationCode(id) {
        return axios.post('/api/esvp/authorizationCode/deleteAuthorizationCode', {
            id: id
        })
    },
    // 图像验证
    verification(url, code) {
        return axios.post('/api/esvp/verification/verification', {
            authorizationCode: code,
            imageUrl: url
        })
    },
    // 人工审核提交
    manualVerificationAdd(id, url, code, resultContext) {
        return axios.post('/api/esvp/manualVerification/add', {
            userid: id,
            imageUrl: url,
            authorizationCode: code,
            resultContext: resultContext
        })
    },
    // 人工审核列表
    manualVerificationList(id) {
        return axios.post('/api/esvp/manualVerification/getList', {
            id: id
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