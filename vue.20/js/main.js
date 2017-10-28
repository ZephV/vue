let routes = [
    {
        path:'/',
        component:{
            template:
            `<div>
                <h1>Home</h1>
            </div>`,
        },
    },
    {
        path:'/about',
        component:{
            template:
                `<div>
                <h1>关于我们</h1>
            </div>`,
        },
    },
    {
        path:'/user/:name',
        component:{
            template:
                `<div>
                <h1>{{$route.params.name}}</h1>
            </div>`,
        },
    },
];

let router = new VueRouter({
    routes: routes,
});

new Vue({
    el:'#app',
    router:router,
});

