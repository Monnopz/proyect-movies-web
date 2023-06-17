//Funcion que recibe una vista para retornar una vista lazy load
const lazyLoad = (view) => ( () => import(/* webpackChunkName: "[request]" */ `@/modules/main/views/${view}.vue`) ) // Webpack utilizará automáticamente el nombre de archivo resuelto en `"[request]"`

export default {

    name: 'home',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "home-view" */ '@/modules/main/layouts/MainLayout.vue'),
    children: [
        {
            path: '',
            name: 'home-view',
            component: lazyLoad('HomeView')
        },
        {
            path: 'details-view/:idMovie',
            name: 'details-view',
            component: lazyLoad('DetailsView')
        }
    ]

}