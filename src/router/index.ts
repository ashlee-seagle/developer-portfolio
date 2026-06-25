import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../pages/HomePage.vue'
import SelfServiceEventCaseStudy from '../pages/SelfServiceEventCaseStudy.vue'

export const router = createRouter({
  history: createWebHistory(),
  scrollBehavior(to) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
      }
    }

    return {
      top: 0,
    }
  },
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage,
    },
    {
      path: '/projects/self-service-event-management-platform',
      name: 'self-service-event-management-platform',
      component: SelfServiceEventCaseStudy,
    },
  ],
})