/*
 * @Author: your name
 * @Date: 2020-06-03 09:04:52
 * @LastEditTime: 2020-06-11 11:12:02
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \demo\src\routers\index.js
 */
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