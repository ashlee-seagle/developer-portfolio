import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../pages/HomePage.vue'
import SelfServiceEventCaseStudy from '../pages/SelfServiceEventCaseStudy.vue'
import NotFoundPage from '../pages/NotFoundPage.vue'
import ReusableFrontendPlatformCaseStudy from '../pages/ReusableFrontendPlatformCaseStudy.vue'

let skipNextHashScroll = false

export const skipNextRouterHashScroll = () => {
  skipNextHashScroll = true
}

export const router = createRouter({
  history: createWebHistory(),
  scrollBehavior(to) {
    if (to.hash) {
      if (skipNextHashScroll) {
        skipNextHashScroll = false
        return false
      }

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
    {
      path: '/projects/reusable-frontend-platform',
      name: 'reusable-frontend-platform',
      component: ReusableFrontendPlatformCaseStudy,
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'not-found',
        component: NotFoundPage,
    }
  ],
})
