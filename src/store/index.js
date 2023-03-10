import {createStore} from 'vuex'
import {login} from "./modules/admin/login"
import {signup} from "./modules/admin/signup"
import {createAdmin} from "./modules/admin/create"
import { CreateCategory } from './modules/category/addCategory'
import { addPost } from './modules/post/addPost'


export const store = createStore({
    modules: {
        login,
        signup,
        createAdmin,
        CreateCategory,
        addPost

    }
})
