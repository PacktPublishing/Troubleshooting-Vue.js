import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import RippleCounter from '@/components/RippleCounter'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: "/",
            name: "HelloWorld",
            component: HelloWorld
        },
        {
            path: "/counter",
            name: "RippleCounter",
            component: RippleCounter
        }
    ]
})