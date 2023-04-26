import {createStore} from "vuex";

export default createStore({
    state: {
        //token
        // token: localStorage.getItem('token') || '',
        //用户信息
        userInfo: null
    },

    mutations: {
        //设置token
        // setToken(state, token) {
        //     state.token = token;
        //     localStorage.setItem('token', token);
        // }
        //设置用户信息
        setUserInfo(state, userInfo) {
            state.userInfo = userInfo;
        }
    }
})