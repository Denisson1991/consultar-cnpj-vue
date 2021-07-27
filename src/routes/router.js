import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Home from '@/pages/Home'
import Results from '@/pages/Results'
import History from '@/pages/History'
const routes = [
    {
        path: '/',
        component: Home

    },
    {
        path: '/results/:cnpj',        
        component: Results,
        


    },
    {
        path: '/history',
        component: History,
        

    }
];

const router = new VueRouter({

    routes,
    mode: 'history'

});

export default router;