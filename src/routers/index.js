import Vue from 'vue'
import VueRouter from 'vue-router'
// import store from '@stores/index'

import riskRouter from './risk-router'

const originalPush = VueRouter.prototype.push

VueRouter.prototype.replace = function replace(location) {
    return originalPush.call(this, location).catch(err => err)
}

Vue.use(VueRouter)

const router = new VueRouter({

})

router.beforeEach((to, from, next) => {

})

export default router