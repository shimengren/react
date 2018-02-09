// 定义路由相关的配置文件
import App from './../components/viewFirst/app';
import Index from './../components/index'
import ViewSecond from './../components/viewSecond/viewSecond';
import ViewThird from './../components/viewThird/viewThird';
import Detail from './../views/detail';
const routers =[
    {
        path: '/',
        component: Index,
        children:[
            {
                path: '/home',
                component: App,
            },
            {
                path: '/classify',
                component: ViewSecond,
            },
            {
                path: '/me',
                component: ViewThird,
            },
            {
                path: '/detail',
                component: Detail,
            }
        ]
    },
];

export default routers;



