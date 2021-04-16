import Login from "../views/Login";
import Dashboard from "../views/Dashboard";

const routes = [
    {
        path: '/',
        name: '/',
        component: Dashboard,
        children: [
            //{path: '/dashboard', component: Dashboard},
            {
                path: '/upload',
                name: 'upload',
                title: "图片上传",
                component: () => import('../views/Upload')
            },
            {
                path: '/category-list',
                name: 'category-list',
                title: "图片分类",
                component: () => import('../views/ImageList')
            },
            {
                path: '/image-list',
                name: 'image-list',
                title: "图片集合",
                component: () => import('../views/ImageList')
            },
            //gallery-list
            {
                path: '/gallery-list',
                name: 'gallery-list',
                title: "相册集合",
                component: () => import('../views/GalleryList')
            },
            {
                path: '/user-list',
                name: 'user-list',
                title: "用户列表",
                component: () => import('../views/UserList')
            },
            {
                path: '/demo',
                name: 'demo',
                title: "demo",
                component: () => import('../views/Demo')
            }

        ]
    },
    {
        path: '/login',
        name: 'login',
        component: Login
    }
];

export default routes;