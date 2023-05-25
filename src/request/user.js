/**
 * 用户数据请求api
 */
import axios from 'axios'
import { requestPost, requestGet, requestUpload } from './request'

// const apiBaseURL = import.meta.env.VITE_API_BASE_URL || null
// const apiBaseURL = 'http://localhost:9000/user-server/api'
const apiBaseURL = '/user-server'

/**
 * 查询xxxx数据
 * @param {*} param
 * @param {*} successResponse function(status, res, data)
 * @param {*} errorResponse function(status, error, msg)
 */
// export function getInfoList(param, successResponse, errorResponse) {
//   requestGet('/home/info_list/xxxxxx', param, apiBaseURL, successResponse, errorResponse)
// }

//获取图形验证码
export function sendKaptcha (param, successResponse, errorResponse) {
  requestGet('/api/notify/v1/get_kaptcha', param, apiBaseURL, successResponse, errorResponse)

}

//上传用户头像
export function getAvatar (param, successResponse, errorResponse) {
  requestUpload('/api/user/v1/upload_headImg', param, apiBaseURL, successResponse, errorResponse)
}


//密码登录
export function getSignInByPwd (param, successResponse, errorResponse) {
  requestPost('/api/user/v1/login_by_password', param, apiBaseURL, successResponse, errorResponse)
}

//获取用户详情信息
export function getUserDetail (param, successResponse, errorResponse) {
  requestGet('/api/user/v1/detail', param, apiBaseURL, successResponse, errorResponse)
}



// 注册
export function getSignUp (param, successResponse, errorResponse) {
  requestPost('/api/user/v1/register', param, apiBaseURL, successResponse, errorResponse)
}

// 邮箱、手机号验证码发送
export function getSignCode (param, successResponse, errorResponse) {
  requestGet('/api/notify/v1/get_register_code', param, apiBaseURL, successResponse, errorResponse)
}

// 退出登录
export function getSignOut (param, successResponse, errorResponse) {
  requestGet('/api/user/v1/log_out', param, apiBaseURL, successResponse, errorResponse)
}

// 新增收货地址
export function getNewAddress (param, successResponse, errorResponse) {
  requestPost('/api/address/v1/save', param, apiBaseURL, successResponse, errorResponse)
}

// 查询收货地址列表
export function getAddressList (param, successResponse, errorResponse) {
  requestGet('/api/address/v1/list', param, apiBaseURL, successResponse, errorResponse)
}





