import Login from "../views/Login";
import Dashboard from "../views/Dashboard";

const routes = [
    {
        path: '/',
        name: '/',
        component: Dashboard,
        children: [
            //{path: '/dashboard', component: Dashboard},
            // {
            //     path: '/upload',
            //     name: 'upload',
            //     title: "图片上传",
            //     component: () => import('../views/Upload')
            // },
        ]
    },
    {
        path: '/login',
        name: 'login',
        component: Login
    }
];

export default routes;