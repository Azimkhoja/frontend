import { createRouter, createWebHistory } from 'vue-router'
import HomeView from "../views/HomeView.vue"
import AboutView from "../views/AboutView.vue"
import SignupView from "../views/SignupView.vue"
import SigninView from "../views/SigninView.vue"
import NotFoundView from "../views/NotFoundView.vue"
import AdminView from "../views/AdminView.vue"
import AddAdminView from "../views/AddAdminView.vue"
import AdminListView from "../views/AdminListView.vue"
import AddCategory from "../views/AddCategory.vue"
import CategoryView from "../views/CategoryView.vue"
import CategoryList from "../views/CategoryList.vue"
import PostView from "../views/Post/PostView.vue"
import PostList from "../views/Post/PostList.vue"
import AddPost from "../views/Post/AddPost.vue"


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'HomeView', 
      component: HomeView
    },
    {
      path: '/:pathMatch(.*.)*',
      name: 'NotFoundView', 
      component: NotFoundView
    },
    {
      path: '/signin',
      name: 'SigninView',
      component: SigninView
    },
    {
      path: '/category',
      name: 'CategoryView',
      component: CategoryView,
      children: [
        {
          path: '/category/add',
          name: "AddCategory",
          component: AddCategory
        },
        {
          path: '/category/list',
          name: "CategoryList",
          component: CategoryList
        },
      ]
    },
    {
      path: '/post',
      name: 'PostView',
      component: PostView,
      children: [
        {
          path: '/post/add',
          name: "AddPost",
          component: AddPost
        },
        {
          path: '/post/list',
          name: "PostList",
          component: PostList

        },
      ]
    },
    {
      path: '/admin',
      component: AdminView,
      children: [
        {
          path: '/admin/add',
          name: "AddAdmin",
          component: AddAdminView
        },
        {
          path: '/admin/list',
          name: "AdminList",
          component: AdminListView
        }
      ]
    },
    {
      path: '/signup',
      name: 'SignupView',
      component: SignupView
    },
    {
      path: '/about',
      name: 'AboutView',
      component: AboutView
    },
    
  ]
})

export default router
