/**
 * 优惠券数据请求api
 */
import { requestPost, requestGet } from './request'

// const apiBaseURL = import.meta.env.VITE_API_BASE_URL || null
// const apiBaseURL = 'http://localhost:9000/user-server/api'
const apiBaseURL = '/coupon-server'

/**
 * 查询xxxx数据
 * @param {*} param
 * @param {*} successResponse function(status, res, data)
 * @param {*} errorResponse function(status, error, msg)
 */
// export function getInfoList(param, successResponse, errorResponse) {
//   requestGet('/home/info_list/xxxxxx', param, apiBaseURL, successResponse, errorResponse)
// }

//获取优惠券列表
export function getCouponList (param, successResponse, errorResponse) {
  requestGet('/api/coupon/v1/page_coupon_list', param, apiBaseURL, successResponse, errorResponse)
}

//领取优惠券
export function addCoupon (param, successResponse, errorResponse) {
  requestGet(`/api/coupon/v1/add_coupon/${param.id}`, param, apiBaseURL, successResponse, errorResponse)
}

//查询我的优惠券
export function getMyCoupon (param, successResponse, errorResponse) {
  requestGet('/api/coupon_record/v1/page_coupon_list', param, apiBaseURL, successResponse, errorResponse)
}














