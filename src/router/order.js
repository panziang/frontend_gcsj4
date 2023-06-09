/**
 * 订单路由
 */
export default [
  {
    path: "/order",
    component: () => import("@/views/order/order.vue")
  },
  {
    path: "/order-detail/:id",
    component: () => import("@/views/order/order-detail.vue")
  },
  {
    path: "/pay/:order_way",
    component: () => import("@/views/order/pay.vue")
  }
]
