import request from '@/utils/request'

export default {
    
    //生成订单
    createOrder(courseId) {
        return request({
            url: `/eduorder/order/createOrder/${courseId}`,
            method: 'post'
        })
    },
    
    //查询订单
    getOrderInfo(orderNo) {
        return request({
            url: '/eduorder/order/getOrderInfo/' +orderNo,
            method: 'get'
        })
    },

    createQR(orderNo){
        return request({
            url: `/eduorder/paylog/createQRcode/${orderNo}`,
            method: 'get'
        })
    },

    queryOrder(orderNo){
        return request({
            url: `/eduorder/paylog/queryPayStatus/${orderNo}`,
            method: 'get'
        })
    }


}