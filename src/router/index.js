import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Details from "@/views/Details";
import CreateForm from "@/views/CreateForm";
import Tag from "@/views/Tag";

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/posts/:id',
    name: 'details',
    component: Details,
    props: true
  },
  {
    path: '/create',
    name: 'createForm',
    component: CreateForm,
  },
  {
    path: '/tags/:tag',
    name: 'tag',
    component: Tag,
    props: true
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
