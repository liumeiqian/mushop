import http from './axios'

// 封装接口
// 首页轮播图
export function getBanner() {
  return http.get('/getbanner')
}

// 封装获取商品信息(首页)
export function getIndexGoods() {
  return http.get('/getindexgoods')
}

// 封装分类树形结构
export function getCateTree() {
  return http.get('/getcatetree')
}

// 封装获取分类商品
export function getGoods(params) {
  return http.get('/getgoods', { params })
}

// 获取一个商品信息
export function getGoodsInfo(params) {
  return http.get('/getgoodsinfo', { params })
}

// 注册
export function register(data) {
  return http.post('/register', data)
}


// 登录
export function getLogin(data) {
  return http.post('/login', data)
}

// 购物车添加
export function cartAdd(data) {
  return http.post('/cartadd', data)
}


// 购物车列表
export function getCartList(params) {
  return http.get('/cartlist', { params })
}


// 购物车删除
export function cartDelete(data) {
  return http.post('/cartdelete', data)
}
