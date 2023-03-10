import axios from "@/service/axios.js";
let token = window.localStorage.getItem('token');


export const addPost = {
    state: () => ({
        message: "",
    }),
    mutations: {
        SetMessage(state, message) {
            state.message = message;
        }
    },
    actions: {
        ADD_POST: async ({ commit }, payload) => {
            console.log(token);
            try {
                console.log(token);
                const res = await axios.post('/post/add',{
                    
                }, {
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${token}`
                    }
                })
                if(res.data.status == 201){
                    commit('SetMessge', res.data.message)
                    return res.data
                    
                }
                
            } catch (error) {
                console.log(error);
            }
        }
    }
}