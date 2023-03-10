import axios from "@/service/axios.js";
let token = window.localStorage.getItem('token');


export const createAdmin = {
    state: () => ({
        message: "",
    }),
    mutations: {
        SetMessage(state, message) {
            state.message = message;
        }
    },
    actions: {
        ADD_ADMIN: async ({ commit }, payload) => {
            try {
                const res = await axios.post('/admin/create', payload, {
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${token}`
                    }
                })
                if(res.data.status != 201){
                    commit('SetMessage', res.data.message)
                    }
                return res
                
            } catch (error) {

            }
        }
    }
}