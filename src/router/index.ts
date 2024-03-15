import { createRouter, createWebHashHistory, type RouteRecordRaw } from 'vue-router';

const layout = () => import('@/layout/layout.vue');
const routes: RouteRecordRaw[] = [
    {
        path: '/',
        component: layout,
        children: [
            {
                path: '',
                component: () => import('@/views/tohome/home.vue'),
                alias: 'home',
            },
        ],
    },
    {
        path: '/',
        component: layout,
        children: [
            {
                path: '/pages',
                component: () => import('@/views/pages/page.vue'),
            },
        ],
    },
    {
        path: '/',
        component: layout,
        children: [
            {
                path: '/blogs',
                component: ()=>import('@/views/blogs/blog.vue'),
            },
        ],
    },
    {
        path: '/meals',
        component: () => import('@/views/gomeals.vue'),
    },
    // {
    //     path: '/',
    //     component: layout,
    //     children: [
    //         {
    //             path: '/meals',
    //             component: () => import('@/views/gomeals.vue'),
    //         },
    //     ],
    // },
];

export default createRouter({
    history: createWebHashHistory(),
    routes,
});
