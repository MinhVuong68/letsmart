import { ProductCategoryInfo, Home, Login, Order, OrderDetail } from "../pages"


const publicRoute = {
    login: { path: "/login", component: Login, layout: null },
    order: { path: "/order", component: Order, layout: null },
    orderDetail: { path: "/order-detail", component: OrderDetail, layout: null },
    home: { path: "/", component: Home },
    productCategoryInfo: { path: "/category/:tag", component: ProductCategoryInfo },
}

const privateRoute = [

]

export { publicRoute, privateRoute }