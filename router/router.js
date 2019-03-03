// 定义路由相关的配置文件
import App from './../components/viewFirst/app';
import Index from './../components/index'
const routers =[
    {
        path: '/',
        component: Index,
        children:[
            {
                path: '/home',
                component: App,
            },
        ]
    },
];

export default routers;



