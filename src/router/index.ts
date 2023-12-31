import { createRouter, createWebHistory } from 'vue-router'
import StudentListView from '@/views/StudentListView.vue'
import StudentDetailView from '@/views/StudentDetailView.vue'
import AdvisorListView from '@/views/AdvisorListView.vue'
import AdvisorDetailView from '@/views/AdvisorDetailView.vue'
import SignUpView from '@/views/SignUpView.vue'
import SignInView from '@/views/SignInView.vue'
import SignUpAdvisor from '@/views/SignUpAdvisor.vue'
import StudentFormView from '@/views/StudentFormView.vue'
import AdvisorFormView from '@/views/AdvisorFormView.vue'
import EditAdvisorForm from '@/views/EditAdvisorFormView.vue'
import AddPostView from '@/views/AddPostView.vue'
import AddCommentView from '@/views/AddCommentView.vue'
import AnnouncementView from '@/views/AnnouncementView.vue'
import { useAuthStore } from '@/stores/auth'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: StudentListView,
      props: (route) => ({
        page: parseInt((route.query?.page as string) || "1"),
      }),
      beforeEnter(){
        const authStore = useAuthStore()
        const user = localStorage.getItem('user')
        if(user == null){
          router.push({
            name: 'Signin'
          })
        }
        if(authStore.isStudent){
          router.push({
            name: 'student-detail',
            params: {id:authStore.getId}
          })
        }
        if(authStore.isAdvisor){
          router.push({
            name: 'advisor-detail',
            params: {id:authStore.getId}
          })
        }
        // if(authStore.isAdmin){
        //   router.push({
        //     name: 'advisor',
        //     params: {id:authStore.getId}
        //   })
        // }
      }
    },
    {
      path: "/advisor",
      name: "advisor",
      component: AdvisorListView,
      props: (route) => ({
        page: parseInt((route.query?.page as string) || "1"),
      }),       
    },
    
    {
      path: "/student/:id",
      name: "student-detail",
      component: StudentDetailView,
      props: true,
    },

    {
      path: "/announcement",
      name: "announcement",
      component: AnnouncementView,
      props: true,
    },
    {
      path: "/add-comment/:id",
      name: "add-comment",
      component: AddCommentView,
      props: true,
    },
    {
      path: "/add-post",
      name: "add-post",
      component: AddPostView,
      props: true,
    },

    {
      path: "/Signup",
      name: "Signup",
      component: SignUpView,
      props: true,
    },
    {
      path: "/SignUpAdvisor",
      name: "SignUpAdvisor",
      component: SignUpAdvisor,
      props: true,
    },
    {
      path: "/Signin",
      name: "Signin",
      component: SignInView,
      props: true,
    },
    
  {
    path: "/advisor/:id",
    name: "advisor-detail",
    component: AdvisorDetailView,
    props: true,
  },

    {
      path: "/edit-student/:id",
      name: "edit-student",
      component: StudentFormView,
      props: true,
    },
  {
      path: "/add-advisor",
      name: "add-advisor",
      component: AdvisorFormView,
      props: true,
  },
  {
    path: "/edit-advisor/:id",
    name: "edit-advisor",
    component: EditAdvisorForm,
    props: true,
  },
  {
    path:"/student-advisor/:id",
    name: "student-advisor",
    component: AdvisorListView
  }
  ]  
})

export default router
