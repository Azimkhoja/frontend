import axios  from "@/service/axios";
let token = localStorage.getItem('token');
export const CreateCategory = {
    state: () => ({
        message:""
    }),
    mutations: {
        SetMessage(state, message){
            state.message = message
        }
    },
    actions:{
        ADD_CATEGORY: async ({commit}, category) => {
            try {
                const res = await axios.post('/category/add', category,  {
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${token}`
                    }
                })
                console.log(res);
                if(res.data.status !== 201){
                    commit('SetMessage', res.data.message);
                }
                    commit('SetMessage', res.data.message)
                    return res
            } catch (error) {
                console.log(error);
                commit('SetMessage', "")
            }
        }
    },
}