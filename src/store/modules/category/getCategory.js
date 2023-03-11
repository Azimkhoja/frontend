import axios  from "@/service/axios";
export const GetCategory = {
    state: () => ({
        message:""
    }),
    mutations: {
        SetMessage(state, message){
            state.message = message
        }
    },
    actions:{
        GET_CATEGORY: async ({commit}, category) => {
            try {
                const res = await axios.get('/category')
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