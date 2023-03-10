import axios from "@/service/axios.js"

export const login = {
    state:() => ({
        isLogged: false,
        logMessage: "",
        token:"",
        username: "",
        role:null,  
    }),

        mutations:{
            SetAuth(state, bool) {
                state.isLogged = bool;
                window.localStorage.setItem('auth', state.isLogged)
            },
            SetMessage(state, message) {
                state.logMessage = message;
            },
            SetToken(state, token) {
                state.token = token;
                window.localStorage.setItem('token', state.token);
            },
            SetUsername(state, param) {
                state.username = param;
                window.localStorage.setItem('username',param);
            },
            SetRole(state, param){
                state.role = param;
                window.localStorage.setItem('role',param);
            }

        },
        actions: {
            LOGIN_ADMIN: async ({
                commit
            }, payload) => {
    
                try {
                    const response = await axios.post("/admin/login", payload)
                    console.log(response);
                    commit('SetAuth', true)
                    commit('SetToken', response.data.access_token)
                    commit('SetMessage', "")
                    if(response.data.username !== undefined){
                        commit('SetUsername', response.data.username)
                    }

                    commit('SetRole', response.data.role)

                    return response
    
                } catch (err) {
                    console.log(err)
                    commit('SetMessage', err.response.data.message)
                    commit('SetToken', "")
                    commit('SetAuth', false)
                    commit('SetUsername', "")
                    commit('SetRole', "")
    
                }
            }
        }
}