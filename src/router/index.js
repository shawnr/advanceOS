import Vue from 'vue'
import Router from 'vue-router'
import EmployeeAuthWizard from '@/components/EmployeeAuthWizard'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'EmployeeAuthWizard',
      component: EmployeeAuthWizard
    }
  ]
})
