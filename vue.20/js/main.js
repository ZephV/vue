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
                 </div>
                `,
        },
    },
    {
        path:'/user/:name',
        component:{
            template:
                `<div>
                <h1>我叫:{{$route.params.name}}</h1>
                <router-link to="more" append>更多信息</router-link>
                <router-view></router-view>
            </div>`,
        },
        children:[
            {
                path:'more',
                component:{
                    template:
                        `
                    <div>
                    用户:{{$route.params.name}}的详细细心
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam cumque dolor dolore ex expedita, laboriosam maxime nulla temporibus! Accusamus asperiores aspernatur, beatae consectetur odit optio quis quod repellendus tempore ut!
                    </div>
                    
                    `,

                }
            }
        ]
    },
];

let router = new VueRouter({
    routes: routes,
});

new Vue({
    el:'#app',
    router:router,
});

